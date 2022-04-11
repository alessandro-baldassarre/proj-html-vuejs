<template>
  <main>
    <!-- hero section -->
    <section class="hero position-relative">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div class="col-12 h-100 d-flex align-items-center">
            <div class="hero-text text-white">
              <h1 v-scrollanimation>Drive with Avada</h1>
              <p v-scrollanimation>
                We offer the finest driving tuition money can buy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- intro section -->
    <section class="intro">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div v-scrollanimation class="col-6 h-100 pt-4 intro-text">
            <h1  class="my-5">Get Behind The Wheel</h1>
            <h5 >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </h5>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed
              vitae fringilla nibh. Nunc ultrices auctor sapien id cursus.
              Aliquam maximus turpis in vehicula semper. Fusce et ultrices
              libero, at suscipit lacus. Sed vitae fringilla nibh.
            </p>
          </div>

          <!-- form -->
          <div class="col-6 h-100 px-3 text-center intro-form">
            <form v-scrollanimation class="shadow position-relative">
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

    <!-- contact section -->
    <section class="contact position-relative">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100 align-items-center justify-content-between">
          <div class="col-8 text-white contact-text">
            <h1 v-scrollanimation>Start Learning to Drive Today</h1>
            <p v-scrollanimation class="text-white">
              Give us a call to schedule your first driving lesson
            </p>
          </div>
          <div
            v-scrollanimation
            class="col-4 d-flex justify-content-end text-white contact-phone"
          >
            <span class="icon me-5"
              ><font-awesome-icon icon="fa-solid fa-phone-flip"
            /></span>
            <p class="m-0 me-4 text-white">1-800-555-555</p>
          </div>
        </div>
      </div>
    </section>

    <!-- courses section  -->
    <Courses />

    <!-- instructors section -->
    <Instructros />

    <!-- testimonials section -->
    <Testimonials />

    <!-- latest news section -->
    <section class="latest-news">
      <div class="container px-5">
        <div class="row px-5">
          <div class="col-12">
            <div class="latest-news-card shadow position-relative text-center">
              <h1>Latest News</h1>
              <div class="container">
                <div class="row">
                  <div class="col-6 mb-5">
                    <div v-scrollanimation class="wrapper-img">
                      <img
                        src="../assets/images/blog-choosecar-700x441.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <h5>What Car to Start With?</h5>
                    <p class="date">
                      February 7th, 2019 |
                      <span class="comments">0 Comments</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  <div class="col-6 mb-5">
                    <div v-scrollanimation class="wrapper-img">
                      <img
                        src="../assets/images/blogpost-10and2-700x441.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <h5>Avada Driving School Expanding</h5>
                    <p class="date">
                      February 7th, 2019 |
                      <span class="comments">0 Comments</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  <div class="col-12">
                    <button
                      class="my-btn text-uppercase text-white rounded-pill mb-4"
                    >
                      more form the blog
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="../assets/images/latestnews-bottom.png"
              alt="arrow down image"
              class="img-fluid position-relative"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- newsletter section -->
    <section class="newsletter">
      <div class="container">
        <div class="row justify-content-center py-2">
          <div class="col-6 text-center p-5">
            <h1>Sign up to our Newsletter</h1>
            <input type="text" class="w-100 newsletter rounded" />
            <button
              class="my-btn text-uppercase text-white rounded-pill w-100 mb-4"
            >
              subscribe
            </button>
            <p>
              (We do not share your data with anybody, and only use it for its
              intended purpose)
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Courses from "./main/Courses.vue";
import Instructros from "./main/Instructors.vue";
import Testimonials from "./main/Testimonials.vue";

export default {
  name: "IndexMain",
  components: {
    Courses,
    Instructros,
    Testimonials,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
@import "@/assets/scss/partials/_common";
main {
  // HERO
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
      .before-enter {
        opacity: 0;
        transform: translatex(-100px);
        transition: all 1.5s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translatex(0px);
      }
      p {
        font-size: 1.5rem;
      }
    }
  }

  // INTRO
  section.intro {
    height: 675px;
    .before-enter {
        opacity: 0;
        transform: translatex(-100px);
        transition: all 1.5s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translatex(0px);
      }
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
    // form
    div.intro-form {
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 1.5s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
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

  // CONTACT
  section.contact {
    height: 240px;
    background-image: url("../assets/images/horizontal-cta-background.jpg");
    background-size: cover;
    div.contact-text {
      h1 {
        font-weight: 700;
        font-size: 2.3;
      }
      .before-enter {
        opacity: 0;
        transform: translateX(-100px);
        transition: all 1.5s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateX(0px);
      }
      p {
        font-size: 1.3rem;
        font-weight: 700;
      }
    }
  }
  div.contact-phone {
    font-size: 1.9rem;
  }
  .before-enter {
    opacity: 0;
    transform: translatex(100px);
    transition: all 1.8s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translatex(0px);
  }

  // LATEST NEWS
  section.latest-news {
    height: 870px;
    background-image: url("../assets/images/latestnews-background.jpg");
    background-size: cover;
    background-position-y: center;
    div.latest-news-card {
      background-color: white;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      border-top: 6px solid $secondaryColor;
      padding: 4.5rem 2.5rem 0 2.5rem;
      bottom: 2.5rem;
      h1 {
        color: $greyTitlesColor;
        font-weight: 700;
        font-size: 2.3;
        margin-bottom: 3.5rem;
      }
      div.wrapper-img {
        overflow: hidden;
        max-height: 305px;
        margin-bottom: 1rem;
        cursor: pointer;
        img {
          transition: all ease-in-out 0.8s;
          &:hover {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }
      }
      .before-enter {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1.8s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    img {
      bottom: 2.5rem;
      margin-bottom: 1rem;
    }
    h5 {
      color: $mainColor;
      margin-bottom: 0.2rem;
      font-weight: 700;
    }
    p.date {
      color: $lightGreyColor;
      font-size: 0.75rem;
      span.comments {
        color: $mainColor;
      }
    }
    p {
      color: $lightGreyColor;
    }
  }

  // NEWSLETTER
  section.newsletter {
    height: 380px;
    background-image: url("../assets/images/newsletter_background.jpg");
    background-size: cover;
    background-position-x: center;
    h1 {
      color: $greyTitlesColor;
      font-weight: 700;
      font-size: 1.9rem;
      margin-bottom: 3.5rem;
    }
    input.newsletter {
      padding: 0.8rem;
      border: 1px solid lightgray;
      margin-bottom: 2rem;
    }
    p {
      color: $lightGreyColor;
      font-size: 0.8rem;
    }
  }
}
</style>
