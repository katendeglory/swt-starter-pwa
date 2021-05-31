<script>
  export let overflowHidden = true;
</script>

<div
  class="max-w-6xl mx-auto px-4 lg:px-2"
  class:overflow-hidden={overflowHidden}
>
  <slot />
</div>
