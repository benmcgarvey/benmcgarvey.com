<script>
  import Printer from "../Shared/Printer.svelte";

  export let name = "name";
  export let title = "title";
</script>

<style>
  header {
    text-transform: uppercase;
    position: relative;
    left: 0.1in;
    margin-bottom: 0.3in;
    line-height: 1.2;
  }

  .name {
    font-weight: 300;
    font-size: 18pt;
    line-height: 1.5;
    display: flex;
    margin: 0;
  }

  .title {
    font-size: 8pt;
  }
</style>

<header>
  <h1 class="name">
    <span>{name}</span>
    <Printer />
  </h1>
  <span class="title">{title}</span>
</header>
