<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello from an other component!'
		});
	}
</script>

<button on:click={sayHello}>
	Click to hear from an other component!
</button>