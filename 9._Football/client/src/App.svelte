<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/generalStore.js";

	let players = "";

	onMount(async () => {
		const response = await fetch("/players");
		const { data:playersArray } = await response.json();
		players = playersArray;
	});

</script>

<main>
	<h1>{JSON.stringify(players)}</h1>
	
</main>
<footer>
	{new Date().getFullYear()}
	Contact
	About
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh- 3.7em);
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>