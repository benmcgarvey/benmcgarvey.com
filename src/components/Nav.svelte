<script>
  import { fly } from "svelte/transition";
  import ImageLink from "./ImageLink.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import DesktopMenu from "./DesktopMenu.svelte";

  const menuItems = [
    { name: "home", href: "/" },
    { name: "blog", href: "/blog" },
    { name: "work", href: "/work" },
    { name: "contact", href: "/contact" }
  ];
</script>

<style>
  nav {
    background: white;
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
    <ImageLink />
    <DesktopMenu {menuItems} />
    <MobileMenu {menuItems} />
  </div>
</nav>
