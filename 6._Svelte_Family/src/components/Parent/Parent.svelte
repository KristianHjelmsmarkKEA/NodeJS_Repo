<script>
    export let parentName;
    export let handleFamilyMeetingCall;

</script>

<h1 class="parent" on:click={handleFamilyMeetingCall(parentName)} >Hi im a Svelte parent, my name is {parentName}.</h1>

<style>
    .parent {
    user-select: none;
}
</style>