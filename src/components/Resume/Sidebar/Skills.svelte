<script>
  export let skills;
  export let skillSectionTitle = "skills";
</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }
  div {
    line-height: 1.5;
    padding-top: 0.8in;
  }

  ul {
    margin-bottom: 0.2in;
    margin-top: 0;
    padding: 0;
  }

  h1 {
    font-weight: 400;
    font-size: 11pt;
    text-transform: uppercase;
    margin: 0;
    color: #000;
  }

  h2 {
    font-weight: 300;
    font-size: 9pt;
    text-transform: uppercase;
    margin: 0;
    color: #000;
  }

  li {
    list-style-type: none;
  }
</style>

<div>
  <h1>{skillSectionTitle}</h1>
  <ul>
    {#each skills as skillGroup}
      <h2>{skillGroup.name}</h2>
      <ul class="skillGroup">
        {#each skillGroup.list as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    {/each}
  </ul>
</div>
