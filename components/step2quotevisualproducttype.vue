<template>
  <div>
    <div class="row" :class="{ skeleton: loading }">
      <div v-for="product in products" :key="product.id">
        <div class="card float-left">
          <div class="card-body p-0">
            <div class="loading-spinner text-center clearfix">
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden d-none">Loading...</span>
              </div>
            </div>
            <img
              v-b-toggle.collapse1
              class="quote-product-image"
              :src="product.image_thumbnail"
            />
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
            <a class="link" @click="loading = !loading"> Extra Text </a>
          </div>
        </div>
        <b-collapse id="collapse1" class="float-left my-3 p-1">
          <p style="font-size: 16px" class="card-text text-left">
            Where would you like the
            <strong class="text-secondary"><em>Metallic Gold</em></strong> in
            your design?<br />
            <span class="small text-muted"
              >Please specify a color or placement for your choice of
              upgrade.</span
            >
          </p>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Ex: Can you make the yellow part of my logo metalic gold..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-collapse>
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
      .get('http://localhost:8055/items/product/?limit=1')
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
  min-width: 12em;
  text-align: center;
  margin: 0 1em 1em 0;
}
</style>
