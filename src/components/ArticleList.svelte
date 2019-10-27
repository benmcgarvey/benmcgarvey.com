<script>
  import MainContainer from "./MainContainer.svelte";
  export let posts;
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .list {
    width: 1100px;
    margin-left: 25px;
    margin-right: 25px;
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
