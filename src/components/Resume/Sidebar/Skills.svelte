<script>
  export let skills;
</script>

<style>
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
  <h1>Skills</h1>
  <ul>
    {#each skills as skillGroup}
      <ul>
        <h2>{ skillGroup.name }</h2>
        {#each skillGroup.list as skill}
          <li>{ skill }</li>
        {/each}
      </ul>
    {/each}
  </ul>
</div>