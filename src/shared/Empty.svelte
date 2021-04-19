<script>
  export let text = "Not Content Found";
</script>

<div class="w-full h-80 my-8 flex flex-col items-center justify-center">
  <h1 class="mb-6 text-gray-500 flex items-center">
    <span>
      <ion-icon name="information-circle" class="text-2xl text-blue-400 mr-2" />
    </span>
    {text}
  </h1>
  <img src="./images/not-found.svg" alt="notfound" class="max-w-xs" />
</div>