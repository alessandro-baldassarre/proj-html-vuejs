<template>
  <main>
    <section class="hero position-relative">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div class="col-12 h-100 d-flex align-items-center">
            <div class="hero-text text-white">
              <h1>Drive with Avada</h1>
              <p>We offer the finest driving tuition money can buy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="intro">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div class="col-6 h-100 pt-4 intro-text">
            <h1 class="my-5">Get Behind The Wheel</h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed
              vitae fringilla nibh. Nunc ultrices auctor sapien id cursus.
              Aliquam maximus turpis in vehicula semper. Fusce et ultrices
              libero, at suscipit lacus. Sed vitae fringilla nibh.
            </p>
          </div>
          <div class="col-6 h-100 px-3 text-center intro-form">
            <form class="shadow position-relative">
              <h2>First Lesson Free!</h2>
              <p>
                When you make a block booking with us your first lesson is
                included free.
              </p>
              <input
                type="text"
                placeholder="Your Name*"
                class="input-form w-100 rounded"
              />
              <img
                class="position-absolute names-expand"
                src="../assets/images/image.png"
                alt="icon of names expand"
              />
              <input
                type="email"
                placeholder="Email*"
                class="input-form w-100 rounded"
              />
              <input
                type="text"
                placeholder="Telephone"
                class="input-form w-100 rounded"
              />
              <input
                type="text"
                placeholder="Location"
                class="input-form w-100 rounded"
              />
              <button
                class="my-btn text-uppercase text-white rounded-pill mb-2"
              >
                request a callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100 align-items-center justify-content-between">
          <div class="col-8 text-white contact-text">
            <h1>Start Learning to Drive Today</h1>
            <p>Give us a call to schedule your first driving lesson</p>
          </div>
          <div class="col-4 d-flex justify-content-end text-white contact-phone">
            <span class="icon me-5"
              ><font-awesome-icon icon="fa-solid fa-phone-flip" /></span>
            <p class="m-0 me-4">
              1-800-555-555
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexMain",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
@import "@/assets/scss/partials/_common";
main {
  section.hero {
    height: 615px;
    background-image: url("../assets/images/homepage-hero-background.jpg");
    background-size: cover;
    div.hero-text {
      margin-top: 160px;
      h1 {
        font-size: 3.5rem;
        font-weight: 700;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  section.intro {
    height: 675px;
    div.intro-text {
      h1 {
        color: $greyTitlesColor;
        font-weight: 700;
        font-size: 2.3;
      }
      h5 {
        color: $lightGreyColor;
        font-size: 1.3rem;
        line-height: 2.5rem;
        font-weight: 400;
      }
      p {
        color: $lightGreyColor;
        font-size: 1.04rem;
        line-height: 2.1rem;
        font-weight: 400;
      }
    }
    div.intro-form {
      form {
        border-radius: 12px;
        padding: 3rem 2.5rem;
        bottom: 2.5rem;
        z-index: 2;
        background-color: white;

        h2 {
          color: $mainColor;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        p {
          color: $lightGreyColor;
          font-size: 1.04rem;
          line-height: 2.1rem;
          font-weight: 400;
          margin-bottom: 2rem;
        }
        input.input-form {
          border: 1px solid lightgray;
          color: $lightGreyColor;
          background-color: $lightGrayBg;
          margin-bottom: 1.7rem;
          padding: 0.85rem 0.7rem;
          font-size: 0.85rem;
        }
        img.names-expand {
          top: 235px;
          right: 50px;
          cursor: pointer;
        }
      }
    }
  }
  section.contact {
    height: 240px;
    background-image: url("../assets/images/horizontal-cta-background.jpg");
    background-size: cover;
    div.contact-text{
      h1{
        font-weight: 700;
        font-size: 2.3;
      }
      p{
        font-size: 1.3rem;
        font-weight: 700;
      }
    }
  }
  div.contact-phone{
    font-size: 1.9rem;
  }
}
</style>
