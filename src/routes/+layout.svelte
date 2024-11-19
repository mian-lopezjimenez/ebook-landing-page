<script lang="ts">
  import "../app.css"
  
  let { children } = $props();
</script>

<main class="container">
  {@render children()}
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
</style>