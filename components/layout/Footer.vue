<template>
  <footer
    class="
      bg-pamred-100
      md:bg-grayshit-500 md:bg-opacity-90
      border-red-500 border-t-2
    "
  >
    <div
      class="
        sm:flex
        items-center
        justify-between
        max-w-6xl
        mx-auto
        py-4
        px-4
        md:px-8
        text-sm text-white
      "
    >
      <div
        class="
          mt-8
          sm:mt-0 sm:w-full sm:px-8
          flex flex-col
          md:flex-row
          justify-between
          text-center
          sm:text-left
        "
      >
        <div class="flex flex-col">
          <span class="font-bold text-white uppercase mb-2">Navigation</span>
          <span class="my-2"
            ><i class="fa fa-home" aria-hidden="true" />
            <a href="/" class="text-white text-md hover:text-red-300"
              >Home</a
            ></span
          >
          <span class="my-2"
            ><i class="fa fa-bar-chart" aria-hidden="true" />
            <a href="poll" class="text-white text-md hover:text-red-300"
              >Polls</a
            ></span
          >
        </div>

        <div class="flex flex-col">
          <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2"
            >Follow us</span
          >
          <span class="my-2"
            ><i class="fa fa-facebook-square" aria-hidden="true" />
            <a
              href="https://www.facebook.com/PresidentAnimeMemes/"
              class="text-white text-md hover:text-red-300"
              >Facebook</a
            ></span
          >
          <span class="my-2"
            ><i class="fa fa-instagram" aria-hidden="true" />
            <a
              href="https://www.instagram.com/presidentanimememes/"
              class="text-white text-right hover:text-red-300"
              >Instagram</a
            ></span
          >
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2"
            >Join us</span
          >
          <span class="my-2"
            ><i class="fa fa-life-ring" aria-hidden="true" />
            <a
              href="https://discord.gg/seK6ay2yJj"
              class="text-white text-md hover:text-red-300"
              >Discord</a
            ></span
          >
        </div>
      </div>
    </div>
    <!--<i><a href = "https://beta.presidentanimememes.cf/" style="display:block; width: 100%" class = "bg-gray-600 font-bold text-white w-full"> 2019 President Anime Memes </a></i>-->
  </footer>
</template>
