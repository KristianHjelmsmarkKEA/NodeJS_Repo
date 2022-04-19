import { Router } from "express";
const router = Router();
import User from "../schema/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../auth/auth.js";

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'


router.post('/api/login', async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username }).lean();

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' });
	}

	if (await bcrypt.compare(password, user.password)) {
		// Succesful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username,
				expiresInMinutes: 1
			},
			JWT_SECRET
		)
		return res.json({ status: 'ok', data: token, user: username });
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

router.post('/api/register', async (req, res) => {
    console.log(res.body); 
	const { username, password: plainTextPassword, email } = req.body;

	const password = await bcrypt.hash(plainTextPassword, 10);

	try {
		const response = await User.create({
			username,
			password,
            email
		});
		console.log('User created successfully: ', response);
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' });
		}
		throw error;
	}
	res.json({ status: 'ok' });
});

router.get('/api/logout', auth, function(req,res){
	req.user.deleteToken(req.token, (err,user) => {
		if(err) return res.status(400).send(err);
		const token = jwt.expiresInMinutes(1);
		res.sendStatus(200);
	});

});

export default router;