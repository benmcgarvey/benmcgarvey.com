<script>
  import Resume from "../../components/Resume/Resume.svelte";
  import resume from "../../content/resume.js";
</script>

<svelte:head>
  <title>Ben McGarvey | Resume</title>
  <meta
    name="description"
    content="Ben McGarvey is a full-stack Software Engineer working with modern web frameworks, backend technologies, and devOps. Visit to learn more, read some articles and get in touch." />
</svelte:head>
<Resume {resume} />
