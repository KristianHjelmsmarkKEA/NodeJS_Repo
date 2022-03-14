<script>

    let randomNumber;

    $: result = Math.round(randomNumber * 100);

     function setRandomNumber() {
        randomNumber = Math.random();
    }
</script>
<br>
<button on:click="{setRandomNumber}">Click to get a number!</button>
<p>Your lucky number is: {result}!</p>

{#if result > 75 }
<p>In the top 25%!</p>
{:else if result > 50}
<p>Decent result top 50%</p>
{:else}
<p>Loser...</p>
{/if}

