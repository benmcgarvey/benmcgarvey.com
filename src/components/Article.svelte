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
    font-size: 42px;
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

  :global(article .body a) {
    color: #8fbcbc;
    text-decoration: none;
  }

  :global(article .body a:visited) {
    color: #8fbcbc;
  }

  :global(article.body  a:focus),
  :global(article .body a:hover) {
    text-decoration: underline;
  }

  :global(article .body p) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  :global(article .body pre) {
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    :global(article .body pre) {
      margin: 0 -5px;
    }
  }

  :global(article .body h2) {
    margin-top: 44px;
  }

  :global(article .body h2 + h3) {
    margin-top: initial;
  }

  :global(article .body h2 + h4) {
    margin-top: initial;
  }

  :global(article .body h2 + h5) {
    margin-top: initial;
  }

  :global(article .body h3 + h4) {
    margin-top: initial;
  }

  :global(article .body h3 + h5) {
    margin-top: initial;
  }

  :global(article .body h4 + h5) {
    margin-top: initial;
  }

  :global(article .body h3) {
    margin-top: 33px;
  }

  :global(article .body h4) {
    margin-top: 28px;
  }

  :global(article .body h5) {
    margin-top: 26px;
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
