<script>
  import ImageLink from "./ImageLink.svelte";

  export let src;
  export let href;
  export let title;
  export let place;
  export let location;
  export let details;
  export let from;
  export let to;
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
  }

  .title > div {
    margin-right: 10px;
  }

  .location {
    font-style: italic;
  }

  .dates {
    font-size: 60%;
    font-weight: 200;
    line-height: 80%;
  }

  ul {
    margin-bottom: 0px;
  }

  li {
    font-size: 90%;
  }

  :global(img) {
    clip-path: circle(50% at center);
  }
</style>

<div class="container">
  <header>
    <div class="title">
      <div>
        <ImageLink {src} {href} alt="experience" />
      </div>
      <span>{title}</span>
    </div>
    <span class="place">{place} -</span>
    <span class="location">{location}</span>
  </header>
  <div class="dates">
    <span>{from} to</span>
    <span>{to}</span>
  </div>
  <div class="details">
    <ul>
      {#each details as detail}
        <li>{detail}</li>
      {/each}
    </ul>
  </div>
</div>
