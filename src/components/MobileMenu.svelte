<script>
  import { fly } from "svelte/transition";
  import MobileMenuItem from "./MobileMenuItem.svelte";
  export let menuItems;

  let toggleMenu = false;

  const handleClick = () => {
    toggleMenu = !toggleMenu;
  };
</script>

<style>
  .menu-options {
    display: flex;
  }

  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 60px;
    margin: 0;
    padding: 0;
    font-size: 40px;
    background-color: #fff;
    list-style-type: none;
    color: #333;
  }

  .menu-mobile {
    margin-left: auto;
    background-color: transparent;
    border: 1px solid rgba(0, 70, 1, 0.2);
    border-radius: 2px;
    cursor: pointer;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .menu-mobile:focus {
    outline: none;
  }

  .menu-mobile.active {
    position: relative;
    top: 1px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* desktop */
  @media (min-width: 768px) {
    .menu-mobile {
      display: none;
    }
  }
</style>

<div class="menu-options">
  {#if toggleMenu}
    <ul
      in:fly={{ x: 1000, duration: 500 }}
      out:fly={{ x: 1000, duration: 2000, opacity: 1 }}>
      {#each menuItems as item}
        <MobileMenuItem {item} />
      {/each}
    </ul>
  {/if}
</div>
<button on:click={handleClick} class="menu-mobile" class:active={toggleMenu}>
  menu
</button>
