<script>
    let randomNumber;

    function setRandomNumber() {
        randomNumber = Math.random().toFixed(2);
    }
</script>

<p>The random number is: { randomNumber }</p>
<p> { Math.round(randomNumber) ? 'Rouned to 1' : 'rounded to 0' }</p>
<button on:click={setRandomNumber}>New random number</button>