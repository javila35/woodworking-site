<script>
  import Logo from "../components/Logo.svelte";
  import Nav from "../components/Nav.svelte";
  import Bio from "../components/Bio.svelte";
  import ImageBar from "../components/ImageBar.svelte";
</script>

<main>
  <Logo />
  <Nav>Nav here</Nav>
  <Bio>Bio Here</Bio>
  <ImageBar>Images here</ImageBar>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 23px;
  }
</style>
