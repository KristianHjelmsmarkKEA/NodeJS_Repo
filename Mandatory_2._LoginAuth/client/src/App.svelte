<script>
	import { Router, Route, Link } from "svelte-navigator";
	import PrivateRoute from "./components/PrivateRoute.svelte";
	import RegisterUser from "./pages/RegisterUser.svelte";
	import Login from "./pages/Login.svelte";
	import WebStore from "./pages/WebStore.svelte";
	import { SvelteToast } from "@zerodevx/svelte-toast";
</script>

<Router>
	<nav>
		<button><Link to="/register">Sign Up</Link></button>
		<button><Link to="/webstore">Login</Link></button>
	</nav>
	<main>
		<Route path="/login" component={Login} />
		<Route path="/register" component={RegisterUser} />
		<PrivateRoute path="/webstore" let:location>
			<p>Welcome! You succesfully logged in :)</p>
			<WebStore/>
		</PrivateRoute>
	</main>
</Router>
<SvelteToast></SvelteToast>


<style>
nav {
	font-size: x-large;
	border: 4px solid rgb(32, 106, 218);
	border-radius: 10px;
	margin: auto;
	padding: 20px;
}
button {
	border-radius: 10px;
	margin: auto;
	padding: 5px;
}

</style>