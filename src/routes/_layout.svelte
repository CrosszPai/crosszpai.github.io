<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment}/>

<main style="padding-top:56px;">
	<slot></slot>
</main>