<script>
  export let item;
</script>

<li>
  <a href="/">{ item }</a>
</li>

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
      display:inline-block;
      padding: 30px 48px;
      text-decoration: none;
    }

    li:hover {
      background: #f4f4f4
    }
  }
</style>