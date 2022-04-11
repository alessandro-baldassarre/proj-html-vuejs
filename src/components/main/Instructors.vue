<template>
  <div>
    <section class="instructors">
      <div class="container px-5 h-100">
        <div class="row px-5">
          <div class="col-8 instructors-text">
            <h1>Your Instructors</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </p>
          </div>
          <div class="col-4 instructors-cta pt-5 mt-4 px-4">
            <button class="my-btn text-uppercase text-white rounded-pill w-100">
              more about us
            </button>
          </div>
        </div>
        <div class="row px-5 me-1">
          <div
            v-for="(instructor, index) in instructors"
            :key="index"
            class="col-4 cards-wrapper"
          >
            <div class="instructor-card shadow position-relative text-center">
              <img
                :src="instructor.imgUrl"
                :alt="instructor.name"
                class="img-fluid mb-5"
              />
              <h5>{{ instructor.name }}</h5>
              <div class="social">
                <a :href="instructor.facebookUrl" class="social-icon mx-2"> <i class="fab fa-facebook-f"></i></a>
                <a :href="instructor.twitterUrl" class="social-icon mx-2"> <i class="fab fa-twitter"></i></a>
                <a :href="instructor.instagramUrl" class="social-icon mx-2"> <i class="fab fa-instagram"></i></a>
              </div>
              <p>{{instructor.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainInstructros",
  data: function () {
    return {
      instructors: [
        {
          name: "Mike Hart",
          imgUrl: require("@/assets/images/instructor-mikehart.jpg"),
          facebookUrl: "http://www.facebook.com/",
          twitterUrl: "http://www.facebook.com/",
          instagramUrl: "http://www.instragam.com/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name: "John Smith",
          imgUrl: require("@/assets/images/instructor-johnsmith.jpg"),
          facebookUrl: "http://www.facebook.com/",
          twitterUrl: "http://www.facebook.com/",
          instagramUrl: "http://www.instragam.com/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name: "Angela Hart",
          imgUrl: require("@/assets/images/instructor-angelahart.jpg"),
          facebookUrl: "http://www.facebook.com/",
          twitterUrl: "http://www.facebook.com/",
          instagramUrl: "http://www.instragam.com/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
@import "@/assets/scss/partials/_common";
@import "~@fortawesome/fontawesome-free/css/all.css";

section.instructors {
  height: 620px;
  div.instructors-text {
    h1 {
      color: $greyTitlesColor;
      font-weight: 700;
      font-size: 2.3;
      margin-bottom: 2rem;
    }
    p {
      color: $lightGreyColor;
      font-size: 1.3rem;
      line-height: 2.1rem;
      font-weight: 500;
      margin-bottom: 5rem;
    }
  }
  div.cards-wrapper {
    padding: 0 0.3rem;
    div.instructor-card {
      background-color: white;
      border-radius: 12px;
      border-top: 6px solid $mainColor;
      padding: 2.5rem 2.5rem;
      img{
        transition: all ease-in-out .5s;
        &:hover{
          transform: scale(1.04);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
      }
    }
    h5 {
      color: $greyTitlesColor;
      font-weight: 600;
      font-size: 1.5rem;
    }
    .social-icon{
      color: $lightGreyColor;
    }
    p{
      color: $lightGreyColor;
      line-height: 2.1rem;
    }
  }
}
</style>
