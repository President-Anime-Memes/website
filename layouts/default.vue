<template>
  <div class="flex flex-col min-h-screen coolbackground">
    <LayoutHeader />

    <main
      class="flex-1 w-full max-w-7xl sm:px-0 sm:py-16 mx-auto md:px-8 md:py-16"
    >
    <div class = "w-full my-12 text-white">
      <Nuxt />
    </div>
      <div class="p-2">
        <p
          class="
            cursor-pointer
            z-50
            bg-grayshit-400
            text-white
            p-4
            rounded
            border-pamred-100
            md:bg-grayshit-500 md:bg-opacity-90
          "
          style="position: fixed; bottom: 0; left: 0"
          @click="scrollToTop"
        >
          ▲
        </p>
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>