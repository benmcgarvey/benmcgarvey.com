<script>
  export let href = "/";
  export let src = "acorn.png";
  export let alt = "ImageLink";
</script>

<style>
  div,
  a,
  img {
    width: 44px;
    height: 44px;
  }
</style>

<div>
  <a {href}>
    <img {src} {alt} />
  </a>
</div>
