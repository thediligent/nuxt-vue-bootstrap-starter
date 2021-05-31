<template>
  <div>
    <b-button
      style="position: absolute; top: 80px; right: 20px"
      @click="show = !show"
      >Toggle overlay</b-button
    >
    <div class="row">
      <div v-for="product in products" :key="product.id" class="card">
        <b-overlay :show="show" :spinner-variant="secondary" class="d-flex">
          <div class="card-body p-0">
            <div class="loading-spinner text-center clearfix">
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden d-none">Loading...</span>
              </div>
            </div>
            <img class="quote-product-image" :src="product.image_thumbnail" />
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
            <a class="link" @click="loading = !loading"> Go somewhere </a>
          </div>
        </b-overlay>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      show: true,
      products: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8055/items/product/')
      .then((response) => (this.products = response.data.data))
      .then((this.show = false))
  },
}
</script>
<style>
#quote-container .skeleton .loading-spinner {
  display: block;
  margin: 8px;
}
#quote-container .loading-spinner {
  display: none;
}
.quote-product-image {
  margin: 8px;
}
#quote-container .card {
  max-width: 14em;
  text-align: center;
  margin: 0 1em 1em 0;
}
</style>
