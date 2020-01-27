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
      <img src="kuu2.jpg" alt="" />
	  <div style="padding:20px">
	  	<p>
		  Narawit Triprom ภาษาไทยคือ นราวิชญ์ ไตรพรม <br>
		  เรียนอยู่ลาดกระบัง วิศวะภาคคอมครับ <br>
      เลิกกินแอลกอฮอล์แล้วด้วย
		  </p>
      <hr>
      <p>
        เว็บนี้ทำจาก svelte + sapper เลยนะ eieieie
      </p>
	  </div>
    </div>
  </Modal>
{/if}
