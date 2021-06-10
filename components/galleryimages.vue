<template>
  <div class="container-xl-fluid">
    <vue-masonry-wall :items="gallery_items" :options="{ padding: 12 }">
      <template v-slot:default="{ item }">
        <b-card
          overlay
          :img-src="'http://localhost:8055/assets/' + item.gallery_image"
          img-alt="Card Image"
          class="item overflow-hidden"
          text-variant="white"
          :title="item.image_name"
          sub-title="Subtitle"
        >
        </b-card>
      </template>
    </vue-masonry-wall>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: 'Challenge Coin Gallery - Signature Coins Gallery', // Other meta information
      loading: true,
      gallery_items: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8055/items/product_gallery_image/')
      .then((response) => (this.gallery_items = response.data.data))
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
.masonry-wall .card-title {
  position: absolute;
  bottom: 10px;
  font-size: 1em !important;
}
.card-body.card-img-overlay:before {
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 60%;
  bottom: 0;
}
</style>
