<script>
  import Title from "./Title.svelte";
  import Experience from "./Experience/Experience.svelte";
  import Education from "./Education/Education.svelte";

  export let name;
  export let title;
  export let experiences;
  export let education;
</script>

<style>
  section {
    float: left;
    width: 6in;
    padding: 1in 0.25in 0.5in 0.5in;
    font-size: 7pt;
  }
</style>

<section>
  <Title {name} {title} />
  <Experience {experiences} />
  <Education {education} />
</section>
