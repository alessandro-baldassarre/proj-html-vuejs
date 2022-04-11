<template>
  <div>
    <section class="testimonials">
      <!-- testimonials intro title -->
      <div class="container p-5">
        <div class="row pt-5 pb-4">
          <div class="col 12 text-center pt-5 title">
            <h1 v-scrollanimation>Testimonials</h1>
            <p v-scrollanimation>Here's what our happy drivers had to say about our services:</p>
          </div>
        </div>
        <!-- testimonial -->
        <div v-scrollanimation
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="row"
          :class="counter == index ? 'd-block' : 'd-none'"
        >
          <div class="col-7 text-center testimonials-card">
            <img :src="testimonial.imgUrl" :alt="testimonial.name" />
            <p>{{ testimonial.testimony }}</p>
            <h5>{{ testimonial.name }}</h5>
          </div>
        </div>
        <div class="row">
          <!-- dots slide -->
          <div class="col-12 text-center dots-slide">
            <i
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :class="counter == index ? 'fas fa-circle' : 'far fa-circle'"
              @click="changeActive(index)"
            ></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainTestimonials",
  data: function () {
    return {
      testimonials: [
        {
          name: "Sophia Jones",
          imgUrl: require("@/assets/images/testimonial-sophia.png"),
          testimony:
            "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
        },
        {
          name: "Harold Green",
          imgUrl: require("@/assets/images/testimonial-harold.png"),
          testimony:
            "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
        },
        {
          name: "Grant Harvey",
          imgUrl: require("@/assets/images/testimonial-grant.png"),
          testimony:
            "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
        },
        {
          name: "Kate Lewis",
          imgUrl: require("@/assets/images/testimonial-kate.png"),
          testimony:
            "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
        },
        {
          name: "Kelly Johnson",
          imgUrl: require("@/assets/images/testimonial-kelly.png"),
          testimony:
            "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
        },
      ],
      counter: 0,
      startingPageInterval: null,
      clickedDotsInterval: null,
    };
  },
  methods: {
    // method for advancing the testimonials slider
    nextTestimonial() {
      if (this.counter < this.testimonials.length - 1) {
        if (this.counter >= 0) {
          this.counter++;
        }
      } else {
        this.counter = 0;
      }
    },
    // method to change the active slide of the testimonial based on the one selected by the user through the dots
    changeActive(index) {
      this.counter = index;
      
      // control that is used to deactivate the automatic slide and restart it
      if (this.clickedDotsInterval == null) {
        clearInterval(this.startingPageInterval);
        this.clickedDotsInterval = setInterval(this.nextTestimonial, 4000);
      } else {
        clearInterval(this.clickedDotsInterval);
        this.clickedDotsInterval = setInterval(this.nextTestimonial, 4000);
      }
    },
  },
  mounted() {
    // when the page is mounted, a set interval is started for the automatic slide
    this.startingPageInterval = setInterval(this.nextTestimonial, 4000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
@import "@/assets/scss/partials/_common";

section.testimonials {
  height: 870px;
  background-image: url("~/src/assets/images/testimonial-background.jpg");
  background-size: cover;
  background-position-y: center;
  .title {
    margin-top: 3rem;
    h1 {
      color: $greyTitlesColor;
      font-weight: 700;
      font-size: 2.3;
      margin-bottom: 1rem;
    }
    p {
      color: $lightGreyColor;
      font-size: 1.3rem;
      line-height: 2.1rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
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
  }
  div.testimonials-card {
    margin: 0 auto;
    img {
      width: 150px;
      margin-bottom: 1rem;
    }
    p {
      color: $lightGreyColor;
      font-size: 1.3rem;
      line-height: 2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      font-style: italic;
    }
    h5 {
      color: rgb(146, 154, 163);
      font-weight: 700;
      margin-bottom: 2rem;
    }
      
  }
  .before-enter {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1.5s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
  div.dots-slide {
    i {
      margin-right: 0.5rem;
      font-size: 0.8rem;
      color: rgb(146, 154, 163);
      cursor: pointer;
    }
  }
}
</style>
