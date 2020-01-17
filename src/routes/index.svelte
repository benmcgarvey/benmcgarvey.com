<script>
  import ContentContainer from "../components/ContentContainer.svelte";
</script>

<style>
  p:first-of-type {
    font-size: 1.5em;
    margin: 0.75em 0;
    font-weight: bold;
  }

  a {
    color: #729eb0;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: #729eb0;
  }
</style>

<svelte:head>
  <title>Ben McGarvey | Home</title>
  <meta
    name="description"
    content="Website of Ben McGarvey - Full Stack Software Engineer. Visit to
    learn more, read some articles and get in touch." />
</svelte:head>

<ContentContainer>
  <h1>Hi, I'm Ben McGarvey</h1>
  <p>I'm a Software Engineer</p>
  <p>Welcome to my website!</p>
  <p>
    Here you'll find some
    <a href="/blog">things I've written</a>
    , some
    <a href="/work">things I've done</a>
    , and some
    <a href="/contact">ways to get in touch</a>
    .
  </p>
</ContentContainer>
