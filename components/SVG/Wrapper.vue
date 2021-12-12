<template>
  <div>
    <SVGHome v-if="name.toLowerCase() == 'home'" />
    <SVGSus v-if="name.toLowerCase() == 'sus'" />
    <SVGFile v-if="name.toLowerCase() == 'file'" />
    <SVGPlusSquare v-if="name.toLowerCase() == 'plussquare'" />
    <SVGFacebook v-if="name.toLowerCase() == 'facebook'" />
    <SVGNav v-if="name.toLowerCase() == 'nav'" />
    <SVGParticipant v-if="name.toLowerCase() == 'participant'" />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default() {
        return "sus";
      },
    },
  },
};
</script>