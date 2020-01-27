<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { modal } from "../store.js";
  const close = () => {
    modal.update(v => false);
  };

  let _modal;
  const unsub = modal.subscribe(v => {
    _modal = v;
  });
  onDestroy(unsub);
  const handle_keydown = e => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = _modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused =
    typeof document !== "undefined" && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.blur();
    });
  }
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    background: white;
  }
</style>

<svelte:window on:keydown={handle_keydown} />

<div
  class="modal-background"
  on:click={close}
  in:fade={{ duration: 100 }}
  out:fade={{ duration: 100 }} />

<div
  class="modal"
  role="dialog"
  aria-modal="true"
  bind:this={_modal}
  in:fly={{ y: 10, duration: 100 }}
  out:fade={{ duration: 100 }}>
  <slot name="header" />
  <hr />
  <slot />
</div>
