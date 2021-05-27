<template>
  <div class="bg-white">
    <hooper
      group="products"
      :short-drag="false"
      :items-to-show="currentItemsToShow"
      :initial-slide="0"
      :wheel-control="false"
      :center-mode="true"
      :infinite-scroll="true"
      class="productslider"
    >
      <slide class="col-6 col-md-3 col-xl-2">
        <div class="product">
          <b-link to="/productlanding"><h4>Product 1</h4></b-link>
          <b-card
            overlay
            img-src="https://i.sig.gg/f/erbq/f.png"
            img-alt="Product Name"
            text-variant="white"
          >
          </b-card>
        </div>
      </slide>
      <slide class="col-6 col-md-3 col-xl-2"
        ><div class="product">
          <b-link to="/productlanding"><h4>Product 2</h4></b-link>
          <b-card
            overlay
            img-src="https://i.sig.gg/f/erbq/f.png"
            img-alt="Product Name"
            text-variant="white"
          >
          </b-card></div
      ></slide>
      <slide class="col-6 col-md-3 col-xl-2"
        ><div class="product">
          <h4><Nuxtlink to="#">Product 3</Nuxtlink></h4>
          <b-card
            overlay
            img-src="https://i.sig.gg/f/erbq/f.png"
            img-alt="Product Name"
            text-variant="white"
          >
          </b-card></div
      ></slide>
      <slide class="col-6 col-md-3 col-xl-2"
        ><div class="product">
          <h4><Nuxtlink to="#">Product 4</Nuxtlink></h4>
          <b-card
            overlay
            img-src="https://i.sig.gg/f/erbq/f.png"
            img-alt="Product Name"
            text-variant="white"
          >
          </b-card></div
      ></slide>
      <slide class="col-6 col-md-3 col-xl-2"
        ><div class="product">
          <h4><Nuxtlink to="#">Product 5</Nuxtlink></h4>
          <b-card
            overlay
            img-src="https://i.sig.gg/f/erbq/f.png"
            img-alt="Product Name"
            text-variant="white"
          >
          </b-card></div
      ></slide>
      <slide class="col-6 col-md-3 col-xl-2"
        ><div class="product">
          <h4><Nuxtlink to="#">Product 6</Nuxtlink></h4>
          <b-card
            overlay
            img-src="https://i.sig.gg/f/erbq/f.png"
            img-alt="Product Name"
            text-variant="white"
          >
          </b-card></div
      ></slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'ProductSlider',
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      currentItemsToShow: 4,
    }
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData)
    },
  },
  mounted() {},
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide
    },
  },
}
</script>
<style>
.productslider {
  height: auto !important;
}
.product {
  min-height: 280px;
  padding: 1rem;
}
</style>
