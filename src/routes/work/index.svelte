<script>
  import ContentContainer from "../../components/ContentContainer.svelte";
  import Experience from "../../components/Experience.svelte";

  import resume from "../../content/resume.js";
</script>

<ContentContainer>
  {#each resume.experiences as experience}
    <Experience {...experience} />
  {/each}
</ContentContainer>
