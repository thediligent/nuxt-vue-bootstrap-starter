<template>
  <div id="blog-header" class="product-header position-relative">
    <div
      class="overflow-hidden"
      style="
        background-image: linear-gradient(
            228deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          url('https://i.sig.gg/i/BmnX/M.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 480px;
      "
    >
      <div class="container position-relative z-index-1">
        <div class="row">
          <div class="col-12 py-5 text-center text-md-start">
            <h1 class="text-white">Signature Blog</h1>
            <h2 class="p pt-2 pb-0 lead text-white">
              Blogs featuring challenge coin design, news &amp; information
            </h2>
            <div class="row mx-auto pt-sm-3">
              <div class="callus col-12 col-md-7 p-2">
                <a class="btn btn-primary btn-block me-2" href="/contact"
                  >Contact Us Today</a
                >
                <button
                  class="freequote btn btn-secondary btn-block"
                  type="button"
                >
                  Start Free Artwork &amp; Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="blogs-container"
      class="skeleton container-lg rounded"
      style="margin-top: -12rem; position: relative"
    >
      <div class="col-12 overflow-scroll no-bar blog p-0 my-2">
        <nav
          class="blog-category-nav nav flex-row nav-pills-underline"
          style="min-width: 640px"
        >
          <a
            id="all-blog-posts"
            class="flex-sm-fill text-sm-center nav-link active"
            href="#"
            role="tab"
            aria-selected="true"
            >All Posts</a
          >
          <a
            class="flex-sm-fill text-sm-center nav-link"
            data-bs-toggle="Customers"
            href="#customers"
            role="tab"
            aria-selected="false"
            >Customers</a
          >
          <a
            class="flex-sm-fill text-sm-center nav-link"
            data-bs-toggle="Design"
            href="#design"
            role="tab"
            aria-selected="false"
            >Design</a
          >
          <a
            class="flex-sm-fill text-sm-center nav-link"
            data-bs-toggle="Products"
            href="#product"
            role="tab"
            aria-selected="false"
            >Product</a
          >
          <a
            class="flex-sm-fill text-sm-center nav-link"
            data-bs-toggle="Company"
            href="#company"
            role="tab"
            aria-selected="false"
            >Company</a
          >
        </nav>
      </div>
      <div id="featured-blogs-placeholder-row" class="row my-2 g-4">
        <!-- 1st wide blog card -->
        <div class="col-12 blog-placeholder">
          <div class="card featured border-0 my-2">
            <div class="row g-0 align-items-center">
              <div
                class="col-12 col-md-5 bg-black position-relative overflow-hidden rounded-start"
              >
                <a class="featured-blog-url" href="/#">
                  <artwork-group-image
                    class="featured-blog-image"
                    group="BlogDefault"
                    name="Blog Default Image Small"
                  ></artwork-group-image>
                  <div class="card-img-overlay d-block d-md-none">
                    <span
                      class="featured-blog-badge badge bg-secondary text-white mb-4"
                      >FEATURED</span
                    >
                    <div class="position-absolute">
                      <h5
                        class="featured-blog-category text-primary fw-bold small text-uppercase mb-2"
                      ></h5>
                      <h3
                        class="featured-blog-title card-title text-white"
                      ></h3>
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
        <!-- 1st wide blog card done -->
      </div>
      <div
        id="blogs-placeholder-row"
        class="row my-2 row-cols-1 row-cols-lg-2 g-4"
      >
        <!-- blog placeholder card -->
        <div class="col blog-placeholder">
          <div class="card border-0 mb-1">
            <div class="row g-0 align-items-center">
              <div
                class="col-12 bg-black position-relative overflow-hidden rounded-start"
              >
                <a href="#" class="blog-url">
                  <artwork-group-image
                    class="blog-image"
                    group="BlogDefault"
                    name="Blog Default Image Small"
                  ></artwork-group-image>
                  <div class="card-img-overlay d-block d-md-none">
                    <div class="position-absolute">
                      <h5
                        class="blog-category text-primary fw-bold small text-uppercase mb-2"
                      ></h5>
                      <h5 class="blog-title card-title">
                        <a class="blog-url text-white" href="/#"></a>
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
                      <a class="blog-url" href="/#"></a>
                    </h5>
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
        <!-- end blog placeholder card -->
        <!-- blog placeholder card -->
        <div class="col blog-placeholder">
          <div class="card border-0 mb-1">
            <div class="row g-0 align-items-center">
              <div
                class="col-12 bg-black position-relative overflow-hidden rounded-start"
              >
                <a href="#">
                  <artwork-group-image
                    class="blog-image"
                    group="BlogDefault"
                    name="Blog Default Image Small"
                  ></artwork-group-image>
                  <div class="card-img-overlay d-block d-md-none">
                    <div class="position-absolute">
                      <h5
                        class="blog-category text-primary fw-bold small text-uppercase mb-2"
                      ></h5>
                      <h5 class="blog-title card-title">
                        <a class="blog-url text-white" href="/#"></a>
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
                      <a class="blog-url" href="/#"></a>
                    </h5>
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
        <!-- end blog placeholder card -->
      </div>
      <div id="blogs-row" class="row my-2 row-cols-1 row-cols-lg-2 g-4">
        <!-- blog skeleton card -->
        <div id="blog-template" class="col blog-templates">
          <div class="card border-0 mb-1">
            <div class="row g-0 align-items-center">
              <div
                class="col-12 bg-black position-relative overflow-hidden rounded-start"
              >
                <a href="#" class="blog-url">
                  <artwork-group-image
                    class="blog-image"
                    group="BlogDefault"
                    name="Blog Default Image Small"
                  ></artwork-group-image>
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
      </div>
      <!-- pagination -->
      <div class="row my-4">
        <div class="col-8 mx-auto text-center">
          <nav aria-label="Page navigation d-flex">
            <ul class="pagination justify-content-center text-center">
              <li class="page-item d-flex">
                <a id="blog-prev-page" class="page-link" href="#">Previous</a>
              </li>
              <li id="prev-set-of-pages" class="page-item d-none">
                <a href="#"></a>
              </li>

              <li id="next-set-of-pages" class="page-item d-none">
                <a href="#" class="page-link">...</a>
              </li>
              <li class="page-item d-flex">
                <a id="blog-next-page" href="#" class="page-link">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
