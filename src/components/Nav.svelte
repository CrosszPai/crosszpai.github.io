<script>
  export let segment;
  import { onDestroy } from "svelte";
  import { modal } from "../store.js";
  let title = segment;
  const openmodal = () => {
    modal.update(m => true);
  };
  $: {
    title = segment;
  }
</script>

<style>
  .is-active {
    background: rgba(16, 112, 202, 0.09);
    color: #1070ca;
  }
  .TopBar,
  .TopBar-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .TopBar {
    z-index: 1;
    height: 56px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9;
    background: #fff;
    -webkit-box-shadow: 0 0 1px rgba(67, 90, 111, 0.47),
      0 2px 4px -2px rgba(67, 90, 111, 0.3);
    box-shadow: 0 0 1px rgba(67, 90, 111, 0.47),
      0 2px 4px -2px rgba(67, 90, 111, 0.3);
  }
  .TopBar-nav {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 24px;
  }
  .TopBar-link {
    color: #425a70;
    text-transform: uppercase;
    line-height: 16px;
    font-size: 12px;
    padding: 10px 12px;
    margin-right: 8px;
    height: 36px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: 0.4px;
    border-radius: 3px;
  }
  .TopBar-link:hover {
    background-color: rgba(67, 90, 111, 0.06);
  }
  .TopBar-link:focus {
    background: rgba(16, 112, 202, 0.09);
  }
  .TopBar-navRight {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .btn {
    display: flex;
    padding: 10px 12px;
    border-radius: 5px;
  }
  .btn:hover {
    background: rgba(67, 90, 111, 0.06);
    text-decoration: none;
  }
  .btn:focus {
    background: rgba(16, 112, 202, 0.09);
  }
  .btn span {
    display: flex;
    margin: auto;
    padding-left: 5px;
  }
  button {
    border: none;
    background: transparent;
  }
  button:hover,
  :focus,
  :active,
  :visited {
    cursor: pointer;
    outline: none;
  }
</style>

<div style="position:fixed;width:100%;--">
  <div class="TopBar">
    <a href=".">Home</a>
    <nav class="TopBar-nav">
      <a
        href="repositories"
        rel=prefetch
        class:is-active={segment === 'repositories'}
        class="TopBar-link">
        Repositories
      </a>
      <a
        href="playgrounds"
        class:is-active={segment === 'playgrounds'}
        class="TopBar-link">
        Project Playground
      </a>
    </nav>
    <nav class="TopBar-navRight">
      <button on:click={openmodal} class="btn">
        <span>About Me</span>
      </button>
      <a href="https://github.com/CrosszPai" class="btn" target="_blank">
        <img
          src="octocat_64x64.png"
          style="width:24px;height:24px;margin:auto"
          alt="CrosszPai GitHub" />
        <span>GitHub</span>
      </a>
    </nav>
  </div>
</div>
