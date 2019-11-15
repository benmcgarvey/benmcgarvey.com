<script>
  import ContentContainer from "./ContentContainer.svelte";
  export let title;
  export let date;
  export let edited;
  export let content;
</script>

<style>
  h1 {
    margin-bottom: 5px;
  }
  h2 {
    font-size: 70%;
    color: rgba(0, 0, 0, 0.3);
    line-height: 100%;
  }
</style>

<ContentContainer>
  <h1>{title}</h1>
  <h2>
    Published: {new Date(date).toDateString()}
    {#if edited}- Edited: {new Date(edited).toDateString()}{/if}
  </h2>
  {@html content}
</ContentContainer>
