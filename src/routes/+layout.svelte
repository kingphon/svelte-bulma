<script type="ts">
  import "../app.scss";
  import { Header, Menu } from "$lib/components/index";
  // import Header from '$lib/components/header';
  import "./styles.css";
  let isShowMenu: boolean = false;
  const onToggleMenu = () => {
    isShowMenu = !isShowMenu
  }
  import { user } from "$lib/stores/common";
</script>

<div class="app is-flex is-flex-direction-column">
  <Header {user} onToggleMenu={onToggleMenu}/>
  <main class="p-0">
    <div class="wrapper columns is-mobile m-0">
      <div class="menu column is-7-mobile has-background-black {isShowMenu ? "show-menu" : ""} is-2-desktop">
        <Menu />
      </div>
      <div class="column is-full-mobile has-background-white">
        <slot />
        <footer>
          <p>Copyright © 2022 Selly</p>
        </footer>
      </div>
    </div>
  </main>
</div>

<style>
  main, .app, .wrapper {
    height: 100%;
    width: 100%;
    position: relative;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }

  @media screen and (max-width: 768px) {
    .menu {
      left: -500px;
      position: absolute;
      height: 100%;
      transition: 0.3s;
      z-index: 100;
    }
    
    .show-menu {
      left: 0px;
      transition: 0.3s;
    }
  }
</style>
