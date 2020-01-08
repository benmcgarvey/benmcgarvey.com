<script>
  import EducationBlock from "./EducationBlock.svelte";

  export let education;
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
    margin-top: 0.3in;
  }

  h2 {
    position: relative;
    top: var(--row-blocks-padding-top);
    left: calc((var(--date-block-width) + var(--decorator-horizontal-margin)));
    font-weight: 400;
    font-size: 11pt;
    color: #555;
    text-transform: uppercase;
    margin: 0;
  }

  h2::after {
    height: calc(var(--row-blocks-padding-top) * 2);
    position: relative;
    top: calc(-1 * var(--row-blocks-padding-top));
    left: calc(-1 * var(--decorator-horizontal-margin));
    display: block;
    border-left: var(--decorator-border);
    z-index: 0;
    line-height: 0;
    font-size: 0;
    content: " ";
    margin-top: 2pt;
  }

  i {
    left: calc(var(--main-blocks-title-icon-offset-left));
    top: 2pt;
    position: absolute;
    z-index: 1;
    color: #444;
  }
</style>

<section>
  <h2>
    <i class="icon-library" />
    Education
  </h2>
  {#each education as qualification}
    <EducationBlock {...qualification} />
  {/each}
</section>
