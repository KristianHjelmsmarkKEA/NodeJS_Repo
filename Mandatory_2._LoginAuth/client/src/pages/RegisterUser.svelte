<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { toast } from "@zerodevx/svelte-toast";

    const navigate = useNavigate();
    const location = useLocation();

    const form = document.getElementById('register');
    
    async function registerUser(event) {
        event.preventDefault()
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        const result = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            // everythign went fine
            const from = ($location.state && $location.state.from) || "/login";
            navigate(from, { replace: true });
        } else {
            toast.push(result.error);
        }
    }
</script>


<div class="register">
    <h1>Register new User</h1>
    <form on:submit|preventDefault={registerUser}>
        <input type="text" name="username" autocomplete="off" placeholder="Username" id="username" required>
        <input type="password" name="password" autocomplete="off" placeholder="Password" id="password" required>
        <input type="email" name="email" autocomplete="off" placeholder="Email" id="email" required>
        <input type="submit" value="Submit form">
    </form>
</div>


<style>
* {
    box-sizing: border-box;
    font-size: 16px;
}

.register {
    width: 400px;
    background-color: #ffffff;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.3);
    margin: 100px auto;
}
.register h1 {
    text-align: center;
    color: #5b6574;
    font-size: 24px;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #dee0e4;
}
.register form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
}

.register form input[type="password"],[type="email"],[type="text"] {
    width: 310px;
    height: 50px;
    border: 1px solid #dee0e4;
    margin-bottom: 20px;
    padding: 0 15px;
}
.register form input[type="submit"] {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    background-color: #3274d6;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    transition: background-color 0.2s;
}
.register form input[type="submit"]:hover {
  background-color: #2868c7;
    transition: background-color 0.2s;
}
</style>