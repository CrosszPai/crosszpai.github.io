<script>
  import Nav from "../components/Nav.svelte";
  import Modal from "../components/Modal.svelte";
  import { modal } from "../store.js";
  import { onDestroy } from "svelte";
  export let segment;
  let showModal;
  const unsub = modal.subscribe(v => {
    showModal = v;
  });
  onDestroy(unsub);
</script>

<style>
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
	object-fit: cover;
	margin: auto;
  }
</style>

<Nav {segment} />

<main style="padding-top:56px;">
  <slot />
</main>
{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <div style="padding:16px;display:flex;" slot="header">
      <h2 style="margin:auto;font-weight:400">About Me</h2>
    </div>
    <div style="display:flex;flex-direction:column;">
      <img src="husky_quote.jpg" alt="" />
	  <div style="padding:20px">
	  	<p>
		  I'm not stoopid doggo! <br>
		  all of catto no shood get out of ma buddy house!
		  </p>
	  </div>
    </div>
  </Modal>
{/if}
