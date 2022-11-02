<script lang="ts">
  import logout from "$lib/images/logout.svg";
  import menu from "$lib/images/menu.svg";
  import { config } from "$lib/stores/common";
  import type { User } from "$lib/types/common";
  import { initRoutes, routes } from "$lib/stores/route";
  
  export let user: User;
  export let onToggleMenu: any;

  let isFocus: boolean = false;

  const onClose = () => {
    isFocus = false;
  };

  const onClick = (event: Event) => {
    event.stopPropagation();
    isFocus = !isFocus;
  };

  const onClickLogo = () => {
    $routes = initRoutes
  };
</script>

<svelte:window on:click={onClose} />
<header
  class="is-flex is-mobile m-0 has-background-black is-0 is-justify-content-space-between"
>
  <div class="p-3">
    <div class="is-flex is-mobile">
      <a href="/about" class="is-flex has-text-white is-align-items-center" on:click={onClickLogo}>
        <img src={config.logo} alt={config.name} class="logo" />
        <h1
          class="is-inline-desktop is-hidden-mobile pl-3 is-size-5 has-text-weight-bold"
        >
          {config.name}
        </h1>
      </a>
      <button
        class="button has-background-black ml-3 is-hidden-desktop is-primary is-inverted"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        on:click={onToggleMenu}
      >
        <img src={menu} alt="menu" class="mini-logo" />
      </button>
    </div>
  </div>
  <div class="dropdown p-3 {isFocus ? 'is-active' : ''}">
    <div class="dropdown-trigger">
      <button
        class="button has-background-black is-align-items-center pr-3 is-primary is-inverted"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        on:click={onClick}
      >
        <figure class="image is-38x38 pr-2">
          <img class="is-rounded avatar" src={user.avatar} alt="avatar" />
        </figure>
        <span class="has-text-white is-size-6">{user.name}</span>
      </button>
    </div>
    <div id="right-header" class="is-flex is-justify-content-end">
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item is-flex is-align-items-center">
            <img src={logout} alt="Welcome" class="mr-2" /> Log out
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  .logo {
    width: 38px;
    height: 38px;
  }
  .mini-logo {
    width: 20px;
    height: 20px;
  }
  .avatar {
    width: 38px;
    height: 38px;
  }
  a > img {
    width: 14px;
    height: 14px;
  }
</style>
