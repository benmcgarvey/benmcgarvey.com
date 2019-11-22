<script>
  import { fly } from "svelte/transition";

  import ContentContainer from "../../components/ContentContainer.svelte";
  import Experience from "../../components/Experience.svelte";
  import Skill from "../../components/Skill.svelte";

  import resume from "../../content/resume.js";

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
  button {
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
    background: rgb(243, 243, 243);
  }

  button.active {
    background: white;
  }

  .content {
    margin-top: 60px;
  }
</style>

<ContentContainer>
  <div class="nav" in:fly={{ y: -100, duration: 400 }}>
    <button class:active={work} on:click={() => handleClick(true)}>work</button>
    <button class:active={!work} on:click={() => handleClick(false)}>
      skills
    </button>
  </div>
  <div class="content">
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

</ContentContainer>
