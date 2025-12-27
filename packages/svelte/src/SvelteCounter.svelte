<svelte:options customElement="svelte-counter" />

<script lang="ts">
  let { count = $bindable(0) } = $props();
  let currentCount = $state(count);

  $effect(() => {
    currentCount = count;
  });

  function increment() {
    currentCount++;
    count = currentCount;
  }

  function decrement() {
    currentCount--;
    count = currentCount;
  }
</script>

<div class="container">
  <div class="counter">
    <div class="label">Svelte Counter:</div>
    <button type="button" class="button" onclick={decrement}>-</button>
    <span class="count">{currentCount}</span>
    <button type="button" class="button" onclick={increment}>+</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 2px solid #ff3e00;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    border: 2px solid #ff3e00;
    background-color: #ff3e00;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .button:hover {
    background-color: #e63900;
  }

  .button:active {
    background-color: #cc3300;
  }

  .count {
    font-size: 2rem;
    font-weight: bold;
    color: #ff3e00;
    min-width: 3rem;
    text-align: center;
  }
</style>
