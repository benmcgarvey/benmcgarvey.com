<script>
  import Resume from "../../components/Resume/Resume.svelte";
  import resume from "../../content/resume.js";
</script>

<svelte:head>
  <title>Ben McGarvey | Resume</title>
  <meta
    name="description"
    content="Website of Ben McGarvey -Full Stack Software Engineer. Visit to learn more, read some articles and get in touch." />
</svelte:head>
<Resume {resume} />
