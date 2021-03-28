<script>
  export let text1 = "";
  export let text2 = "";
  export let colorClass = "text-brand-orange";
  export let breakWord = false;
  export let id = "";
</script>

<div
  {id}
  class={`h-font text-center pt-20 pb-16 text-5xl lg:text-6xl justify-center flex ${
    breakWord && "flex-col md:flex-row"
  }`}
>
  <h1 class="mr-3">{text1}</h1>
  <h1 class={colorClass}>{text2}</h1>
</div>
