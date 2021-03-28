<script>
  import config from "../stores/config";

  import Container from "./../shared/Container.svelte";
</script>

<Container>
  <div class="flex flex-col md:flex-row relative">
    <div
      class="w-full h-screen lg:w-3/5 flex flex-col justify-center relative z-10"
    >
      <h1
        class="mb-5 h-font font-bold md:pt-10 text-5xl sm:text-5xl md:text-5xl lg:text-6xl"
      >
        <!-- style="filter: drop-shadow(1px 1px 1px rgba(0,0,0,.35));" -->
        Hey There! Welcome to Your Personal Supermarket!
      </h1>
      <p class="mb-5 text-gray-500">
        We've kept the best deals out there just for you! If you're a student,
        Sign up with Us and be prepared for an amazing shopping experience. We
        can't wait to have you on boaord!
      </p>
      <a href="#our-collection" class="btn btn-orange">
        See Our Collection
        <ion-icon name="arrow-forward-circle-outline" class="text-2xl ml-2" />
      </a>
      <div class="mt-5 flex items-center">
        <a href="#home" class="mr-5">
          <ion-icon name="logo-facebook" class="text-gray-500 text-3xl" />
        </a>
        <a href="#home" class="mr-5">
          <ion-icon name="logo-twitter" class="text-gray-500 text-3xl" />
        </a>
        <a href="#home" class="mr-5">
          <ion-icon name="logo-instagram" class="text-gray-500 text-3xl" />
        </a>
        <a href="#home" class="mr-5">
          <ion-icon name="mail" class="text-gray-500 text-3xl" />
        </a>
      </div>
    </div>
    <div
      class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 flex items-center justify-center lg:justify-end relative z-10"
    >
      <img
        src="./images/hero-img-01.png"
        alt="hero"
        class="w-full sm:w-3/5 md:w-11/12 lg:w-11/12"
      />
      <!-- https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000 -->
    </div>

    <!-- <img
      src="./images/faisceau.svg"
      alt="faisceau"
      class="absolute"
      style="z-index: 0; left: -50%; top:10%; opacity: .3;"
    /> -->
  </div>
</Container>

<Container />
