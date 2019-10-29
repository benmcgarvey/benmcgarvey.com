<script>
  export let item;
</script>

<style>
  * {
    display: none;
  }

  @media (max-width: 768px) {
    * {
      display: initial;
    }
    li {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    a {
      display: inline-block;
      text-decoration: none;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    a:visited {
      color: inherit;
    }

    li:hover {
      background: #f4f4f4;
    }
  }
</style>

<li>
  <a href="/">{item}</a>
</li>
