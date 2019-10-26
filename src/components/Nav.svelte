<script>
  import { fly } from "svelte/transition";
  import Acorn from "./Acorn.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import DesktopMenu from "./DesktopMenu.svelte";

  const menuItems = ["home", "github", "resume", "linkedin", "contact"];
</script>

<style>
  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 60px;
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 1100px;
    margin-left: 25px;
    margin-right: 25px;
  }
</style>

<nav>
  <div class="header">
    <Acorn />
    <DesktopMenu {menuItems} />
    <MobileMenu {menuItems} />
  </div>
</nav>
