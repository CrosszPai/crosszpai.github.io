<script context="module">
  export async function preload() {
    const res = await this.fetch(
      "https://api.github.com/users/CrosszPai/repos",
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json"
        }
      }
    );
    if (res.status === 200) {
      let repos = await res.json();
      return { repos };
    }
    this.err(500, "Internal Error");
    return [];
  }
</script>

<script>
  export let repos = [];
  let color_word = {
    svelte: {
      color: "white",
      background: "#ff3e00"
    },
    sapper: {
      color: "white",
      background: "#159794"
    },
    golang: {
      color: "black",
      background: "#7fd5ea"
    },
    vue: {
      color: "white",
      background: "#4fc08d"
    },
    vuejs: {
      color: "white",
      background: "#4fc08d"
    },
    arduino: {
      color: "white",
      background: "#00979d"
    },
    cpp: {
      color: "white",
      background: "#364f6f"
    },
    angular: {
      color: "white",
      background: "linear-gradient(145deg,#dd0031,#c3002f)"
    },
    angular8: {
      color: "white",
      background: "linear-gradient(145deg,#dd0031,#c3002f)"
    },
    image: {
      color: "black",
      background: "#e7d050"
    },
    ecs: {
      color: "black",
      background: "#e7d050"
    },
    "entity-component-system": {
      color: "black",
      background: "#e7d050"
    },
    sdl2: {
      color: "white",
      background: "#132B48"
    },
    firebase: {
      color: "grey",
      background: "#f8c42d"
    },
    "serial-communication": {
      color: "black",
      background: "#b3d2f8"
    }
  };
  const getClass = topic => {
    return color_word[topic];
  };
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
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.1);
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
  .topic {
    margin-left: 15px;
  }
  .topic:first-child {
    margin-left: 0;
  }
  .topic {
    background: rgba(0, 0, 0, 0.05);
    transition: all 0.15s ease-in;
    margin-left: 25px;
    letter-spacing: 0.4px;
    border-radius: 0.25rem;
  }
</style>

<svelte:head>
    <title>CrosszPai: Repositories</title>
</svelte:head>

<section>
  <div class="content">
    <p style="font-size:36px">Public Repositories.</p>
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
