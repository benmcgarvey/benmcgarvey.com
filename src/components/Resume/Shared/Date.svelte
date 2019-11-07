<script>
  export let from;
  export let to;
</script>

<style>
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

  div span:nth-child(2)::before {
    position: relative;
    top: 1pt;
    right: 5.5pt;
    display: block;
    height: 10pt;
    content: "|";
  }
</style>

<div>
  <span>{to}</span>
  <span>{from}</span>
</div>
