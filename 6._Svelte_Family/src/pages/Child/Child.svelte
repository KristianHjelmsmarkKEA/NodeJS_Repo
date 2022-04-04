<script>
    export let childName;
    export let isGirl = false;
    export let stereoType = "";
    export let handleFamilyMeetingCall;

    import { supermarket } from "../../store/supermarket";


    function eatCandy() {
        supermarket.update(storeValue => {
            if ( storeValue.candy > 0) storeValue.candy -= 1;
            return storeValue;
        });
        //$supermarket.candy--; works aswell, but then you need to implement logic to handle -2 candy e.g. 
    }
</script>


<div class:girly={isGirl} 
     class={stereoType || "beyond-any-stereotype"}>
    <h3 on:click={handleFamilyMeetingCall(childName)}>
        Hi my name is {childName}, im a child
    </h3>
    <div>Pieces of candy in the store: {$supermarket.candy}</div>
    <button on:click={eatCandy}>Eat candy</button>

</div>


<style>
    .girly {
        background-color: pink;
    }
    .black-sheep {
        background-color: black;
        color: wheat;
    }
    .bright-kid {
        background-color: aqua;
    }
</style>