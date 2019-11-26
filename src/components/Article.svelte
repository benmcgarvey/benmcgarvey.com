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

  :global(a) {
    color: #8fbcbc;
    text-decoration: none;
  }

  :global(a:visited) {
    color: #8fbcbc;
  }

  :global(a:focus),
  :global(a:hover) {
    text-decoration: underline;
  }

  :global(p) {
    font-size: 16px;
  }

  :global(pre) {
    border-radius: 10px;
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
