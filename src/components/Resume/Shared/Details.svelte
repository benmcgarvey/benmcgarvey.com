<script>
  export let title;
  export let place;
  export let location;
  export let details;
</script>

<style>
  .main {
    flex: 1 0 0;
    padding-left: var(--decorator-horizontal-margin);
    padding-top: calc(var(--row-blocks-padding-top) - 0.5pt) !important;
  }

  .details {
    margin: 0.18in 0 0.1in 0;
    padding-right: 110px;
    clear: both;
  }

  ul {
    padding-left: 0.07in;
    margin: 0.08in 0;
  }

  li {
    margin: 0 0 0.025in 0;
    list-style-type: none;
  }

  li::before {
    position: relative;
    margin-left: -4.25pt;
    content: "• ";
  }

  h3 {
    font-size: 9pt;
    margin: 0;
    color: #000;
  }

  .location {
    float: right;
  }

  .icon-location {
    margin-top: 1pt;
    margin-right: 2pt;
  }

  .place {
    float: left;
    font-size: 7.5pt;
  }
</style>

<div class="main">
  <header>
    <h3>{title}</h3>
    <span class="place">{place}</span>
    <span class="location">{location}</span>
    <span class="location icon-location" />
  </header>
  <div class="details">
    <ul>
      {#each details as detail}
        <li>{detail}</li>
      {/each}
    </ul>
  </div>
</div>
