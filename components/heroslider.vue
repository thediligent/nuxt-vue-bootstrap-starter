<template>
  <div>
    <hooper
      :infinite-scroll="true"
      :progress="true"
      :wheel-control="false"
      :auto-play="true"
      :play-speed="5000"
      class="heroslider"
    >
      <slide
        ><div class="slide-container bg-dark h-100 display-block w-100">
          <div class="slide-content bottom p-4 text-start">
            <h1>Example Slide 1</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </slide>
      <slide
        ><div class="slide-container bg-primary h-100 display-block w-100">
          <div class="slide-content p-4 text-start">
            <h1>Example Slide 2</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <b-button variant="outline-light">Sign Up Today</b-button>
          </div>
        </div>
      </slide>
      <slide
        ><div class="slide-container bg-secondary h-100 display-block w-100">
          <div class="slide-content middle p-4 text-start">
            <h1>Example Slide 3</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <b-button variant="outline-light">Sign Up Today</b-button>
          </div>
        </div></slide
      >
      <slide
        ><div class="slide-container bg-light h-100 display-block w-100">
          <div class="slide-content right p-4 text-start">
            <h1>Example Slide 4</h1>
            <p>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div></slide
      >
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'HeroSlider',
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {}
  },
}
</script>
<style>
.bg-dark h1,
.bg-dark p,
.bg-secondary h1,
.bg-secondary p,
.bg-primary h1,
.bg-primary p {
  color: #ffffff;
}
.heroslider {
  min-height: 45vh;
}
.slide-content.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.slide-content.middle {
  text-align: center;
  padding-top: 10vh !important;
  width: 100%;
}
.slide-content.right {
  position: absolute;
  text-align: right;
  width: 100%;
}
.heroslider {
  min-height: 45vh;
  margin-top: 40px;
}
</style>
