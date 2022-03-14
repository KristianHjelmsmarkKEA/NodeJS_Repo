<script>
import { faker }  from '@faker-js/faker';

function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

let columns = ["Firstname", "Lastname", "Imgage", "Job"];

const data = [];
createFakerPeople(20);

function createFakerPeople(numberOfPeople) {
    for (let i = 0; i < numberOfPeople; i++) {
        data.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar(),
            job: faker.name.jobArea()
        });
    }
};

</script>

<table id="generel-table">
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
		<tr>
			{#each Object.values(row) as cell}
            {#if isImage(cell)}
            <td>
                <img src="{cell}" alt="Avatar">
            </td>
            {:else}
			<td contenteditable="true" bind:innerHTML={cell} />
			{/if}
            {/each}
		</tr>
	{/each}
</table>

<style>
    #generel-table {
        margin: auto;
        border: 2px solid black;
        padding: 10px;
    }
    tr {
        border: 2px solid black;
        background-color: burlywood;
    }
</style>





