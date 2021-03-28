<script>
  export let sm = false;
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 25px;
    row-gap: 25px;
  }
  @media (max-width: 400px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      column-gap: 25px;
      row-gap: 10px;
    }
  }

  .sm-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 25px;
    row-gap: 25px;
  }
  @media (max-width: 400px) {
    .sm-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      column-gap: 25px;
      row-gap: 10px;
    }
  }
</style>

<div class:grid={!sm} class:sm-grid={sm}>
  <slot />
</div>
