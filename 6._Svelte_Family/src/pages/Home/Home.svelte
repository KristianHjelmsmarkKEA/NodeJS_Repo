<script>
    import Parent from "../../components/Parent/Parent.svelte";
    import Child from "../Child/Child.svelte";

    import { supermarket } from "../../store/supermarket";
    
    const parents = [
        {
            key: 1,
            name: "Ludvig"
        },
        {
            key: 2,
            name: "Daddy"
        }
    ];

    function onFamilyMeetingCalled(whoCalled) {
        console.log("Family meeting called by ", whoCalled);
    }
</script>

<h1>This the homepage of the Svelte family.</h1>

{#each parents as parent (parent.key)}
<Parent handleFamilyMeetingCall={onFamilyMeetingCalled} parentName={parent.name} />
{/each}


<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereoType="black-sheep" childName="Benny" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereoType="bright-kid" childName="Miller" />
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} isGirl={true} childName="Maria" />



<h1>This is the online portal for the supermarket</h1>
<p>{JSON.stringify($supermarket)}</p>

