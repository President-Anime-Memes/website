<template>
<div>
  <div class = "p-4 flex-col items-center md:flex" id = "popunder" />

  <div class = "p-4 flex-col items-center hidden md:flex" id = "dada" />
    <div class = "p-4 flex flex-col items-center md:hidden" id = "dadam" />

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
  <div class = "p-4 border-red-500 border-2 flex flex-col items-center">
    <p class = "font-semibold p-2 text-lg">{{sauce.caption}}</p>
        <p class = "font-semibold p-2 text-md">Scroll down for link</p>
    <img class = "object-cover w-full p-2" :src = "sauce.image"/>
    <p class = "font-semibold p-2 text-lg">{{sauce.link}}</p>

  </div>
    
  </div>
  <div class = "p-4 flex-col items-center hidden md:flex" id = "dada1" />
  <div class = "p-4 flex flex-col items-center md:hidden" id = "dadam1" />

</div>
</template>
<script>
import postscribe from 'postscribe'
export default {
  async asyncData() {
    const res = await fetch('https://beta.presidentanimememes.com/main/sauce')
    const sauce = await res.json()
    return {sauce}

  },
  mounted() {
    postscribe("#popunder", `<script type='text/javascript' src='//groundlesscobwebmiller.com/b5/40/dc/b540dcc9fcf576301ad486a48ddbd854.js />`)
    postscribe("#dada", `<script type="text/javascript">
    atOptions = {
        'key' : '72e8d0ce607c81cd361ad4c026c94a15',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://groundlesscobwebmiller.com/72e8d0ce607c81cd361ad4c026c94a15/invoke.js"></scr' + 'ipt>');
<\/script>`)
    postscribe("#dadam", `<script type="text/javascript">
    atOptions = {
        'key' : '72e8d0ce607c81cd361ad4c026c94a15',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://groundlesscobwebmiller.com/72e8d0ce607c81cd361ad4c026c94a15/invoke.js"></scr' + 'ipt>');
<\/script>`)

    postscribe("#dada1", `<script type="text/javascript">
    atOptions = {
        'key' : '5f563d114936af66fee3132cb94027f4',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://groundlesscobwebmiller.com/5f563d114936af66fee3132cb94027f4/invoke.js"></scr' + 'ipt>');
<\/script>`)
    postscribe("#dadam1", `<script type="text/javascript">
    atOptions = {
        'key' : '5f563d114936af66fee3132cb94027f4',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://groundlesscobwebmiller.com/5f563d114936af66fee3132cb94027f4/invoke.js"></scr' + 'ipt>');
<\/script>`)
  }
}
</script>