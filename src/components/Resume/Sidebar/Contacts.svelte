<script>
  export let contacts;
</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }
  h1 {
    font-weight: 400;
    font-size: 11pt;
    margin: 0;
    text-transform: uppercase;
  }

  ul {
    margin-top: 0.05in;
    padding-left: 0;
    font-weight: 400;
    line-height: 1.75;
  }

  li {
    list-style-type: none;
  }

  a {
    padding-left: 2px;
    text-decoration: none;
    color: #000;
  }
</style>

<div>
  <h1>Contact Info</h1>
  <ul>
    {#each contacts as contact}
      <li>
        <a href={contact.href}>{contact.display}</a>
      </li>
    {/each}
  </ul>
</div>
