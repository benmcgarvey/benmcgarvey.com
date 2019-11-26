<script>
  import Contact from "../../components/Contact.svelte";
  import ContentContainer from "../../components/ContentContainer.svelte";

  import resume from "../../content/resume.js";
</script>

<ContentContainer>
  <Contact contacts={resume.contacts} />
</ContentContainer>
