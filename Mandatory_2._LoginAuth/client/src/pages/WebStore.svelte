<script>
    import { useNavigate, useLocation } from "svelte-navigator";

    const navigate = useNavigate();
    const location = useLocation();
	
	function handleLogout() {
		const from = ($location.state && $location.state.from) || "/login";
        navigate(from, { replace: true });
	}

</script>


<div class="logout">
    <h1>Logout</h1>
    <form on:submit|preventDefault={handleLogout}>
        <input type="submit" value="logout">
    </form>
</div>