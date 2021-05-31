<template>
  <div>
    <div class="row w-100" :class="{ skeleton: loading }">
      <div
        v-for="portfolio_item in portfolio_items"
        :key="portfolio_item.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card">
          <div class="card-body p-0">
            <div class="loading-spinner text-center clearfix">
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden d-none">Loading...</span>
              </div>
            </div>
            <img
              class="quote-product-image"
              loading="auto"
              :src="portfolio_item.image_url"
            />
            <h5 class="card-title">{{ portfolio_item.item_title }}</h5>
            <p class="card-text">
              {{ portfolio_item.product_description }}
            </p>
            <a class="link" @click="loading = !loading"> Go somewhere </a>
          </div>
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
      portfolio_items: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8055/items/product_portfolio_item/')
      .then((response) => (this.portfolio_items = response.data.data))
      .then((this.loading = false))
  },
}
</script>
<style>
.loading-spinner {
  display: none;
}
.skeleton .loading-spinner {
  display: block;
  margin: 8px;
}
</style>
