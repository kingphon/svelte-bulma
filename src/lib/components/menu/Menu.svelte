<script lang="ts">
  // import logout from "$lib/images/logout.svg";
  // export let name: string = "Minh Phương";
  // export let avatar: string =
  //   "https://bulma.io/images/placeholders/128x128.png";

  // let isFocus: boolean = false;

  // const onClose = () => {
  //   isFocus = false;
  // };

  // const onClick = (event: Event) => {
  //   event.stopPropagation();
  //   isFocus = !isFocus;
  // };
</script>

<!-- <svelte:window on:click={onClose} /> -->
<aside class="menu">
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">Transactions</p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
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
