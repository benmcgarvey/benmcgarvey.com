<script>
  import Date from "../../Shared/Date.svelte";
  import Decorator from "../../Shared/Decorator.svelte";
  import Details from "../../Shared/Details.svelte";

  export let title;
  export let place;
  export let location;
  export let details;
  export let from;
  export let to;
</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }
  section {
    display: flex;
    flex-flow: row nowrap;
  }
</style>

<section>
  <Date {from} {to} />
  <Decorator />
  <Details {title} {place} {location} {details} />
</section>
