<style>
  .container {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    margin-bottom: 50px;
  }

  .content {
    margin-left: 25px;
    margin-right: 25px;
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
