<script>
  import Footer from '../components/layout/Footer.svelte';

  import Header from '../components/layout/Header.svelte';
  import Main from '../components/layout/Main.svelte';
  import Info from '../components/web/Info.svelte';
  import Plans from '../components/web/Plans.svelte';
  import Services from '../components/web/Services.svelte';
</script>

<style>
  :global(.container) {
    width: 90%;
    max-width: 1280px;
    margin: auto;
  }
</style>

<Header />
<Main>
  <Info />
  <Services />
  <Plans />
</Main>
<Footer />
