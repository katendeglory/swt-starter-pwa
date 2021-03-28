<script>
  import Container from "../shared/Container.svelte";
  import { SyncLoader } from "svelte-loading-spinners";
  import config from "../stores/config";
</script>

<div
  class="pt-4 mt-32 bg-gray-800 text-gray-100 border-t-2 text-sm"
  id="contact"
>
  <!-- <Container>
    <div class="mt-4 text-xl">Contact Us:</div>
    {#if $config.settings}
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/3">
          <div class="flex items-center mt-5 sm:mt-4">
            <ion-icon name="call" class="text-2xl text-brand-orange mr-3" />
            <a href={`tel:${$config.settings.tel}`}>{$config.settings.tel}</a>
          </div>
          <div class="flex items-center mt-2">
            <ion-icon name="mail" class="text-2xl text-brand-orange mr-3" />
            <a href={`mailto:${$config.settings.email}`}
              >{$config.settings.email}</a
            >
          </div>
        </div>
        <div class="w-full lg:w-2/3">
          <div class="flex items-center mt-3 sm:mt-4 md:mt-2 lg:text-right">
            <span>
              <ion-icon
                name="location"
                class="text-2xl text-brand-orange mr-3"
              />
            </span>
            {$config.settings.address}
          </div>
        </div>
      </div>
    {:else}
      <div class="my-3 flex items-center w-full">
        <SyncLoader size="25" color="#F47C01" unit="px" />
        <span class="ml-4">Loading Metadata...</span>
      </div>
    {/if}
  </Container> -->
  <!-- Replace the line ofter the immediate line below with the immediate line below -->
  <!-- <div class="mt-4"> -->
  <div class="pb-2">
    <Container>
      <div class="py-3 flex items-center justify-between md:justify-start">
        <div>SVELTE PWA STARTER @2021</div>
        <a
          class="text-brand-orange ml-2 text-right flex items-center"
          target="_blank"
          href="https://katendeglory.github.io"
        >
          Designed By Glory Katende
          <ion-icon
            name="arrow-forward-circle"
            class="text-2xl text-brand-orange ml-3"
          />
        </a>
      </div>
    </Container>
  </div>
</div>
