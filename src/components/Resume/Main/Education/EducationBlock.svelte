<script>
import Date from '../../Shared/Date.svelte';
import Decorator from '../../Shared/Decorator.svelte';
import Details from '../../Shared/Details.svelte';

export let name;
export let school;
export let location;
export let from;
export let to;
export let details;
</script>

<style>
section {
  display: flex;
  flex-flow: row nowrap;
}
</style>

<section>
  <Date { from } { to } />
  <Decorator />
  <Details title={ name } place={ school } { location } { details } />
</section>