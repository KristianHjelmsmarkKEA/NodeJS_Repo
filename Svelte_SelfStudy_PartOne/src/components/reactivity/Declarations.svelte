<script>
    
    let count = 1;
    
    $: doubled = count * 2;
    $: divided = count / 2; 

    function doMath() {
        count += 1;
    }
</script>

<button on:click={doMath}>
    Click for math: {count};
</button>


<p> { count } * 2 = { doubled } </p>
<p> { count } / 2 = { divided } </p>



