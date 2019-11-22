<script>
  export let contacts;
</script>

<style>
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: stretch;
  }

  .contact {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 175px;
    flex: 175px 0 0;
    height: fit-content;
    border: 1px solid black;
    border-radius: 4px;
    background: white;
    position: relative;
    padding: 32px;
    margin: 30px;
  }

  .contact:after {
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

  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  a:hover {
    color: #729eb0;
  }
</style>

<div class="container">
  {#each contacts.filter(c => c.name !== 'website') as { name, href, display }}
    <a class="contact" {href}>
      <span>{display}</span>
    </a>
  {/each}
</div>
