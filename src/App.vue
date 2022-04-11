<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />

    <Icons />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Icons from './components/Icons.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    Icons,
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
