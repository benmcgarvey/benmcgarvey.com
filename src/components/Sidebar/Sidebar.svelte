<script>
  import Contacts from "./Contacts.svelte";
  import Skills from "./Skills.svelte";

  export let contacts;
  export let skills;
</script>

<style>
  aside {
    float: right;
    position: relative;
    width: var(--sidebar-width);
    height: 100%;
    padding: 1.85in 0.5in 0.6in var(--sidebar-horizontal-padding);
    background-color: #f2f2f2;
    font-size: 8.5pt;
    z-index: -1;
  }
</style>

<aside>
  <Contacts {...contacts} />
  <Skills {skills} />
</aside>
