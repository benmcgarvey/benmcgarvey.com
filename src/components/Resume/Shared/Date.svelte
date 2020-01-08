<script>
  export let date;
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
    flex: 0 0 var(--date-block-width);
    padding-top: calc(var(--row-blocks-padding-top) + 2.5pt) !important;
    padding-right: var(--decorator-horizontal-margin);
    font-size: 7pt;
    text-align: right;
    line-height: 1;
  }

  div span {
    display: block;
  }

</style>

<div>
  <span>{date}</span>
</div>
