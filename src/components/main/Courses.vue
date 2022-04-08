<template>
  <div>
    <section class="courses">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div class="col-5 pe-5">
            <div class="courses-box-info shadow position-relative text-center">
              <div class="new-corner-img position-absolute"></div>
              <h1 class="mb-5">Courses</h1>
              <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultrices auctor sapien id cursus. Aliquam maximus turpis in
                vehicula semper.
              </p>
              <button class="my-btn text-uppercase text-white rounded-pill">
                course information
              </button>
            </div>
          </div>
          <div class="col-7 ms-0 d-flex h-100 py-5 px-0 justify-content-between">
            <div v-for="(course, index) in courses" :key="index" class="course-name-info text-center py-4">
              <img :src="course.imgUrl" alt="car image" class="mb-3">
              <h2 class="mb-3">{{course.name}}</h2>
              <button class="my-btn-grey text-uppercase rounded-pill">learn more</button>
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
  data: function (){
      return {
        courses: [
          {
            name: "Pass Plus",
            imgUrl : require('@/assets/images/courses-passplus-200x200.jpg')
          },
            {
            name: "Intensive Course",
            imgUrl : require('@/assets/images/course-intensive-200x200.jpg')
          },
            {
            name: "Instructors",
            imgUrl : require('@/assets/images/courses-instructor-200x200.jpg')
          },
        ]
      }
    
  }
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
    }
  }
  div.course-name-info{
    h2{
      color: $secondaryColor;
      font-size: 1.6rem;
      font-weight: 600;
    }
    button{
      font-size: .7rem;
    }
  }
}
</style>
