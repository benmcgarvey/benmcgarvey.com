<script>
  import MainContainer from "./MainContainer.svelte";
  export let title;
  export let content;
</script>

<MainContainer>
  <h1>{title}</h1>
  {@html content}
</MainContainer>
