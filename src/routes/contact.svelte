<script>
  import Contact from "../components/Contact.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";

  import resume from "../content/resume.js";
</script>

<svelte:head>
  <title>Ben McGarvey | Contact</title>
  <meta
    name="description"
    content="Website of Ben McGarvey - Full Stack Software Engineer. Visit to
    learn more, read some articles and get in touch." />
</svelte:head>
<ContentContainer>
  <Contact contacts={resume.contacts} />
</ContentContainer>
