<script>
  import Resume from "../../components/Resume/Resume.svelte";
  import resume from "../../content/resume.js";
</script>

<svelte:head>
  <title>Ben McGarvey | Resume</title>
</svelte:head>
<Resume {resume} />
