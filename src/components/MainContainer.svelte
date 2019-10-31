<style>
  .container {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    margin-bottom: 50px;
    width: 100%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .content {
    margin-top: 10px;
    font-size: 21px;
    line-height: 158%;
    max-width: 700px;
    word-break: break-word;
  }
</style>

<div class="container">
  <div class="content">
    <slot />
  </div>
</div>
