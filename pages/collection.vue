<template>
  <div id="blog-header" class="product-header position-relative">
    <div
      class="overflow-hidden position-relative"
      style="
        background-image: url('https://i.sig.gg/i/BmnX/M.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 480px;
      "
    >
      <div id="blogheader" class="container position-relative">
        <div class="row">
          <div class="col-12 py-5 text-center text-md-start">
            <h1 class="text-white">Signature Blog</h1>
            <h2 class="p pt-2 pb-0 lead text-white">
              Blogs featuring challenge coin design, news &amp; information
            </h2>
            <div class="row mx-auto pt-3">
              <button
                class="btn btn-primary"
                style="max-width: 420px; margin: auto"
                @click="isLoading = !isLoading"
              >
                test load
              </button>
              <Nuxtlink
                to="/freequote"
                class="freequote btn btn-secondary btn-block"
                style="max-width: 420px; margin: auto"
                type="button"
              >
                Start Free Artwork &amp; Quote
              </Nuxtlink>
            </div>
          </div>
        </div>
      </div>
      <div class="jumbotron-shade"></div>
    </div>
    <div
      id="blogs-container"
      class="theme container-lg rounded"
      :class="{ skeleton: isLoading }"
      style="margin-top: -12rem; position: relative"
    >
      <div class="col-12 overflow-scroll no-bar blog p-0 my-2">
        <Blognav />
      </div>
      <div id="featured-blogs-placeholder-row" class="row my-2 g-4">
        <Featuredblog />
      </div>
      <div
        id="blogs-placeholder-row"
        class="row my-2 row-cols-1 row-cols-lg-2 g-4"
      ></div>
      <div id="blogs-row" class="row my-2 row-cols-1 row-cols-lg-2 g-4">
        <!-- blog skeleton card -->
        <div id="blog-template" class="col blog-templates">
          <div class="card border-0 mb-1 overflow-hidden">
            <div class="row g-0 align-items-center">
              <div
                class="col-12 bg-black position-relative overflow-hidden rounded-start"
              >
                <a href="#" class="blog-url">
                  <img src="" class="blog-image" group="BlogDefault" />
                  <div class="card-img-overlay d-block d-md-none">
                    <div class="position-absolute">
                      <h5
                        class="blog-category text-primary fw-bold small text-uppercase mb-2"
                      ></h5>
                      <h5 class="blog-title card-title"></h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-12 overflow-hidden">
                <div class="card-body p-2 p-md-3">
                  <div class="d-none d-md-block">
                    <h5
                      class="blog-category text-muted fw-bold small text-uppercase mb-2"
                    ></h5>
                    <h5 class="blog-title card-title text-primary"></h5>
                  </div>
                  <p class="blog-description card-text">
                    <span class="placeholder-text"></span>
                    <span class="placeholder-text"></span>
                    <span class="placeholder-text"></span>
                    <span class="placeholder-text"></span>
                  </p>
                  <a
                    href="#"
                    class="blog-url m-0 mt-2 waves-effect waves-light"
                  >
                    Continue reading <i class="bi bi-arrow-right"></i
                  ></a>
                  <div
                    class="tags mt-4 mb-2"
                    style="overflow-x: scroll; width: max-content"
                  >
                    <small class="me-2">Tagged:</small>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2"
                      href=""
                    ></a>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                      href=""
                    ></a>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                      href=""
                    ></a>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                      href=""
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end skeleton blog card -->
        <div v-for="post in posts" :key="post.id" class="col blog-templates">
          <div class="card border-0 mb-1 overflow-hidden">
            <div class="row g-0 align-items-center">
              <div
                class="col-12 bg-black position-relative overflow-hidden rounded-start"
              >
                <a :href="urlPermalinkRoot + post.url" class="blog-url">
                  <img
                    :src="post.main_image_url"
                    class="blog-image"
                    group="BlogDefault"
                  />
                  <div class="card-img-overlay d-block d-md-none">
                    <div class="position-absolute">
                      <h5
                        class="blog-category text-primary fw-bold small text-uppercase mb-2"
                      ></h5>
                      <h5 class="blog-title card-title">
                        <b-link :href="urlPermalinkRoot + post.url">
                          {{ post.title }}
                        </b-link>
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-12 overflow-hidden">
                <div class="card-body p-2 p-md-3">
                  <div class="d-none d-md-block">
                    <h5
                      class="blog-category text-muted fw-bold small text-uppercase mb-2"
                    ></h5>
                    <h5 class="blog-title card-title text-primary">
                      <b-link :href="urlPermalinkRoot + post.url">
                        {{ post.title }}
                      </b-link>
                    </h5>
                  </div>
                  <p class="blog-description card-text">
                    {{ post.excerpt }}
                  </p>
                  <b-link
                    :href="urlPermalinkRoot + post.url"
                    class="blog-url m-0 mt-2 waves-effect waves-light"
                  >
                    Continue reading <i class="bi bi-arrow-right"></i
                  ></b-link>
                  <div
                    class="tags mt-4 mb-2"
                    style="overflow-x: scroll; width: max-content"
                  >
                    <small class="me-2">Tagged:</small>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2"
                      href=""
                    ></a>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                      href=""
                    ></a>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                      href=""
                    ></a>
                    <a
                      class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                      href=""
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- pagination -->
      <div class="row my-4">
        <div class="col-8 mx-auto text-center">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
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
      perPage: 10,
      rows: 4,
      currentPage: 1,
      isLoading: true,
      urlPermalinkRoot: '/blog/',
      posts: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8055/items/blog_post')
      .then((response) => (this.posts = response.data.data))
      .then((this.isLoading = false))
  },
}
</script>
<style>
#blogheader {
  z-index: 1000;
}
#blogs-container .card .blog-image {
  min-height: 100%;
  transition: 1.3s;
}
</style>
