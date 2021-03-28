<script>
  import { slide } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";

  export let showOnlyHome = false;
  let menuVisible = false;
  // let PWAInstallBtn;

  let toggleMenu = () => {
    menuVisible = !menuVisible;
  };

  let hideMenu = () => {
    menuVisible = false;
  };

  onMount(() => {
    // let deferredPrompt;
    // window.addEventListener("beforeinstallprompt", (e) => {
    //   // Prevent the mini-infobar from appearing on mobile
    //   e.preventDefault();
    //   // Stash the event so it can be triggered later.
    //   deferredPrompt = e;
    //   // Update UI notify the user they can install the PWA
    //   // showInstallPromotion();
    // });
    // PWAInstallBtn.addEventListener("click", (e) => {
    //   alert("Ready");
    //   // Hide the app provided install promotion
    //   // hideMyInstallPromotion();
    //   // Show the install prompt
    //   deferredPrompt.prompt();
    //   // Wait for the user to respond to the prompt
    //   deferredPrompt.userChoice.then((choiceResult) => {
    //     if (choiceResult.outcome === "accepted") {
    //       console.log("User accepted the install prompt");
    //     } else {
    //       console.log("User dismissed the install prompt");
    //     }
    //   });
    // });
  });
</script>

<!-- <button
  class="btn btn-green fixed bottom-0 right-0 pwa-btn"
  bind:this={PWAInstallBtn}
>
  Install Now
  <ion-icon name="add-circle" class="text-2xl ml-2" />
</button> -->

<div
  class="block lg:hidden px-4 pt-2 pb-1 rounded-md shadow-sm bg-brand-white relative"
  style="z-index:999;"
>
  <button class="focus:outline-none" on:click={toggleMenu}>
    <ion-icon name="menu-outline" class="text-3xl" />
  </button>

  {#if menuVisible}
    <div
      transition:slide={{ duration: 250 }}
      class={`absolute mt-12 top-0 right-0 w-56 flex flex-col px-3 pt-4 pb-2 rounded-md shadow-md bg-brand-white border-t-4 border-brand-weak-green`}
      style="transform: translateY(10px);"
    >
      <a
        href="/register"
        use:link
        class="mb-5 btn btn-orange"
        style="width: 100%;"
      >
        Sign Up Now
        <ion-icon name="arrow-forward-circle" class="text-2xl ml-2" />
      </a>
      <a class="mb-5" on:click={hideMenu} href="#our-collection">Explore</a>
      <a class="mb-5" on:click={hideMenu} use:link href="/cart">Cart</a>
      <a class="mb-5" on:click={hideMenu} use:link href="/categories">
        Categories
      </a>
      <a class="mb-5" on:click={hideMenu} use:link href="/search">Search</a>
      <a class="mb-5" on:click={hideMenu} href="#about">About Us</a>
      {#if !showOnlyHome}
        <a class="mb-5" on:click={hideMenu} href="#contact">Contact</a>
      {/if}
    </div>
  {/if}
</div>
