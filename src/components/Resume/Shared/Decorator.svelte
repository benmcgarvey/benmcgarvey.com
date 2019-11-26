<style>
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }
  div {
    padding-top: var(--row-blocks-padding-top);
    flex: 0 0 0;
    position: relative;
    width: 2pt;
    min-height: 100%;
    border-left: var(--decorator-border);
  }

  div::before {
    position: absolute;
    top: var(--decorator-outer-offset-top);
    left: var(--decorator-outer-offset-left);
    content: " ";
    display: block;
    width: var(--decorator-outer-dim);
    height: var(--decorator-outer-dim);
    border-radius: calc(var(--decorator-outer-dim) / 2);
    background-color: #fff;
  }

  div::after {
    position: absolute;
    top: calc(
      var(--decorator-outer-offset-top) + var(--decorator-border-width)
    );
    left: calc(
      var(--decorator-outer-offset-left) + var(--decorator-border-width)
    );
    content: " ";
    display: block;
    width: calc(
      var(--decorator-outer-dim) - (var(--decorator-border-width) * 2)
    );
    height: calc(
      var(--decorator-outer-dim) - (var(--decorator-border-width) * 2)
    );
    border-radius: calc(
      (var(--decorator-outer-dim) - (var(--decorator-border-width) * 2)) / 2
    );
    background-color: #555;
  }
</style>

<div />
