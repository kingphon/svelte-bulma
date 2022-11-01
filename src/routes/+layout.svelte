<script>
  import "../app.scss";
  import { Header, Menu } from "$lib/components/index";
  // import Header from '$lib/components/header';
  import "./styles.css";
</script>

<div class="app">
  <Header />

  <main>
    <div class="columns is-mobile">
      <div class="column is-6-mobile">
        <Menu />
      </div>
      <div class="column is-6-mobile">
        <!-- <slot></slot> -->
      </div>
    </div>
  </main>

  <footer>
    <p>Copyright © 2022 Selly</p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    /* max-width: 64rem; */
    /* margin: 0 auto; */
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
