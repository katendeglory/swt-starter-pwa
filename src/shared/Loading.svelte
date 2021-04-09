<script>
  import { Circle2 } from "svelte-loading-spinners";
  import t from "../utils/t";
  export let text = t({ en: "Loading", fr: "Chargement" });
</script>

<div class="w-full h-64 flex flex-col items-center justify-center">
  <h1 class="mb-6 uppercase text-gray-600 text-xl animate-pulse">{text}...</h1>
  <Circle2
    size="125"
    unit="px"
    colorOuter="#F4A261"
    colorCenter="#40B3FF"
    colorInner="#676778"
  />
</div>
