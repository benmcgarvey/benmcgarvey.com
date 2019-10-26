<script>
  import { fly } from 'svelte/transition';
  import Acorn from './Acorn.svelte'
  import MobileMenu from './MobileMenu.svelte';
  import DesktopMenu from './DesktopMenu.svelte';
  
  const menuItems = ['blog', 'resume', 'github', 'about']
</script>

<style>
	nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid rgba(0,70,1,0.2);
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
    <DesktopMenu { menuItems } />
    <MobileMenu { menuItems } />
  </div>
</nav>