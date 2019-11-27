<script>
  import Contact from "../../components/Contact.svelte";
  import ContentContainer from "../../components/ContentContainer.svelte";

  import resume from "../../content/resume.js";
</script>

<svelte:head>
  <title>Ben McGarvey | Contact</title>
</svelte:head>
<ContentContainer>
  <Contact contacts={resume.contacts} />
</ContentContainer>
