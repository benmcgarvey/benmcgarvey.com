<script>
  import Resume from "../components/Resume/Resume.svelte";
  import resume from "./suellan.js";
</script>

<svelte:head>
  <title>Suellan Leelawardana | Resume</title>
</svelte:head>
<Resume resume={{ ...resume, skillSectionTitle: '' }} />
