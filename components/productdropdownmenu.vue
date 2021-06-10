<template>
  <div class="row">
    <b-tabs pills card vertical nav-wrapper-class="col-3">
      <b-tab title="Coins by Uses" active>
        <b-card-text
          ><div class="row px-0 mx-0 pb-4">
            <div class="col-12 col-lg">
              <img class="img-fluid" src="https://i.sig.gg/f/f2rn/f.jpe" />
              <ul class="image-hover-col ps-3 list-unstyled">
                <li class="py-1">
                  <strong
                    ><a
                      class="menu-category-title text-primary"
                      href="/military-challenge-coin"
                      >Military
                    </a></strong
                  >
                </li>
                <li>
                  <Nuxtlink class="py-0 px-0 dropdown-item" href="/post"
                    >Air Force</Nuxtlink
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/army-coins">Army</a>
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/navy-challenge-coins"
                    >US Navy</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/marine-corps-coins"
                    >Marine</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/coast-guard-coins"
                    >Coast Guard</a
                  >
                </li>
                <li class="pt-2"><strong>International</strong></li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/international-coins"
                    >World Coins</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-canada-coins"
                    >Canada</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-australian-coins"
                    >Australia</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-eucom-coins"
                    >Europe</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg px-1">
              <ul
                class="image-hover-col ps-0 list-unstyled"
                data-bg-image="https://i.sig.gg/f/f2rn/f.jpe"
              >
                <li class="py-1">
                  <strong
                    ><a
                      class="menu-category-title text-primary"
                      href="/government-coin"
                      >Government
                    </a></strong
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-fbi-coins"
                    ><strong>FBI</strong></a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-us-dod-coins"
                    ><strong>DOD</strong></a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-border-patrol-coins"
                    ><strong>CBP</strong></a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/natural-disaster-coins"
                    ><strong>FEMA</strong></a
                  >
                </li>
              </ul>
              <ul
                class="image-hover-col ps-0 list-unstyled"
                data-bg-image="https://i.sig.gg/f/f2rn/f.jpe"
              >
                <li class="pt-2">
                  <strong
                    ><a
                      class="menu-category-title text-primary"
                      href="/custom-school-coins"
                    >
                      Schools
                    </a></strong
                  >
                </li>
                <li class="pt-2">
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-college-university-coins"
                    ><strong>University</strong></a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#">Reunion</a>
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-graduation-coins"
                    >Graduation</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-sorority-challenge-coins"
                    >Sorority</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-fraternity-coins"
                    >Fraternity</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg px-1">
              <ul
                class="image-hover-col ps-0 list-unstyled"
                data-bg-image="https://i.sig.gg/f/f2rn/f.jpe"
              >
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >Personal
                    </a></strong
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/commemorative-coin"
                    ><strong>Commemorative</strong></a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-club-hobby-challenge-coins"
                    ><strong>Clubs</strong></a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/motorcycle-challenge-coins"
                    >Motorcycle</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#">Fitness</a>
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/nonprofit-challenge-coins"
                    >Charities</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/between-the-pages-challenge-coins"
                    >Camping</a
                  >
                </li>
              </ul>
              <ul
                class="image-hover-col ps-0 list-unstyled"
                data-bg-image="https://i.sig.gg/f/f2rn/f.jpe"
              >
                <li class="pt-2"><strong>Hobbies</strong></li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/entertainment-challenge-coin"
                    >Entertainment</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-video-game-coins"
                    >Video Gaming</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/cast-and-crew-challenge-coins"
                    >Film</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/wedding-coins"
                    ><strong>Wedding</strong></a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-religious-challenge-coins"
                    ><strong>Religious</strong></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg px-1">
              <ul
                class="image-hover-col ps-0 list-unstyled"
                data-bg-image="https://i.sig.gg/f/f4co/f.jpe"
              >
                <li class="py-1">
                  <strong class="menu-category-title text-primary"
                    >Business</strong
                  >
                </li>
                <li class="py-1">
                  <a
                    href="/fortune-500-challenge-coins"
                    class="py-0 px-0 dropdown-item"
                    ><strong>Fortune 500</strong></a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-company-coin"
                    >Corporate</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/google-coins"
                    >Tech Companies</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-employee-recognition-coins"
                    >Employee Appreciation</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/safety-coins"
                    >Safety</a
                  >
                </li>
                <li class="pt-2">
                  <strong
                    ><a
                      href="/challenge-coins-and-small-businesses"
                      class="py-0 px-0 dropdown-item"
                      >Small Business</a
                    ></strong
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-challenge-coins-commemorating-your-important-milestone"
                    >Milestones</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/fundraising-ideas-for-nonprofits-using-challenge-coins"
                    >Fund Raising</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg px-1">
              <ul
                class="image-hover-col ps-0 list-unstyled"
                data-bg-image="https://i.sig.gg/f/f30y/f.jpe"
              >
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >First Responder
                    </a></strong
                  >
                </li>
                <li class="py-1"><strong>Law Enforcement</strong></li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-police-coin"
                    >Police</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/sheriff-challenge-coins"
                    >Sheriff</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/swat-challenge-coins"
                    >SWAT</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/government-coin"
                    >Federal</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-nypd-challenge-coins"
                    >N.Y.P.D. Coins</a
                  >
                </li>
                <li class="pt-2">
                  <a class="py-0 px-0 dropdown-item" href="/firefighter-coin"
                    ><strong>Firefighter</strong></a
                  >
                </li>
                <li class="pt-2">
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-ems-challenge-coins"
                    ><strong>EMS</strong></a
                  >
                </li>
              </ul>
            </div>
          </div></b-card-text
        >
      </b-tab>
      <b-tab title="Coins by Features">
        <b-card-text>
          <div class="row mx-0 pb-4">
            <div class="col-12 col-lg">
              <ul class="ps-3 list-unstyled">
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >Shape</a
                    ></strong
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/round-challenge-coin"
                    >Circular</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-shape-coin"
                    >Custom Shape</a
                  >
                </li>
                <li class="pt-3 text-primary"><strong>Molds</strong></li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/3d-vs-2d-challenge-coin"
                    >2D</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-3D-challenge-coin"
                    >3D</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg">
              <ul class="ps-3 list-unstyled">
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >Enamel Colors</a
                    ></strong
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/support/production/whats-the-difference-between-cloisonne-die-struck-and-standard-soft-enamel"
                    >No Color</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/pantone-color-challenge-coins"
                    >Full Color</a
                  >
                </li>
                <li class="pt-3"><strong>Upgraded Colors</strong></li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/translucent-color-challenge-coins"
                    >Translucent</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/glitter-enamel-vs-translucent-enamel"
                    >Glitter</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/drawing-out-the-dark-side-with-black-enamel"
                    >Matte Black</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/shedding-some-light-on-glow-in-the-dark-challenge-coins"
                    >Glow in the Dark</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg">
              <ul class="ps-3 list-unstyled">
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >Plating</a
                    ></strong
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#"
                    >High Polish Silver</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#"
                    >High Polish Gold</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#"
                    >High Polish Copper</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#">Antique Silver</a>
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#">Antique Gold</a>
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#">Antique Copper</a>
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="#">Dual Plating</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg">
              <ul class="ps-3 list-unstyled">
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >Edge</a
                    ></strong
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/support/design/what-coin-edges-can-i-select-for-my-custom-challenge-coin"
                    >Standard Edges</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/not-so-flat-edge"
                    >Custom Edges</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg">
              <ul class="ps-3 list-unstyled">
                <li class="py-1">
                  <strong
                    ><a class="menu-category-title text-primary" href="#"
                      >Extra Coin Uses</a
                    ></strong
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-bottle-opener"
                    >Bottle Openers</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/custom-spinner-coin"
                    >Spinners</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/multi-tool"
                    >Multi-Tool</a
                  >
                </li>
                <li>
                  <a class="py-0 px-0 dropdown-item" href="/large-coins"
                    >Oversized</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-golf-ball-marker"
                    >Golf Ball Markers</a
                  >
                </li>
                <li>
                  <a
                    class="py-0 px-0 dropdown-item"
                    href="/custom-challenge-coin-uses"
                    >Other</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </b-card-text>
      </b-tab>
      <b-tab title="Stock Coins">
        <b-card-text>
          <div class="row mx-0">
            <div class="col-12 col-lg-4 text-center py-3">
              <h5 class="text-primary">Stock Coins</h5>
              <a
                class="text-dark"
                href="/covid-19-fundraiser-coin"
                title="Our Nation Recovers 2020 COVID-19 Stock Challenge Coin"
              >
                <picture>
                  <!--[if IE 9]>
                           <video style=display:none>
                              <![endif]-->
                  <source
                    srcset="
                      https://i.sig.gg/f/d8nl/h.webp,
                      https://i.sig.gg/f/d8nl/i.webp 2x
                    "
                    type="image/webp"
                  />
                  <!--[if IE 9]>
                           </video>
                           <!
                  [endif]--><img
                    src="https://i.sig.gg/f/d8nl/f.png"
                    title="/covid-19-fundraiser-coin"
                    alt="/covid-19-fundraiser-coin"
                    width="768"
                    height="391"
                    class="img-fluid"
                    style="max-width: 240px"
                    srcset="
                      https://i.sig.gg/f/d8nl/f.png,
                      https://i.sig.gg/f/d8nl/g.png 2x
                    "
                  />
                </picture>
                <h6>
                  Our Nation Recovers 2020<br />
                  COVID-19 Stock Challenge Coin
                </h6>
              </a>
            </div>
            <div class="col-12 col-lg-8 text-center py-3 border-start">
              <h5 class="text-primary mb-0">Personalizeable Coins</h5>
              <div class="row mx-0 w-100">
                <div class="col-12 col-lg-4">
                  <a
                    class="text-dark"
                    href="/personalized-ems-week-coins"
                    title="EMS Challenge Coin - Celebrating EMS Week"
                  >
                    <picture>
                      <!--[if IE 9]>
                                 <video style=display:none>
                                    <![endif]-->
                      <source
                        srcset="
                          https://i.sig.gg/f/f24k/h.webp,
                          https://i.sig.gg/f/f24k/i.webp 2x
                        "
                        type="image/webp"
                      />
                      <!--[if IE 9]>
                                 </video>
                                 <!
                      [endif]--><img
                        src="https://i.sig.gg/f/f24k/f.png"
                        title="personalize-ems-challenge-coin"
                        alt="personalize-ems-challenge-coin"
                        width="125"
                        height="125"
                        class="img-fluid"
                        srcset="
                          https://i.sig.gg/f/f24k/f.png,
                          https://i.sig.gg/f/f24k/g.png 2x
                        "
                      />
                    </picture>
                    <h6 class="d-block">
                      EMS Challenge Coin<br />Celebrating EMS Week
                    </h6>
                  </a>
                </div>
                <div class="col-12 col-lg-4">
                  <a
                    class="text-dark"
                    href="/personalized-ems-week-coins"
                    title="EMS Challenge Coin - Celebrating EMS Week"
                  >
                    <picture>
                      <!--[if IE 9]>
                                 <video style=display:none>
                                    <![endif]-->
                      <source
                        srcset="
                          https://i.sig.gg/f/f1w4/h.webp,
                          https://i.sig.gg/f/f1w4/i.webp 2x
                        "
                        type="image/webp"
                      />
                      <!--[if IE 9]>
                                 </video>
                                 <!
                      [endif]--><img
                        src="https://i.sig.gg/f/f1w4/f.png"
                        title="personalize-covid"
                        alt="personalize-covid"
                        width="125"
                        height="125"
                        class="img-fluid"
                        srcset="
                          https://i.sig.gg/f/f1w4/f.png,
                          https://i.sig.gg/f/f1w4/g.png 2x
                        "
                      />
                    </picture>
                    <h6 class="d-block">
                      Personalizeable COVID-19<br />Challenge Coin
                    </h6>
                  </a>
                </div>
                <div class="col-12 col-lg-4">
                  <a
                    class="text-dark"
                    href="/personalized-ems-week-coins"
                    title="EMS Challenge Coin - Celebrating EMS Week"
                  >
                    <picture>
                      <!--[if IE 9]>
                                 <video style=display:none>
                                    <![endif]-->
                      <source
                        srcset="
                          https://i.sig.gg/f/f1y4/h.webp,
                          https://i.sig.gg/f/f1y4/i.webp 2x
                        "
                        type="image/webp"
                      />
                      <!--[if IE 9]>
                                 </video>
                                 <!
                      [endif]--><img
                        src="https://i.sig.gg/f/f1y4/f.png"
                        title="police-coin"
                        alt="police-coin"
                        width="124"
                        height="115"
                        class="img-fluid pt-2"
                        srcset="
                          https://i.sig.gg/f/f1y4/f.png,
                          https://i.sig.gg/f/f1y4/g.png 2x
                        "
                      />
                    </picture>
                    <h6 class="d-block">
                      Personalize Police<br />Challenge Coin
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {}
</script>
<style>
#product-megamenu .nav-pills li a {
  margin: 8px 0;
}
a.py-0.px-0.dropdown-item {
  font-size: 14px;
  padding-bottom: 6px !important;
}
</style>
