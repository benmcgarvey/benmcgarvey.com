<script>
  export let name;
  export let list;
</script>

<style>
  .container {
    max-width: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    border: 1px solid black;
    border-radius: 4px;
    background: white;
    position: relative;
    padding: 32px;
    margin: 30px 0;
  }

  .container:after {
    content: " ";
    background: repeating-linear-gradient(
      -45deg,
      white,
      white 5px,
      black 5px,
      black 8px
    );
    border: 1px solid black;
    border-radius: 4px;
    top: 10px;
    right: -10px;
    bottom: -10px;
    left: 10px;
    position: absolute;
    z-index: -1;
  }

  .title {
    display: flex;
    align-items: center;
    font-weight: bolder;
    font-size: 1.4em;
  }

  .title > div {
    margin-right: 8px;
  }

  span:not(:first-child):before {
    content: ", ";
  }

  span::first-letter {
    text-transform: uppercase;
  }
</style>

<div class="container">
  <header>
    <div class="title">
      <span>{name}</span>
    </div>
  </header>
  <div class="details">
    {#each list as item}
      <span>{item}</span>
    {/each}
  </div>
</div>
