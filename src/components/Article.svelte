<script>
  import ArticleContainer from "./ArticleContainer.svelte";
  export let title;
  export let content;
</script>

<ArticleContainer>
  <h1>{title}</h1>
  {@html content}
</ArticleContainer>
