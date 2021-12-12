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
      Fetching past poll results...
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
      There have been no recent polls ⊙︿⊙
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
        Past Poll Results
      </p>
      <div class="mx-auto">
        <img v-for = "randumshit in results" :key = "randumshit" :src="randumshit" :class="`w-full py-8 px-2`" alt="result" />
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
      'https://beta.presidentanimememes.com/main/results'
    )
    const res = await response.json()
    this.results = Array.isArray(res) ? res : []
  },
}
</script>