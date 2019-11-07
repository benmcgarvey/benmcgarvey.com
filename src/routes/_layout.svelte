<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
