<style>
  .footer {
    background-color: transparent;
    font-size: 110%;
    min-height: 60px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;
  }

  .content {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 70%;
    width: 100%;
  }

  .site-name,
  .site-author,
  .svelte {
    font-weight: bold;
  }
  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  .svelte:hover {
    color: rgb(236, 79, 39);
  }

  .site-author:hover {
    color: #729eb0;
  }
</style>

<div class="footer no-print">
  <div class="content">
    <span class="site-name">Failing Gracefully,&nbsp;</span>
    <span>
      made with
      <a class="svelte" href="https://svelte.dev/">Svelte,</a>
      by
      <a class="site-author" href="https://github.com/benmcgarvey">
        Ben McGarvey
      </a>
    </span>
  </div>
</div>
