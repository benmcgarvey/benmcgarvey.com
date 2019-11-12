<script>
  import { fade } from "svelte/transition";
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
    border-left: 0.5px solid rgba(36, 36, 36, 0.2);
    border-bottom: 0.5px solid rgba(36, 36, 36, 0.2);
    border-radius: 0 0 0 10px;
    width: 55%;
  }

  .menu-mobile {
    margin-left: auto;
    background-color: transparent;
    border: 0 solid rgba(0, 70, 1, 0.2);
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
    <div class="bottom">
      <ul
        on:click={() => (toggleMenu = false)}
        class="left"
        transition:fade={{ duration: 100 }}>
        {#each menuItems as item}
          <MobileMenuItem {item} />
        {/each}
      </ul>
    </div>
  {/if}
</div>
<button
  on:click={handleClick}
  on:blur={() => (toggleMenu = false)}
  class="menu-mobile"
  class:active={toggleMenu}>
  menu
</button>
