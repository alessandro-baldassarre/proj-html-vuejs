<template>
  <main>
    <div class="hero position-relative">

    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexMain',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
@import "@/assets/scss/partials/_common";
main{
  div.hero{
    height: 565px;
    background-image: url("../assets/images/homepage-hero-background.jpg");
    background-size: cover;
  }
}
</style>
