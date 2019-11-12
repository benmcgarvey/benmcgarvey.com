<script>
  export let posts;
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .list {
    max-width: 700px;
    width: 100%;
    margin-top: 10px;
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
          <a rel="prefetch" href="blog/{post.slug}">{post.metadata.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
