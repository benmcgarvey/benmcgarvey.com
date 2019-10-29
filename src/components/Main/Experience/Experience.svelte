<script>
  import ExperienceBlock from './ExperienceBlock.svelte';

  export let experiences;
</script>

<style>

h2{
  text-transform: uppercase;
  position: relative;
  top: var(--row-blocks-padding-top);
  left: calc((var(--date-block-width) + var(--decorator-horizontal-margin)));
  font-weight: 400;
  font-size: 11pt;
  color: #555;
  margin: 0;
}

h2 > i{
  position: absolute;
  left: calc(var(--main-blocks-title-icon-offset-left) + 0.5pt);
  z-index: 1;
  color: #444;
}

h2::after{
  height: calc(var(--row-blocks-padding-top) * 2);
  position: relative;
  top: calc(-1 * var(--row-blocks-padding-top));
  left: calc(-1 * var(--decorator-horizontal-margin));
  display: block;
  border-left: var(--decorator-border);
  z-index: 0;
  line-height: 0;
  font-size: 0;
  content: ' ';
}
</style>

<section>
  <h2>
    <i class="icon-briefcase"></i>
    Experience
  </h2>
  {#each experiences as experience}
    <ExperienceBlock { ...experience }/>
  {/each}
</section>