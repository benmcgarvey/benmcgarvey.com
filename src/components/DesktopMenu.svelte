<script>
  import DesktopMenuItem from "./DesktopMenuItem.svelte";
  export let menuItems;
</script>

<style>
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>

<ul class="no-mobile">
  {#each menuItems as item}
    <DesktopMenuItem {item} />
  {/each}
</ul>
