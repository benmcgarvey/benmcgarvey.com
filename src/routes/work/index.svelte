<script>
  import ContentContainer from "../../components/ContentContainer.svelte";

  export let title = "Software Engineer";
  export let place = "Sidekicker";
  export let location = "Melbourne, Australia";
  export let details = "Details";
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    border: 1px solid black;
    border-radius: 4px;
    background: white;
    position: relative;
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
</style>

<ContentContainer>
  <div class="container">
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
</ContentContainer>
