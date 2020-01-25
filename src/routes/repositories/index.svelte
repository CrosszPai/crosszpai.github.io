<script>
  let repos = [];
  import { onMount } from "svelte";
  onMount(async () => {
    const res = await fetch("https://api.github.com/users/CrosszPai/repos");
    repos = await res.json();
    console.log(repos);
  });
</script>

{#if repos}
  <u>
    {#each repos as repo}
      <li>
        <a href={repo.html_url}>{repo.name}</a>
      </li>
    {/each}
  </u>
{/if}
