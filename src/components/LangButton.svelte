<script>
  import * as ls from "local-storage";
</script>

{#if ls.get("lang") === "en"}
  <button
    class="focus:outline-none shadow-sm flex justify-center items-center bg-brand-white mx-2 lg:mr-0 px-2 py-3 rounded-md transition-all duration-200;
"
    on:click={() => {
      ls.set("lang", "fr");
      window.location.reload();
    }}
  >
    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"
      ><path fill="#ED2939" d="M0 0h3v2H0z" />
      <path fill="#fff" d="M0 0h2v2H0z" />
      <path fill="#002395" d="M0 0h1v2H0z" /></svg
    >
  </button>
{:else}
  <button
    class="focus:outline-none shadow-sm flex justify-center items-center bg-brand-white mx-2 lg:mr-0 px-2 py-3 rounded-md transition-all duration-200;
"
    on:click={() => {
      ls.set("lang", "en");
      window.location.reload();
    }}
  >
    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"
      ><clipPath id="a">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="b">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clip-path="url(#a)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6" />
        <path
          d="M0 0l60 30m0-30L0 30"
          clip-path="url(#b)"
          stroke="#C8102E"
          stroke-width="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6" />
      </g></svg
    >
  </button>
{/if}
