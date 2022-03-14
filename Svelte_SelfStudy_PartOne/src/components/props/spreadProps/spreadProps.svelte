<script>
    import Information from './propData.svelte';

    const data = {
        userId: 1,
        userName: 'Kristian H',
        email: 'test@test.dk'
    }
</script>

<Information {...data} />