<template>
  <div>
    <section class="courses">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div class="col-5 pe-5">
            <div class="courses-box-info shadow position-relative text-center">
              <div class="new-corner-img position-absolute"></div>
              <h1 class="mb-5">Courses</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultrices auctor sapien id cursus. Aliquam maximus turpis in
                vehicula semper.
              </p>
              <button class="my-btn text-uppercase text-white rounded-pill">
                course information
              </button>
            </div>
          </div>
          <div
            class="col-7 ms-0 d-flex h-100 py-5 px-0 justify-content-between"
          >
            <div
              v-for="(course, index) in courses"
              :key="index"
              class="course-name-info text-center py-4"
            >
            <div class="wrapper-img">
              <img :src="course.imgUrl" alt="car image" class="mb-3" />
            </div>
              <h2 class="mb-3">{{ course.name }}</h2>
              <button class="my-btn-grey text-uppercase rounded-pill">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="statistics position-relative">
      <div class="container-fluid justify-content-center h-100">
        <div class="row h-100">
          <div class="col-12 d-flex justify-content-center">
            <div class="separator position-absolute"></div>
          </div>
          <div class="col 12 wrapper-statistics-cards position-relative h-100">
            <div class="container px-5 h-100">
              <div class="row px-5 h100 text-center">
                <div class="col-4">
                  <div class="statistics-card shadow position-relative">
                    <svg>
                      <circle class="bg" cx="100" cy="100" r="95" />
                      <circle class="meter-1" cx="100" cy="100" r="95" />
                    </svg>
                    <p class="position-absolute">95%</p>
                    <h5 class="text-uppercase">pass rate</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="statistics-card shadow position-relative">
                    <svg>
                      <circle class="bg" cx="100" cy="100" r="95" />
                      <circle class="meter-2" cx="100" cy="100" r="95" />
                    </svg>
                    <p class="position-absolute">100%</p>
                    <h5 class="text-uppercase">referral rate</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="statistics-card shadow position-relative">
                    <svg>
                      <circle class="bg-3" cx="100" cy="100" r="95" />
                      <circle class="met-3" cx="100" cy="100" r="95" />
                    </svg>
                    <p class="position-absolute">0%</p>
                    <h5 class="text-uppercase">accident rate</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainCourses",
  data: function () {
    return {
      courses: [
        {
          name: "Pass Plus",
          imgUrl: require("@/assets/images/courses-passplus-200x200.jpg"),
        },
        {
          name: "Intensive Course",
          imgUrl: require("@/assets/images/course-intensive-200x200.jpg"),
        },
        {
          name: "Instructors",
          imgUrl: require("@/assets/images/courses-instructor-200x200.jpg"),
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

section.courses {
  height: 520px;
  background-image: url("~/src/assets/images/promise-background.jpg");
  background-size: cover;
  background-position-y: bottom;
  div.new-corner-img {
    background-image: url("~/src/assets/images/new-corner.jpg");
    background-size: cover;
    width: 85px;
    height: 85px;
    top: 0;
    left: 0;
    border-top-left-radius: 12px;
  }
  div.courses-box-info {
    border-radius: 12px;
    padding: 3.5rem 2.5rem;
    bottom: 2.5rem;
    z-index: 2;
    background-color: white;
    h1 {
      color: $greyTitlesColor;
      font-weight: 700;
      font-size: 2.3;
    }
    p {
      color: $lightGreyColor;
      font-size: 1.04rem;
      line-height: 2.1rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }
  div.course-name-info {
    h2 {
      color: $secondaryColor;
      font-size: 1.4rem;
      font-weight: 600;
    }
    button {
      font-size: 0.7rem;
    }
  }
    div.wrapper-img {
        overflow: hidden;
        max-height: 190px;
        margin-bottom: 1rem;
        // cursor: pointer;
        img {
          transition: all ease-in-out 0.8s;
          &:hover {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }
      }
}

section.statistics {
  height: 520px;
  div.separator {
    height: 500px;
    width: 150%;
    border-radius: 120%;
    background-color: rgb(228, 233, 237);
    bottom: 450px;
    z-index: -1;
  }
  div.wrapper-statistics-cards {
    bottom: 1.5rem;
    z-index: 2;
    div.statistics-card {
      background-color: white;
      border-radius: 12px;
      border-top: 6px solid $mainColor;
      padding: 3.5rem 2.5rem;
    }
    h5 {
      color: rgb(147, 155, 163);
      font-weight: 600;
    }
    p {
      bottom: 190px;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 600;
      font-size: 2.6rem;
      color: rgb(147, 155, 163);
    }
    .col-4 {
      padding: 0 0.3rem;
    }
  }
  svg {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .bg {
    fill: none;
    stroke-width: 10px;
    stroke: $lightGrayBg;
  }
  [class^="meter-"] {
    fill: none;
    stroke-width: 10px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  .meter-1 {
    stroke-dasharray: 560;
    stroke-dashoffset: 0;
    stroke: $mainColor;
    animation: progress-1 2s ease-out;
  }
  .meter-2 {
    stroke-dasharray: 720;
    stroke-dashoffset: 0;
    stroke: $mainColor;
    animation: progress-1 2s ease-out;
  }
  .bg-3 {
    fill: none;
    stroke-width: 10px;
    stroke: $mainColor;
  }
  .met-3 {
    fill: none;
    stroke-width: 10px;
    stroke-linecap: circle;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-dasharray: 590;
    stroke-dashoffset: 0;
    stroke: $lightGrayBg;
  }
  @keyframes progress-1 {
    from {
      stroke-dashoffset: 560;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes progress-2 {
    from {
      stroke-dashoffset: 360;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

}
</style>