<style>
  button {
    background-color: transparent;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #555;
    cursor: pointer;
    color: #555;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    margin: auto 0 auto 0.2in;
    z-index: -1;
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

<button class="no-print" onclick="window.print()">Print</button>
