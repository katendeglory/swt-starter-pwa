<script>
  import NavBar from "./NavBar.svelte";
  import Footer from "./Footer.svelte";
  import config from "../stores/config";
  import { onMount } from "svelte";
  import axios from "axios";
  import * as ls from "local-storage";
  import get from "lodash.get";
  let loading = true;
  
  onMount(async () => {
    // if (get($config, "currentUser.username")) {
    //   try {
    //     let response = await Promise.all([
    //       axios.get(`${$config.backendURL}/settings`),
    //       axios.get(`${$config.backendURL}/items/categories`),
    //       axios.get(`${$config.backendURL}/me`, {
    //         headers: { authorization: ls.get("jwt") },
    //       }),
    //     ]);
    //     config.update((prev) => ({
    //       ...prev,
    //       settings: response[0].data,
    //       categories: response[1].data,
    //       currentUser: response[2].data,
    //     }));
    //     loading = false;
    //   } catch (error) {
    //     loading = false;
    //     console.log(error);
    //   }
    // } else {
    //   loading = false;
    // }
  });
</script>

<div
  class={`bg-brand-white text-gray-600 font-medium tracking-wide w-full layout`}
  style="background-image: url(./images/pattern.svg);"
  id="home"
>
  <NavBar />
  <slot />
  <Footer />
</div>

<style>
  .layout {
    width: 100%;
    /* min-height: 100vh; */
  }
</style>
