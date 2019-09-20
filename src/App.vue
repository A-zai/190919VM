<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqAddress} from './api'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'App',

    async mounted(){
      /* 原本返回promise，但不想要，await */
      const result = await reqAddress('116.36867', '40.10038')
      console.log('result', result)
      /* 这里页面汇报一个404的错误，因为我请求的是当前的端口，应该请求4000，
      给Ajax添加个 baseURL: 'http://localhost:4000',
      解决后又出现了跨域问题，则需要代理去做，配置代理*/
    },
    components:{
      FooterGuide 
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">  
  
</style>
