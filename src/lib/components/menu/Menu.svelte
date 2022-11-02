<script lang="ts">
  import type { Route } from "$lib/types/common";
  import { routes } from "$lib/stores/route";

  const onClick = (route: Route) => {
    $routes = $routes.map(item => {
      if (route.path === item.path) {
        return {...item, isActive: true}
      }
      return {...item, isActive: false}
    })
  };
</script>

<aside class="menu">
  <ul class="menu-list">
    {#each $routes as route}
      <li>
        <a
          href={route.path}
          on:click={() => onClick(route)}
          class={route.isActive ? "is-active" : ""}>{route.name}</a
        >
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    height: 100%;
  }
  /* .logo {
    width: 38px;
    height: 38px;
  }
  .avatar {
    width: 38px;
    height: 38px;
  }
  a > img {
    width: 14px;
    height: 14px;
  } */
</style>
