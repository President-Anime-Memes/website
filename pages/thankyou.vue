<template>
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
          class="h-60 w-full object-cover md:w-48"
          src="https://shinomiya.presidentanimememes.com/shinomiya.webp"
          alt="Weiner"
        />
      </div>
      <div class="p-8">
        <a
          href="https://discord.gg/seK6ay2yJj"
          class="
            block
            mt-1
            text-lg
            leading-tight
            font-medium
            text-white
            hover:underline
          "
          >Thank you for voting!</a
        >
        <a href="https://discord.gg/seK6ay2yJj" class="mt-2 text-gray-300"
          >Why not check out our Discord server by clicking here meanwhile?<br />
          <img
            src="https://discordapp.com/api/guilds/740603599775596685/embed.png?style=banner2&id={Date.now()}"
            alt="Discord"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Thank you for voting"
    }
  }
}
</script>
