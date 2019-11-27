<script context="module">
  import ArticleList from "../../components/ArticleList.svelte";
  export async function preload() {
    const posts = await this.fetch(`./blog.json`).then(r => r.json());
    return { posts };
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Ben McGarvey | Blog</title>
</svelte:head>
<ArticleList {posts} />
