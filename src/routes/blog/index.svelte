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
  <meta
    name="description"
    content="Ben McGarvey is a full-stack Software Engineer working with modern web frameworks, backend technologies, and devOps. Visit to learn more, read some articles and get in touch." />
</svelte:head>

<ArticleList {posts} />
