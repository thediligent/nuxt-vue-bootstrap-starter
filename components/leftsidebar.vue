<template>
  <div>
    <div style="padding-top: 4.5rem">
      <form
        id="sidebar-search-form"
        action="/search"
        method="GET"
        class="text-white px-4 mb-3 position-relative"
      >
        <input
          type="text"
          class="form-control"
          placeholder="Search Site"
          name="q"
        />
      </form>
      <div id="sidebarMenuAccordion" class="accordion accordion-flush">
        <h2 class="accordion-header no-accordion-header">
          <a class="accordion-button collapsed button fw-normal"> Pricing </a>
        </h2>
        <div class="accordion-item">
          <h2 id="flush-headingOne" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Challenge Coins
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#sidebarMenuAccordion"
          >
            <div class="accordion-body p-0 m-0"></div>
          </div>
        </div>
        <h2 class="accordion-header no-accordion-header">
          <a class="accordion-button collapsed button fw-normal"> Gallery </a>
        </h2>
        <h2 class="accordion-header no-accordion-header">
          <a class="accordion-button collapsed button fw-normal"> Blog </a>
        </h2>
        <div class="accordion-item">
          <h2 id="flush-headingThree" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Support
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#sidebarMenuAccordion"
          >
            <div class="accordion-body"></div>
          </div>
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
  </div>
</template>
<script>
// import { Directus } from '@directus/sdk'
// import axios from "axios"
// const directus = "http://localhost:8055/graphql"
// export default {
//     axios({
//     url: directus,
//     method: "post",
//     data: {
//     query: `
//         {
//             support_item{
//                 title
//             }
//         }
//     `,
//     },
//     }).then((res) => {
//         console.log(res.data.data.allUsers)
//     }).catch((err) => {
//        console.log(err.message)
//     })
//   }
</script>
