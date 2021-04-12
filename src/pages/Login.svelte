<script>
  import { link } from "svelte-spa-router";
  import axios from "axios";
  import Layout from "../Layout/Layout.svelte";
  import Container from "../shared/Container.svelte";
  import SectionHeading from "../shared/SectionHeading.svelte";
  import * as animateScroll from "svelte-scrollto";
  import config from "../stores/config";
  import { onMount } from "svelte";
  import * as ls from "local-storage";
  import get from "lodash.get";
  import t from "../utils/t";

  let username;
  let password;
  let loading = false;

  const handleLogin = () => {
    loading = true;
    axios
      .post(`${$config.backendURL}/login`, {
        username: username.trim(),
        password: password.trim(),
      })
      .then((res) => {
        ls.set("jwt", res.data.token);
        if (res.data.error) {
          console.log(err);
          alert(res.data.error);
          loading = false;
        } else {
          loading = false;
          window.location.reload();
          window.location = "/index.html";
        }
      })
      .catch((err) => {
        loading = false;
        console.log(err);
        alert(
          t({
            en: "The username or password entered was not correct!",
            fr: "Nom d'utilisateur ou mot de passe incorrect!",
          })
        );
        window.location = "/index.html";
      });
  };
  onMount(() => {
    animateScroll.scrollToTop();
  });
</script>

<svelte:head>
  <title>Login | Online Supermarket</title>
</svelte:head>

<Layout>
  <Container>
    <div class="tracking-wide font-normal h-screen w-full p-5">
      <div class="flex flex-col justify-center items-center">
        <SectionHeading text1={t({ en: "Login", fr: "Se Connecter" })} />
        {#if get($config, "currentUser.username")}
          {(window.location = "")}
        {:else}
          <form on:submit|preventDefault={handleLogin} class="mt-8 max-w-sm">
            <input
              type="text"
              placeholder="Email"
              class="mb-4 shadow-sm"
              bind:value={username}
              style="width: 100%;"
            />
            <input
              type="password"
              placeholder={t({ en: "Password", fr: "Mot de passe" })}
              class="mb-4 shadow-sm"
              bind:value={password}
              style="width: 100%;"
            />
            {#if loading}
              <button
                disabled
                class="mb-4 btn btn-primary"
                style="width: 100%;"
              >
                {t({ en: "Logging in...", fr: "Patientez..." })}
                <ion-icon name="arrow-forward-circle" class="ml-2 text-2xl" />
              </button>
            {:else}
              <button class="mb-4 btn btn-primary" style="width: 100%;">
                {t({ en: "Login", fr: "Se Connecter" })}
                <ion-icon name="arrow-forward-circle" class="ml-2 text-2xl" />
              </button>
            {/if}
          </form>
        {/if}
      </div>
    </div>
  </Container>
</Layout>
