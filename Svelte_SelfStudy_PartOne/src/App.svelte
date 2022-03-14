<script>
	export let name;
	import DynamicGif from "./components/introduction/dynamic.svelte";
	import StyledParagrahp from "./components/introduction/Styling/Styling.svelte";
	import NestedStyledParagrahp from "./components/introduction/NestedComponents/NestedComponents.svelte";
	import HTML_TagExample from "./components/introduction/HTML_Tags/HTML_Tags.svelte";
	import Assignments from "./components/reactivity/Assignments.svelte";
	import Declarations from "./components/reactivity/Declarations.svelte";
	import Statements from "./components/reactivity/Statements.svelte";
	import DeclaringProps from "./components/props/Declaring_props/declaringProps.svelte";
	import DefaultValues from "./components/props/defaultValues/DefaultValues.svelte";
	import SpreadProps from "./components/props/spreadProps/spreadProps.svelte";
	import IfAndElse from "./components/logic/IfAndElse.svelte";
	import ElseIf from "./components/logic/ElseIf.svelte";
	import Each from "./components/logic/Each.svelte";
	import KeyedEachBlock from "./components/logic/KeyedEachBlock.svelte";
	import DomEvents from "./components/events/DOM_Events.svelte";
	import InlineHandlers from "./components/events/InlineHandlers.svelte";
	import EventModifiers from "./components/events/EventModifiers.svelte";
	import ComponentEvents from "./components/events/ComponentEvents.svelte";
	import EventForwarding from "./components/events/EventForwarding/EventForwarding.svelte";
</script>

<main>
	<h1>Hello {name}!</h1>
	<DynamicGif />
	<StyledParagrahp />
	<NestedStyledParagrahp />
	<HTML_TagExample />
	<Assignments />
	<Declarations />
	<Statements />
	<DeclaringProps />
	<DefaultValues />
	<SpreadProps />
	<IfAndElse />
	<ElseIf />
	<Each />
	<KeyedEachBlock />
	<DomEvents />
	<InlineHandlers />
	<EventModifiers />
	<ComponentEvents />
	<EventForwarding />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>