import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "mandatory2nodem@outlook.dk",
        pass: "nodemailerMandatory"
    }
});

const options = {
    from: "mandatory2nodem@outlook.dk",
    to: "mandatory2nodemailer@gmail.com",
    subject: "Sending email with nodemailer",
    text: "This is from nodemailer, mandatory 2 assignment"
};

transporter.sendMail(options, function(err, info) {
    if(err) {
        console.log(err)
        return;
    }
    console.log("Sent mail: " + info.response);
})