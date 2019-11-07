<script>
  import { fly } from "svelte/transition";
  import Acorn from "./Acorn.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import DesktopMenu from "./DesktopMenu.svelte";

  const menuItems = [
    { name: "home", href: "/" },
    { name: "github", href: "https://github.com/benmcgarvey" },
    { name: "resume", href: "resume" },
    { name: "linkedin", href: "https://linkedin.com/in/bmcgarvey" },
    { name: "contact", href: "mailto:hello@benmcgarvey.com" }
  ];
</script>

<style>
  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin-left: 25px;
    margin-right: 25px;
  }
</style>

<nav class="no-print">
  <div class="header">
    <Acorn />
    <DesktopMenu {menuItems} />
    <MobileMenu {menuItems} />
  </div>
</nav>
