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

<svelte:head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154237194-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-154237194-1');
  </script>
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
