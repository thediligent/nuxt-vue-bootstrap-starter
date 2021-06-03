<template>
  <div style="background: transparent">
    <hooper group="products" class="productslider">
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
  name: 'OnPageProductSlider',
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        shortDrag: false,
        wheelControl: true,
        centerMode: false,
        initialSlide: 0,
        autoPlay: true,
        playSpeed: 4500,
        itemsToShow: 6,
        breakpoints: {
          2400: {
            itemsToShow: 6,
          },
          1800: {
            itemsToShow: 6,
          },
          1500: {
            itemsToShow: 6,
          },
          1100: {
            itemsToShow: 4,
          },
          768: {
            itemsToShow: 3,
          },
        },
      },
    }
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
