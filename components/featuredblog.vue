<template>
  <div class="col-12 blog-placeholder">
    <div class="card featured overflow-hidden border-0 my-2">
      <div class="row g-0 align-items-center">
        <div class="col-12 col-md-5 bg-black position-relative rounded-start">
          <a class="featured-blog-url" href="/#">
            <img src="" class="featured-blog-image" group="BlogDefault" />
            <div class="card-img-overlay d-block d-md-none">
              <span
                class="featured-blog-badge badge bg-secondary text-white mb-4"
                >FEATURED</span
              >
              <div class="position-absolute">
                <h5
                  class="featured-blog-category text-primary fw-bold small text-uppercase mb-2"
                ></h5>
                <h3 class="featured-blog-title card-title text-white"></h3>
              </div>
            </div>
          </a>
        </div>
        <div class="col-12 col-md-7 overflow-hidden">
          <div class="card-body p-2 p-md-3">
            <div class="d-none d-md-block">
              <span
                class="featured-blog-badge fs-6 badge bg-secondary text-white mb-4"
                >FEATURED</span
              >
              <h5
                class="featured-blog-category text-muted fw-bold small text-uppercase mb-2"
              ></h5>
              <h5 class="featured-blog-title card-title text-primary">
                <a class="blog-url" href="/#"></a>
              </h5>
            </div>
            <p class="featured-blog-description card-text">
              <span class="placeholder-text"></span>
              <span class="placeholder-text"></span>
              <span class="placeholder-text"></span>
            </p>
            <a
              href="#"
              class="featured-blog-url m-0 mt-2 waves-effect waves-light"
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
                href="#"
              ></a>
              <a
                class="btn btn-outline-secondary rounded-pill btn-sm me-2 small"
                href="#"
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
</template>
<script>
export default {}
</script>
<style></style>
