<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>failing-gracefully</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href={post.slug}>{post.metadata.title}</a>
    </li>
  {/each}
</ul>
