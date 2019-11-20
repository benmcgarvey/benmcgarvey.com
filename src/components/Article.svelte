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
  .date {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.3);
    line-height: 100%;
  }

  .body {
    margin-top: 30px;
  }

  :global(p) {
    font-size: 16px;
  }

  :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }
</style>

<ContentContainer>
  <article>
    <h1>{title}</h1>
    <h2 class="date">
      Published: {new Date(date).toDateString()}
      {#if edited}- Edited: {new Date(edited).toDateString()}{/if}
    </h2>
    <div class="body">
      {@html content}
    </div>
  </article>
</ContentContainer>
