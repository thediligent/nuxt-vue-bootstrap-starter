<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-2"
      >
        <div class="container-xxl position-relative">
          <div
            class="row w-100 justify-content-start justify-content-xl-between align-items-center"
          >
            <div class="col-auto d-xl-none text-center ps-2 pl-2 pe-2 pr-2">
              <a id="nav-open-btn" class="toggle-nav nav-toggler h5">
                <img src="https://i.sig.gg/f/he7i/a.svg" style="width: 28px" />
              </a>
            </div>
            <div class="col-auto p-0">
              <b-nav-item>
                <Nuxtlink class="brand" to="/">
                  <b-link href="/">
                    <img
                      src="https://i.sig.gg/f/he44/h.png"
                      class="align-text-bottom img-fluid d-md-none"
                      group="Brand"
                      name="signature-simple"
                    />
                  </b-link>
                </Nuxtlink>
                <Nuxtlink class="brand" to="/">
                  <b-link href="/">
                    <img
                      src="https://i.sig.gg/f/hffm/h.png"
                      class="align-text-bottom img-fluid d-none d-md-inline"
                      group="Brand"
                      name="signature-logo-single-line-new"
                    />
                  </b-link>
                </Nuxtlink>
              </b-nav-item>
            </div>
            <div
              class="nav-search-col col d-none d-md-flex align-items-center ps-0 pl-0"
            >
              <img
                src="https://i.sig.gg/f/hfau/a.svg"
                class="me-2 mr-2"
                alt="search-white"
              />
              <form
                id="nav-search-form"
                action="/search"
                method="GET"
                class="flex-grow-1"
              >
                <input
                  id="nav-search-input"
                  type="text"
                  class="form-control"
                  placeholder="Search Entire Site (Type + Press Enter)"
                  name="q"
                />
              </form>
            </div>
            <div id="megamenu" class="col-lg-auto d-none d-xl-flex ml-auto">
              <b-nav-item class="text-white"
                ><NuxtLink class="text-white" to="/pricing">Pricing</NuxtLink>
              </b-nav-item>
              <b-nav-item id="productDropdown" class="text-white"
                >Challenge Coins</b-nav-item
              >
              <b-nav-item class="text-white"
                ><NuxtLink class="text-white" to="#">Gallery</NuxtLink>
              </b-nav-item>
              <b-nav-item
                ><NuxtLink class="text-white" to="/collection"
                  >Blog</NuxtLink
                ></b-nav-item
              >
              <b-nav-item id="" class="dropdown">Support</b-nav-item>
            </div>
            <div
              class="col col-md-3 col-lg-auto text-end px-0 mx-0 ps-2 ps-lg-0 pe-lg-2 pl-2 pl-lg-0 pr-lg-2"
            >
              <a
                class="btn btn-secondary text-white d-none d-md-inline"
                href="/freequote"
                >Get Started</a
              >
              <a
                class="btn btn-secondary btn-sm text-white d-inline d-md-none"
                href="/freequote"
                >Get Started
              </a>
              <Nuxtlink to="#" style="text-decoration: none">
                <b-link href="tel:1800-000-0000"
                  ><img
                    src="https://i.sig.gg/f/heva/a.svg"
                    style="width: 24px"
                    class="img-fluid d-none d-lg-inline d-xxl-none mx-2"
                    alt="Call us via telephone"
                  /> </b-link
              ></Nuxtlink>
              <Nuxtlink to="/cart">
                <img
                  src="https://i.sig.gg/f/heu7/a.svg"
                  style="width: 24px"
                  class="img-fluid d-none d-lg-inline d-xxl-none mx-2"
                  alt="cart-white"
              /></Nuxtlink>
              <Nuxtlink to="/accountLink">
                <img
                  src="https://i.sig.gg/f/hf95/a.svg"
                  class="img-fluid d-none d-xxl-inline mx-2"
                />
              </Nuxtlink>
              <a
                id="accountDropdown"
                class="px-0 mx-0 nav-link dropdown-toggle text-white d-none d-xl-inline"
                style="width: 42px; overflow: hidden"
                ><img
                  src="https://i.sig.gg/f/hf95/a.svg"
                  class="img-fluid d-lg-inline mx-2"
                  style="width: 24px"
              /></a>
            </div>
          </div>
        </div>
        <Loadprogress />
      </b-nav>
    </b-navbar>
    <Megadropdowns />
  </div>
</template>
<script></script>
