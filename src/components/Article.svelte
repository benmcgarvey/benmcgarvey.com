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

  :global(article a) {
    color: #8fbcbc;
    text-decoration: none;
  }

  :global(article a:visited) {
    color: #8fbcbc;
  }

  :global(article a:focus),
  :global(article a:hover) {
    text-decoration: underline;
  }

  :global(article p) {
    font-size: 16px;
  }

  :global(article pre) {
    border-radius: 10px;
  }
</style>

<ContentContainer>
  <article>
    <h1>{title}</h1>

    {#if edited}
      <h2 class="date">Edited: {new Date(edited).toDateString()}</h2>
    {:else}
      <h2 class="date">Published: {new Date(date).toDateString()}</h2>
    {/if}

    <div class="body">
      {@html content}
    </div>
  </article>
</ContentContainer>
