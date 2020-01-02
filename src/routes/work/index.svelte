<script>
  import Resume from "../../components/Resume/Resume.svelte";
  import Printer from "../../components/Resume/Shared/Printer.svelte";
  import resume from "../../content/resume.js";
  import { fly } from "svelte/transition";

  import ContentContainer from "../../components/ContentContainer.svelte";
  import Experience from "../../components/Experience.svelte";
  import Skill from "../../components/Skill.svelte";

  let work = true;

  const handleClick = stateUpdate => {
    work = stateUpdate;
  };
</script>

<style>
  .nav {
    display: flex;
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    top: 60px;
    box-shadow: 0 -0.4rem 0.9rem rgba(0, 0, 0, 0.5);
  }
  .nav > button {
    width: 100%;
    font-size: 1.2em;
    text-transform: lowercase;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
    outline: none;
    background: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    background: rgba(243, 243, 243, 0.5);
  }

  .nav > button.active {
    background: white;
    box-shadow: 0 -0.4rem 0.9rem rgba(0, 0, 0, 0.2);
    z-index: 0;
  }

  .content {
    margin-top: 40px;
  }

  .outer {
    overflow: hidden;
    position: relative;
  }
  .inner {
    position: absolute;
    height: 100px;
    width: 100px;
    right: -50px;
    top: 50px;
  }

  .printer {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 15px;
  }
  .printer:visited {
    color: black;
  }
  .printer:hover {
    background-color: transparent;
    color: #729eb0;
  }
  .printer:active {
    position: relative;
    top: 1px;
  }
  .printer:focus {
    outline: 0;
    color: #729eb0;
  }

  @media print {
    .no-print {
      display: none !important;
    }

    .outer.print {
      overflow: initial;
      position: initial;
    }

    .inner.print {
      position: 0;
      height: 100%;
      width: 100%;
      right: 0;
      top: 0;
    }
  }
</style>

<svelte:head>
  <title>Ben McGarvey | Work</title>
  <meta
    name="description"
    content="Ben McGarvey is a full-stack Software Engineer working with modern web frameworks, backend technologies, and devOps. Visit to learn more, read some articles and get in touch." />
</svelte:head>
<ContentContainer>
  <div class="nav no-print" in:fly={{ y: -100, duration: 400 }}>
    <button class:active={work} on:click={() => handleClick(true)}>work</button>
    <button class:active={!work} on:click={() => handleClick(false)}>
      skills
    </button>
  </div>
  <div class="content">
    <button class="no-print printer" onclick="window.print()">Print</button>
    <div class="no-print">
      {#if work}
        {#each resume.experiences as experience}
          <Experience {...experience} />
        {/each}
      {:else}
        {#each resume.education as educations}
          <Experience {...educations} />
        {/each}
        {#each resume.skills as skill}
          <Skill {...skill} />
        {/each}
      {/if}
    </div>
  </div>

</ContentContainer>

<div class="outer print">
  <div class="inner print">
    <Resume {resume} />
  </div>
</div>
