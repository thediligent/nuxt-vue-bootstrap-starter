<template>
  <div>
    <div class="row" :class="{ skeleton: loading }">
      <div v-for="product in products" :key="product.id" class="card">
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
          <a @click="loading = !loading" class="link"> Go somewhere </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: true,
      products: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8055/items/product/')
      .then((response) => (this.products = response.data.data))
      .then((this.loading = false))
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
.skeleton .quote-product-image {
  margin: 8px;
  display: none;
}
#quote-container .card {
  max-width: 14em;
  text-align: center;
  margin: 0 1em 1em 0;
}
</style>
