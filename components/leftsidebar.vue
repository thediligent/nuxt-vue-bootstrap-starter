<template>
  <div>
    <div>
      <b-sidebar
        id="sidebar-backdrop"
        title="Sidebar with backdrop"
        :backdrop-variant="variant"
        bg-variant="dark"
        backdrop
        shadow
      >
        <div style="padding-top: 1.5rem">
          <form
            id="sidebar-search-form"
            action="/search"
            method="GET"
            class="text-white px-4 mb-3 position-relative"
          >
            <img
              src="https://i.sig.gg/f/hfau/a.svg"
              alt="search-white"
              class="me-2 mr-2"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Search Site"
              name="q"
            />
          </form>
          <div id="sidebarMenuAccordion" class="accordion accordion-flush">
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <b-button block class="p-3" variant="link">Pricing</b-button>
              </b-card-header>
            </b-card>
            <div class="accordion" role="tablist">
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button
                    v-b-toggle.accordion-1
                    block
                    variant="link"
                    class="p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="d-flex"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style="height: 24px; width: 24px"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Challenge Coins</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  accordion="challenge-coin-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text class="py-0 pl-0">
                      <div class="accordion" role="tablist">
                        <b-card no-body>
                          <b-card-header header-tag="header" role="tab">
                            <b-button
                              v-b-toggle.accordion-cctypes
                              block
                              variant="info"
                              class="p-3 text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="d-flex"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                style="height: 24px; width: 24px"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Coin Types</b-button
                            >
                          </b-card-header>
                          <b-collapse
                            id="accordion-cctypes"
                            accordion="types-accordion"
                            role="tabpanel"
                          >
                            <b-card-body>
                              <b-card-text>3D Challenge Coins</b-card-text>
                              <b-card-text
                                >Cut to Shape Challenge Coins</b-card-text
                              >
                              <b-card-text>Round Challenge Coins</b-card-text>
                              <b-card-text>Bottle Openers</b-card-text>
                              <b-card-text>Spinners</b-card-text>
                              <b-card-text
                                >Oversized Challenge Coins</b-card-text
                              >
                              <b-card-text>Multi Tool</b-card-text>
                              <b-card-text>Golf Ball Markers</b-card-text>
                              <b-card-text>Dog Tags</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>

                        <b-card no-body>
                          <b-card-header header-tag="header" role="tab">
                            <b-button
                              v-b-toggle.accordion-ccuses
                              block
                              variant="info"
                              class="p-3 text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="d-flex"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                style="height: 24px; width: 24px"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Coin Uses</b-button
                            >
                          </b-card-header>
                          <b-collapse
                            id="accordion-ccuses"
                            accordion="types-accordion"
                            role="tabpanel"
                          >
                            <b-card-body>
                              <b-card-text>Police Coins</b-card-text>
                              <b-card-text
                                >Military Challenge Coins</b-card-text
                              >
                              <b-card-text>Corporate Coins</b-card-text>
                              <b-card-text
                                >International Challenge Coins</b-card-text
                              >
                              <b-card-text>Firefighter Coins</b-card-text>
                              <b-card-text>Sports Challenge Coins</b-card-text>
                              <b-card-text>Entertainment</b-card-text>
                              <b-card-text>Government Coins</b-card-text>
                              <b-card-text>Commemorative Coins</b-card-text>
                              <b-card-text>Clubs and Hobbies</b-card-text>
                              <b-card-text>Safety Coins</b-card-text>
                              <b-card-text>School Coins</b-card-text>
                            </b-card-body>
                          </b-collapse>
                        </b-card>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button
                    v-b-toggle.accordion-2
                    block
                    variant="link"
                    class="p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="d-flex"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style="height: 24px; width: 24px"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Gallery</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>Full Coin Gallery</b-card-text>
                    <b-card-text>Police Coin Gallery</b-card-text>
                    <b-card-text>Military Coin Gallery</b-card-text>
                    <b-card-text>Corporate Gallery</b-card-text>
                    <b-card-text>Charity Coin Gallery</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button block class="p-3" variant="link">Blog</b-button>
                </b-card-header>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button
                    v-b-toggle.accordion-4
                    block
                    variant="link"
                    class="p-3"
                    >Support</b-button
                  >
                </b-card-header>
              </b-card>
              <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                  <b-button
                    v-b-toggle.accordion-5
                    block
                    variant="link"
                    class="p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="d-flex"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style="height: 24px; width: 24px"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Account</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-5"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>Test Text 1</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="row w-100 mt-4 mb-5 px-3">
            <div class="col">
              <a
                target="_blank"
                rel="noopener"
                href="https://www.facebook.com/SignatureCoins"
                ><i class="fab fa-facebook text-white img-fluid"></i
              ></a>
            </div>
            <div class="col">
              <a
                class=""
                target="_blank"
                rel="noopener"
                href="https://twitter.com/signature_coins"
                ><i class="fab text-white fa-twitter img-fluid"></i
              ></a>
            </div>
            <div class="col">
              <a
                class=""
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/channel/UCxfcD86Q93zBzgF92MRIPNw"
                ><i class="fab text-white fa-youtube img-fluid"></i
              ></a>
            </div>
            <div class="col">
              <a
                class=""
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/signaturecoins/"
                ><i class="fab text-white fa-instagram img-fluid"></i
              ></a>
            </div>
            <div class="col">
              <a
                class=""
                target="_blank"
                rel="noopener"
                href="https://www.pinterest.com/signaturecoins/"
                ><i class="fab text-white fa-pinterest img-fluid"></i
              ></a>
            </div>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      variant: 'dark',
    }
  },
}
</script>
<style>
#sidebarMenuAccordion .card-body {
  padding: 0px;
}
#sidebarMenuAccordion .card-body p.card-text {
  padding-left: 40px;
  color: #ccdcdc;
}
#sidebarMenuAccordion .collapse {
  background: rgba(0, 0, 0, 0.25);
}
#sidebarMenuAccordion .collapse .collapse {
  background: rgba(0, 0, 0, 0.2);
}
#sidebarMenuAccordion .collapse .card-text {
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 0;
}
#sidebarMenuAccordion button {
  border-radius: 0;
  text-align: left;
}
#left-sidebar a,
#sidebarMenuAccordion .btn-link {
  color: #ffffff;
}
#sidebarMenuAccordion .card,
#sidebarMenuAccordion button,
.bg-dark .accordion:not(.accordion-flush),
#sidebarMenuAccordion .accordion > .card > .card-header {
  background-color: transparent;
  border: none;
}
#sidebar-search-form input {
  max-width: 21.875rem;
  height: 2.625rem;
  line-height: normal;
  border-radius: 0px;
  background: 0 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #efefef;
  box-shadow: none;
  font-size: 0.9375rem;
  padding: 0.38rem;
  padding-left: 28px;
  background-color: transparent;
  color: #fff;
}
#sidebarMenuAccordion p.card-text {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.accordion .card {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
}
</style>
