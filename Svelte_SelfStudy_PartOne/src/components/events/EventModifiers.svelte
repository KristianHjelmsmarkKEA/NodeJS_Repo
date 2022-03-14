<script>
	function handleClick() {
		alert('Nothings gonna happen with further clicks')
	}
</script>

<button on:click|once={handleClick}>
	Click me
</button>