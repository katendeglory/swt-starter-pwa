<script>
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let show = false;
  export let isQuestion = false;
  export let isSuccess = false;
  export let isFail = false;
  export let title = "";

  const dispatch = createEventDispatcher();

  const onClose = () => {
    dispatch("modalClose");
  };
</script>

{#if show}
  <div
    on:click|self={onClose}
    class="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center"
    style="z-index:999; background: rgba(0,0,0,.5)"
  >
    <div
      transition:scale
      class="w-11/12 md:w-128 bg-gray-100 rounded-lg shadow-lg py-4 px-5
        border-t-2 border-brand-strong-orange overflow-auto"
    >
      <div class="flex items-center pb-4">
        {#if isQuestion}
          <ion-icon
            name="help-circle"
            class="text-2xl mr-2 text-brand-primary"
          />
        {:else if isFail}
          <ion-icon name="close-circle" class="text-2xl mr-2 text-red-500" />
        {:else if isSuccess}
          <ion-icon
            name="checkmark-circle"
            class="text-2xl mr-2 text-brand-primary"
          />
        {/if}
        <div class="uppercase">{title}</div>
      </div>
      <div class="mb-4">
        <slot><!-- optional fallback --></slot>
      </div>
      {#if isQuestion}
        <div class="">
          <button
            class="btn btn-primary"
            on:click={() => {
              dispatch("yes");
              onClose();
            }}
          >
            <ion-icon name="checkmark-circle" class="mr-2 text-2xl" />
            Yes
          </button>
          <button
            class="btn btn-secondary"
            on:click={() => {
              dispatch("no");
              onClose();
            }}
          >
            <ion-icon name="close-circle" class="mr-2 text-2xl" />
            no
          </button>
        </div>
      {:else if isFail}
        <div class="flex items-center justify-center">
          <button
            class="btn btn-red"
            on:click={() => {
              onClose();
            }}
          >
            <ion-icon name="close-circle" class="mr-2 text-2xl" />
            Close
          </button>
        </div>
      {:else if isSuccess}
        <div class="flex items-center justify-center">
          <button
            class="btn btn-secondary"
            on:click={() => {
              onClose();
            }}
          >
            <ion-icon name="close-circle" class="mr-2 text-2xl" />
            Close
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
