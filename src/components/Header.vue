<template>
  <header>
    <div class="top-banner">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div
            class="
              col-12
              d-flex
              align-items-center
              justify-content-between
              h-100
            "
          >
            <div class="top-banner-text" id="pass-rate-text">
              <p class="m-0">We have a 95% Succesful Pass Rate!</p>
            </div>
            <div class="top-banner-text d-flex" id="text-call-to-book">
              <span class="icon me-2"><font-awesome-icon icon="fa-solid fa-phone" /></span>
              <p class="m-0">
                Give us a call to book your tuition! 1-800-555-555
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "IndexHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
header {
  div.top-banner {
    height: 45px;
    background-color: $bgLightDark;
    div.top-banner-text {
      color: $secondaryColor;
      font-size: 12px;
    }
  }
}
</style>
