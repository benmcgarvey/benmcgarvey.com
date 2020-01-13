<script>
  import Title from "./Title.svelte";
  import Experience from "./Experience/Experience.svelte";
  import Education from "./Education/Education.svelte";
  import Note from "../Note.svelte";

  export let name;
  export let title;
  export let experiences;
  export let education;
  export let note;
  export let contacts;
</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none;
  }
  section {
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: flex-start;
    float: left;
    width: 6in;
    padding: 1.4in 0.25in 0.5in 0.5in;
    font-size: 7pt;
  }
</style>

<section>
  <Title {name} {title} />
  <Experience {experiences} />
  <Education {education} />
  <Note {...note} />
</section>
