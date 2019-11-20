<script>
  export let href = "/";
  export let src = "acorn.png";
  export let alt = "ImageLink";
  export let size = "44px";

  const styles = `width: ${size}; height: ${size}`;
</script>

<style>

</style>

<div style={styles}>
  <a style={styles} {href}>
    <img style={styles} {src} {alt} />
  </a>
</div>
