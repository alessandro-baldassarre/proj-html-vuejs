<template>
  <footer>
    <section class="main-content">
      <div class="container px-5">
        <div class="row px-5">
          <div class="col-3 logo-info">
            <img
              src="../assets/images/avada-drivers-logo-1x.png"
              alt=" avada drivers logo"
              class="img-fluid mb-3"
            />
            <p>
              Avada Driving School is the right choice for experienced drivers
              looking for a refresher course, or the brand new driver wanting to
              pass first time.
            </p>
          </div>

          <div class="col-3 contact-details">
            <h5 class="text-uppercase text-white">contact details</h5>
            <div class="container-fluid p-3 pe-5">
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="fas fa-home"></i>
                </div>
                <div class="col-11 pe-4">
                  <p>12345 North Main Street, New York, NY 555555</p>
                </div>
              </div>
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="col-11 pe-4">
                  <p>1.800.555.6789</p>
                </div>
              </div>
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="far fa-envelope"></i>
                </div>
                <div class="col-11 pe-4">
                  <p>info@your-domain.com</p>
                </div>
              </div>
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="fas fa-link"></i>
                </div>
                <div class="col-11 pe-4">
                  <p>Theme-Fusion.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3 footer-courses">
            <h5 class="text-uppercase text-white">courses</h5>
            <div class="container-fluid p-3 pe-5">
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="far fa-arrow-alt-circle-right"></i>
                </div>
                <div class="col-11 pe-4">
                  <a href="#"><p>Pass Plus</p> </a>
                </div>
              </div>
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="far fa-arrow-alt-circle-right"></i>
                </div>
                <div class="col-11 pe-4">
                  <a href="#"><p>Intensive Course</p> </a>
                </div>
              </div>
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="far fa-arrow-alt-circle-right"></i>
                </div>
                <div class="col-11 pe-4">
                  <a href="#"><p>Automatic</p> </a>
                </div>
              </div>
              <div class="row p-0">
                <div class="col-1 p-0">
                  <i class="far fa-arrow-alt-circle-right"></i>
                </div>
                <div class="col-11 pe-4">
                  <a href="#"><p>Instructor Training</p></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 book-now text-center">
            <img
              src="../assets/images/footer-ad-grid.png"
              alt=" ads image"
              class="img-fluid mb-4"
            />
            <button class="my-btn text-uppercase text-white rounded-pill mb-4">
              book now
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="copyright-social">
      <div class="container px-5 h-100">
        <div class="row px-5 h-100">
          <div
            class="
              col
              12
              h-100
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <div class="copyright">
              <p class="m-0">
                © Copyright 2012 - 2022 | Avada Theme by
                <a href="#">ThemeFusion</a> | All Rights Reserved | Powered by
                <a href="#">WordPress</a>
              </p>
            </div>
            <div class="social">
            <a href="http://www.facebook.com/"><i class="fab fa-facebook-f"></i></a> 
             <a href="http://www.twitter.com/"><i class="fab fa-twitter"></i></a> 
             <a href="http://www.youtube.com/"><i class="fab fa-youtube"></i></a> 
             <a href="http://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "IndexFooter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/partials/_variables";
@import "@/assets/scss/partials/_common";
footer {
  section.main-content {
    height: 450px;
    background-image: url("../assets/images/footer-background-color.jpg");
    background-size: cover;
    div.logo-info {
      padding: 4.2rem 0.5rem;
      p {
        font-size: 0.8rem;
        line-height: 1.6rem;
        color: rgb(109, 116, 123);
      }
    }
    div.contact-details {
      padding: 4.5rem 0.5rem;
      h5 {
        font-size: 1rem;
        font-weight: 700;
      }
      i {
        color: $secondaryColor;
      }
      p {
        font-size: 0.8rem;
        line-height: 1.6rem;
        color: rgb(109, 116, 123);
      }
    }
    div.footer-courses {
      padding: 4.5rem 0.5rem;
      h5 {
        font-size: 1rem;
        font-weight: 700;
      }
      i {
        color: $mainColor;
      }
      a {
        font-size: 1rem;
        line-height: 1.6rem;
        color: $mainColor;
        text-decoration: none;
      }
    }
    div.book-now {
      padding: 4.5rem 0.5rem;
    }
  }

  section.copyright-social {
    height: 135px;
    background-color: rgb(28, 29, 30);
    div.copyright {
      p {
        font-size: 0.75rem;
        color: rgb(109, 116, 123);
        a {
          color: $mainColor;
          text-decoration: none;
        }
      }
    }
    div.social{
      a{
        color: white;
        text-decoration: none;
        margin-left: 1.25rem;
      }
    }
  }
}
</style>
