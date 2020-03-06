<style>
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }
  button {
    background-color: transparent;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #555;
    cursor: pointer;
    color: #555;
    font-size: 15px;
    font-weight: bold;
    text-decoration: underline;
    margin: auto 0 auto 0.2in;
  }
  button:hover {
    background-color: transparent;
  }
  button:active {
    position: relative;
    top: 1px;
  }
  button:focus {
    outline: 0;
  }

  @media print {
    .no-print {
      display: none !important;
    }
  }
</style>

<button class="no-print" onclick="window.print()">Get a printable copy</button>
