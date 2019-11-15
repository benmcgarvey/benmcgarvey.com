<script>
  import ContentContainer from "./ContentContainer.svelte";
  export let title;
  export let content;
</script>

<ContentContainer>
  <h1>{title}</h1>
  {@html content}
</ContentContainer>
