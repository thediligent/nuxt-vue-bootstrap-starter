<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-nav
        id="topMenu"
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-2"
      >
        <div class="container-xxl position-relative">
          <div
            class="row w-100 justify-content-start justify-content-xl-between align-items-center"
          >
            <div class="col-auto d-xl-none text-center ps-2 pl-2 pe-2 pr-2">
              <b-link
                id="nav-open-btn"
                v-b-toggle.sidebar-backdrop
                class="toggle-nav nav-toggler h5"
              >
                <img src="https://i.sig.gg/f/he7i/a.svg" style="width: 28px" />
              </b-link>
            </div>
            <div class="col-auto p-0">
              <b-nav-item class="p-0 m-0 text-white d-md-none" to="/">
                <img
                  src="https://i.sig.gg/f/he44/h.png"
                  class="align-text-bottom img-fluid"
                  group="Brand"
                  name="signature-simple"
                />
              </b-nav-item>
              <Nuxtlink class="brand" to="/">
                <b-nav-item
                  class="p-0 m-0 text-white d-none d-md-inline"
                  to="/"
                >
                  <img
                    src="https://i.sig.gg/f/hffm/h.png"
                    class="align-text-bottom img-fluid"
                    group="Brand"
                    name="signature-logo-single-line-new"
                  />
                </b-nav-item>
              </Nuxtlink>
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
                ><NuxtLink class="text-white" to="/account">Pricing</NuxtLink>
              </b-nav-item>
              <b-dropdown
                toggle-tag="a"
                tag="div"
                menu-class="container mx-auto overflow-hidden py-0"
                boundary="viewport"
                variant="link"
              >
                <template #button-content>
                  <span class="text-white">Challenge Coins</span>
                </template>
                <productdropdownmenu id="product-megamenu" />
              </b-dropdown>
              <b-nav-item class="text-white"
                ><NuxtLink class="text-white" to="/gallery">Gallery</NuxtLink>
              </b-nav-item>
              <b-nav-item
                ><NuxtLink class="text-white" to="/blog"
                  >Blog</NuxtLink
                ></b-nav-item
              >
              <b-nav-item
                ><NuxtLink class="text-white" to="/formulate"
                  >Forms</NuxtLink
                ></b-nav-item
              >
              <b-dropdown
                toggle-tag="a"
                tag="div"
                menu-class="container mx-auto overflow-hidden py-0"
                boundary="viewport"
                variant="link"
              >
                <template #button-content>
                  <span class="text-white">Support</span>
                </template>
                <supportdropdownmenu id="support-megamenu" />
              </b-dropdown>
            </div>
            <div
              class="col col-md-4 col-lg-auto text-end text-right px-0 mx-0 ps-2 ps-lg-0 pe-lg-2 pl-2 pl-lg-0 pr-2"
            >
              <NuxtLink
                class="btn btn-secondary text-white d-none d-md-inline"
                to="/freequote"
                href="/freequote"
                >Get Started</NuxtLink
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
                    class="img-fluid d-inline ms-2 ml-2"
                    alt="Call us via telephone"
                  /> </b-link
              ></Nuxtlink>
              <Nuxtlink to="/cart">
                <img
                  src="https://i.sig.gg/f/heu7/a.svg"
                  style="width: 24px"
                  class="img-fluid d-none d-lg-inline mx-2"
                  alt="cart"
              /></Nuxtlink>
              <Nuxtlink to="/accountLink">
                <img
                  src="https://i.sig.gg/f/hf95/a.svg"
                  class="img-fluid d-none d-md-inline d-lg-none mx-2"
                  alt="account"
                  style="width: 24px"
                />
              </Nuxtlink>
              <b-dropdown
                id="dropdown-form"
                ref="dropdown"
                right
                variant="link"
                class="m-2 d-none d-lg-inline text-white"
              >
                <template #button-content>
                  <span
                    id="accountDropdownSmall"
                    class="px-0 mx-0 nav-link text-white d-none d-lg-inline"
                    style="width: 42px; overflow: hidden"
                    ><img
                      src="https://i.sig.gg/f/hf95/a.svg"
                      class="img-fluid d-lg-inline mx-2"
                      style="width: 24px"
                  /></span>
                </template>
                <b-dropdown-form>
                  <b-form-group
                    label="Email"
                    label-for="dropdown-form-email"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-email"
                      size="sm"
                      placeholder="email@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Password"
                    label-for="dropdown-form-password"
                  >
                    <b-form-input
                      id="dropdown-form-password"
                      type="password"
                      size="sm"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
                  <b-button variant="primary" size="sm" @click="onClick"
                    >Sign In</b-button
                  >
                </b-dropdown-form>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button
                  >Create an Account</b-dropdown-item-button
                >
                <b-dropdown-item-button
                  >Forgot Password?</b-dropdown-item-button
                >
              </b-dropdown>
            </div>
          </div>
        </div>
        <Loadprogress />
      </b-nav>
    </b-navbar>
    <Megadropdowns />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    mobileMenu() {
      return this.showMenu ? 'left-sidebar-open' : ''
    },
  },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true)
    },
  },
}
</script>
<style>
.navbar .dropdown-menu.show {
  top: 48px;
  border-radius: 0 0 0.25em 0.25em;
  min-width: 14em;
}
#topMenu a.nav-link {
  padding: 0.5rem 0.5rem !important;
}
input[type='checkbox' i] {
  margin-right: 0.5em;
  margin-top: 0.5em;
}
</style>
