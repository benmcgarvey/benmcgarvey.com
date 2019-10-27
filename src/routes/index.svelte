<script context="module">
  import ArticleList from "../components/ArticleList.svelte";
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

<svelte:head>
  <title>failing-gracefully</title>
</svelte:head>

<ArticleList {posts} />
