<template>
  <div>
    <p
      v-if="$fetchState.pending"
      class="
        p-8
        bg-grayshit-500 bg-opacity-90
        text-xl
        font-bold
        uppercase
        tracking-wide
        text-center
        mx-auto
        text-white
        border-red-500 border-2
      "
    >
      Fetching ongoing polls...
    </p>
    <p
      v-else-if="$fetchState.error || results.length === 0"
      class="
        p-8
        bg-grayshit-500 bg-opacity-90
        text-xl border-red-500 border-2
        font-bold
        uppercase
        tracking-wide
        text-center
        mx-auto
        text-white
      "
    >
      There seem to be no ongoing polls (=✖ ᆺ ✖=)
    </p>

    <div
      v-else
      class="object-cover bg-grayshit-500 bg-opacity-90 border-red-500 border-2"
    >
      <p
        class="
          p-8
          bg-grayshit-500
          md:bg-opacity-0
          text-xl
          font-bold
          uppercase
          tracking-wide
          text-center
          mx-auto
          text-white
        "
      >
        Ongoing Polls
      </p>
      <div class="mx-auto">
        <div
          v-for="running in results"
          :key="running.title"
          class="pb-8 md:py-8 md:px-2"
        >
          <a :href="running.url">
            <div
              class="
                bg-grayshit-500
                md:bg-grayshit-500 md:bg-opacity-0
                block
                h-full
                hover:bg-grayshit-500 hover:bg-opacity-90
                transform
                tracking-wide
                transition
                duration-500
                ease-in-out
                hover:-translate-y-1 hover:scale-110
              "
            >
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  :src="running.banner"
                  alt="Weiner"
                />
              </div>
              <div class="p-8">
                <p
                  class="
                    uppercase
                    tracking-wide
                    text-sm text-red-500
                    font-semibold
                  "
                >
                  {{running.title}}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
    }
  },
  async fetch() {
    const response = await fetch(
      'https://beta.presidentanimememes.com/main/active'
    )
    const res = await response.json()
    this.results = Array.isArray(res) ? res : []
  },
}
</script>