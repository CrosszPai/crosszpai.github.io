<script>
  let repos = [];
  import { onMount } from "svelte";
  onMount(async () => {
    const res = await fetch("https://api.github.com/users/CrosszPai/repos", {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    });
    let err = await res.json();
    if (res.ok) {
      repos = err;
    } else {
      throw new Error(err);
    }
  });
</script>

<style>
  .content {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 80px 24px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
  }
  .content ul {
    max-height: 400px;
    overflow-y: auto;
    width: 100%;
  }
  .content li {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 5px;
  }
  .topic {
    background: rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease-in;
    margin-left: 25px;
    letter-spacing: 0.4px;
    border-radius: 0.25rem;
  }
</style>

<section>
  <div class="content">
    <ul>
      {#each repos as repo}
        <li>
          <a href={repo.html_url} target="__blank">{repo.name}</a>
          <div style="display:block">
            {#each repo.topics as topic}
              <span class="topic">{topic}</span>
            {/each}
          </div>
        </li>
      {:else}
        <div>
          <h1>Loading...</h1>
          <h4>Maybe api server is in downtime.</h4>
        </div>
      {/each}
    </ul>
  </div>
</section>
