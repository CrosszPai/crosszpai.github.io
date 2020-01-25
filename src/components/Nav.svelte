<script>
  export let segment;
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
</style>

<svelte:head>
  {#if segment && segment === 'undefine'}
    <title>CrosszPai Github Pages</title>
  {:else}
    <title>
      CrosszPai : {segment.replace(/^\w/, chr => chr.toUpperCase())}
    </title>
  {/if}
</svelte:head>

<div>
  <div class="TopBar">
    <a href=".">Home</a>
    <nav class="TopBar-nav">
      <a
        href="repositories"
        class:is-active={segment === 'repositories'}
        class="TopBar-link">
        Repositories
      </a>
      <a
        href="playgrounds"
        class:is-active={segment === 'playgounds'}
        class="TopBar-link">
        Project Playground
      </a>
    </nav>
  </div>
</div>
