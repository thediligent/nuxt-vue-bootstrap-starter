<template>
  <div>
    <div id="masonry" class="row w-100">
      <div
        v-for="fake_item in fake_items"
        :key="fake_item.id"
        class="col-6 col-md-4 col-lg-3 my-2"
      >
        <div class="card">
          <div class="card-body p-0">
            <div class="loading-spinner text-center clearfix">
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden d-none">Loading...</span>
              </div>
            </div>
            <img
              lazy
              class="quote-product-image img-fluid"
              loading="auto"
              :src="fake_item.download_url"
            />
            <h5 class="card-title p-3">{{ fake_item.author }}</h5>
            <p class="card-text px-3">
              {{ fake_item.id }}
            </p>
            <a class="link d-block m-3" @click="loading = !loading">
              Go somewhere
            </a>
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
      fake_items: [],
    }
  },
  mounted() {
    axios
      .get('https://picsum.photos/v2/list?page=2&limit=10')
      .then((response) => (this.fake_items = response.data))
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
