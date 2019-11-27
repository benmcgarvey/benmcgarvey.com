<script>
  import ContentContainer from "./ContentContainer.svelte";
  export let posts;

  const sortPosts = posts =>
    posts
      .filter(post => post.metadata.draft !== "true")
      .sort((a, b) => a.metadata.date > b.metadata.date);

  console.log(posts);
  const sortedPosts = sortPosts(posts);
</script>

<style>
  .list {
    max-width: 700px;
    width: 100%;
    margin-top: 10px;
    font-size: 21px;
    line-height: 158%;
  }

  ul {
    padding-left: 0;
    line-height: 1.5;
  }

  li {
    list-style-type: none;
  }

  .title {
    margin-right: 10px;
  }

  .link {
    display: flex;
    flex-flow: row nowrap;
    align-content: flex-end;
    margin-bottom: 5px;
  }

  @media (max-width: 767px) {
    .link {
      flex-flow: column;
    }
  }

  .date {
    color: rgba(0, 0, 0, 0.3);
  }

  .date > span {
    font-size: 70%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #729eb0;
  }
</style>

<ContentContainer>
  <div class="list">
    <h1>Recent posts</h1>
    <ul>
      {#each sortedPosts as post}
        <li>
          <a class="link" rel="prefetch" href="blog/{post.slug}">
            <div class="title">{post.metadata.title}</div>
            <div class="date">
              <span>{new Date(post.metadata.date).toDateString()}</span>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</ContentContainer>
