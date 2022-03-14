<script>
    let string = `We can render HTML directly into a component in svelte 
    <strong>
    <p>This is an example</p>
    </strong>`
</script>

<p>{@html string}</p>