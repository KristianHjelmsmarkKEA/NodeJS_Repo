<script>
    let assignmentStatus = { currentStatus: false };

    function changeStatus() {
        assignmentStatus.currentStatus = !assignmentStatus.currentStatus;
    }
</script>

{#if assignmentStatus.currentStatus}
   <button on:click="{changeStatus}">Self Study not done</button>
{:else}
   <button on:click="{changeStatus}">Self study done!</button>
{/if}