<script>
  import MainContainer from "./MainContainer.svelte";
  export let posts;
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  @media (max-width: 768px) {
    .container {
      display: flex;
      justify-content: stretch;
      height: 100%;
      width: 100%;
    }
  }

  .list {
    max-width: 1000px;
    margin-top: 10px;
    margin-left: 25px;
    margin-right: 25px;
    font-size: 21px;
    line-height: 158%;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  a:hover {
    color: #729eb0;
  }
</style>

<div class="container">
  <div class="list">
    <h1>Recent posts</h1>
    <ul>
      {#each posts as post}
        <li>
          <a rel="prefetch" href={post.slug}>{post.metadata.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
