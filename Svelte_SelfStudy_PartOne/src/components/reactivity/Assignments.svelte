<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>
<p>Number of clicks: { count } </p>

<button on:click={handleClick}>
	Click for clicks
</button>