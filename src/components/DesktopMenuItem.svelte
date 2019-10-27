<script>
  export let item;
</script>

<style>
  * {
    display: none;
  }

  @media (min-width: 768px) {
    * {
      display: initial;
    }

    a {
      display: inline-block;
      text-decoration: none;
    }

    a:hover {
      color: rgba(0, 70, 1, 0.8);
    }

    a:visited {
      color: inherit;
    }

    li {
      padding: 0 20px 0 20px;
    }
  }
</style>

<li>
  <a href="/">{item}</a>
</li>
