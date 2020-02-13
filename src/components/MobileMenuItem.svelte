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
    div {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    a {
      color: inherit;
      display: inline-block;
      text-decoration: none;
      width: 100%;
      text-align: center;
      padding: 10px 0;
    }

    a:visited {
      color: inherit;
    }

    div:hover {
      background: #f4f4f4;
    }
  }
</style>

<div>
  <a rel="prefetch" href={item.href}>{item.name}</a>
</div>
