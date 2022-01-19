<template>
  <div class="p-4">
    <div class="flex flex-col items-center">
      <div class="p-4 flex-col items-center flex" id="dada" />
      <div class="p-2">
        <img
          src="https://media.discordapp.net/attachments/772536281896452136/932680641949098064/received_619389765808939.webp"
        />
      </div>
      <div class="p-4 flex-col items-center flex" id="dada2" />
    </div>
  </div>
</template>
<script>
import postscribe from 'postscribe'
export default {
  mounted() {
    postscribe(
      '#dada',
      `<script type="text/javascript">
    atOptions = {
        'key' : '72e8d0ce607c81cd361ad4c026c94a15',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://groundlesscobwebmiller.com/72e8d0ce607c81cd361ad4c026c94a15/invoke.js"></scr' + 'ipt>');
<\/script>`
    )
    postscribe(
      '#dada2',
      `<script type="text/javascript">
    atOptions = {
        'key' : '5f563d114936af66fee3132cb94027f4',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://groundlesscobwebmiller.com/5f563d114936af66fee3132cb94027f4/invoke.js"></scr' + 'ipt>');
<\/script>`
    )
  },
}
</script>

