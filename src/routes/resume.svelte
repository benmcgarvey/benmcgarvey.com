<script>
  import Main from "../components/Main/Main.svelte";
  import Sidebar from "../components/Sidebar/Sidebar.svelte";
  import resume from "../components/store.js";

  const name = resume.name;
  const title = resume.title;
  const experiences = resume.experiences;
  const education = resume.education;
  const contacts = resume.contacts;
  const skills = resume.skills;
</script>

<style>
  @page {
    size: letter portrait;
    margin: 0;
  }
  :global(*) {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }

  .resume {
    width: var(--page-width);
    height: var(--page-height);
    margin: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 300;
    line-height: 1.3;
    color: #444;
    hyphens: auto;
  }
</style>

<svelte:head>
  <title>ben mcgarvey</title>
</svelte:head>

<div class="resume">
  <Main {name} {title} {experiences} {education} />
  <Sidebar {contacts} {skills} />
</div>
