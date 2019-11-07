<script>
  import Main from "./Main/Main.svelte";
  import Sidebar from "./Sidebar/Sidebar.svelte";

  export let resume;
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
  :root {
    --page-width: 8.5in;
    --page-height: 11in;
    --main-width: 6in;
    --sidebar-width: calc(var(--page-width) - var(--main-width));

    --sidebar-horizontal-padding: 0.2in;

    --decorator-horizontal-margin: 0.15in;
    --decorator-outer-offset-top: 10px;
    --decorator-outer-offset-left: -5px;
    --decorator-border-width: 1px;
    --decorator-outer-dim: 9px;
    --decorator-border: 1px solid #ccc;

    --row-blocks-padding-top: 5pt;
    --date-block-width: 0.6in;

    --main-blocks-title-icon-offset-left: -16pt;
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
    font-weight: 300;
    line-height: 1.3;
    color: #444;
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="resume">
  <Main {name} {title} {experiences} {education} />
  <Sidebar {contacts} {skills} />
</div>
