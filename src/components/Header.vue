<template>
  <header class="position-absolute w-100">
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
              <span class="icon me-2"
                ><font-awesome-icon icon="fa-solid fa-phone-flip" /></span>
              <p class="m-0">
                Give us a call to book your tuition! 1-800-555-555
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-content d-flex w-100">
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
            <div class="logo">
              <a href="#">
                <img
                  src="../assets/images/avada-drivers-logo-2x-300x58.png"
                  alt="avada drivers logo"
              /></a>
            </div>
            <nav class="d-flex align-items-center h-100">
              <div class="links h-100">
                <ul class="links-list d-flex align-items-center h-100 m-0">
                  <li
                    v-for="(link, index) in headerNavLink"
                    :key="index"
                    class="text-uppercase py-2"
                    :class="{ active: link.active, 'new-link': link.new }"
                  >
                    {{ link.name }}
                    <span
                      v-if="link.new"
                      class="new rounded text-white mx-1 position-absolute"
                      >new</span
                    >
                  </li>
                </ul>
              </div>
              <div class="book-now">
                <button class="my-btn text-uppercase text-white rounded-pill">
                  book now
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "IndexHeader",
  data: function () {
    return {
      headerNavLink: [
        {
          name: "home",
          url: "#",
          active: true,
          new: false,
        },
        {
          name: "about",
          url: "#",
          active: false,
          new: false,
        },
        {
          name: "prices",
          url: "#",
          active: false,
          new: false,
        },
        {
          name: "courses",
          url: "#",
          active: false,
          new: true,
        },
        {
          name: "locations",
          url: "#",
          active: false,
          new: false,
        },
        {
          name: "blog",
          url: "#",
          active: false,
          new: false,
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
header 
{z-index: 2;
  div.top-banner {
    height: 45px;
    background-color: $bgLightDark;
    div.top-banner-text {
      color: $secondaryColor;
      font-size: 12px;
    }
  }
  div.header-content {
    height: 115px;
    background-color: rgba(73, 70, 70, 0.5);
    
    div.logo {
      img {
        width: 82%;
      }
    }
  }
  nav {
    div.links {
      ul.links-list {
        li {
          list-style-type: none;
          font-weight: 700;
          font-size: 14px;
          color: white;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          margin-right: 2.5rem;

          &:hover {
            color: $mainColor;
            border-bottom: 2px solid $mainColor;
          }
        }
        li.new-link {
          margin-right: 5.7rem;
        }
        li.active {
          color: $mainColor;
          border-bottom: 2px solid $mainColor;
        }
        span.new {
          background-color: $mainColor;
          font-size: 9.8px;
          padding: 0.15rem 0.4rem;
          vertical-align: text-bottom;
        }
      }
    }
  }
}
</style>
