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
      color: inherit;
      display: inline-block;
      text-decoration: none;
    }

    a:visited {
      color: inherit;
    }

    a:hover {
      color: #729eb0;
    }

    li {
      padding: 0 20px 0 20px;
    }
  }
</style>

<li>
  <a href={item.href}>{item.name}</a>
</li>
