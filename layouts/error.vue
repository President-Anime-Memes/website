<template>
  <div>
    <div class="stuff">
      <div id="container-bed640522658624db79a5a4634855709"></div>
      <div
        class="
          max-w-md
          mx-auto
          bg-grayshit-500 bg-opacity-90
          shadow-md
          overflow-hidden
          md:max-w-2xl
        "
      >
        <div class="md:flex border-red-500 border-2">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              src="https://i.imgur.com/saiFfaQ.jpg"
              alt="Breathing is Fun"
            />
          </div>
          <div class="p-8">
            <NuxtLink
              to="/"
              class="
                block
                mt-1
                text-lg
                leading-tight
                font-medium
                text-white
                hover:underline
              "
              >{{error.statusCode}} There doesn't seem to be anything here.</NuxtLink
            >
            <p class="mt-2 text-gray-300">
              What, did you seriously expect to see something?
            </p>
          </div>
        </div>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {return {statusCode: 400}},
    }
  },
}
</script>    