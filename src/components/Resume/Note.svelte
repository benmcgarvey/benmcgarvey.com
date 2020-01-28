<script>
  export let text;
  export let linkText;
  export let href;
</script>

<style>
  p {
    font-size: 1.3em;
    margin-top: auto;
    font-style: italic;
  }

  a {
    color: #729eb0;
  }

  a:visited {
    color: #729eb0;
  }
  a:hover {
    color: #729eb0;
  }
  a:focus {
    color: #729eb0;
  }
  a:hover,
  a:active {
    color: #729eb0;
  }
</style>

<p class="Note">
  {text}
  <a {href}>{linkText}</a>
</p>
