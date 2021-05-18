<template>
  <div id="blog-header" class="product-header position-relative">
    <div
      class="overflow-hidden position-relative"
      style="
        background-image: url('https://i.sig.gg/i/BmnX/M.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 320px;
      "
    >
      <div id="blogheader" class="container position-relative">
        <div class="row">
          <div class="col-12 py-5 text-center text-md-start">
            <h1 class="text-white">Support</h1>
            <h2 class="p pt-2 pb-0 lead text-white">
              Blogs featuring challenge coin design, news &amp; information
            </h2>
            <div class="row mx-auto pt-3">
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
    <div>
      <div class="p-4">
        <b-card-group columns>
          <b-card
            title="Card title that wraps to a new line"
            img-src="https://placekitten.com/g/400/450"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>

          <b-card header="Quote">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </b-card>

          <b-card
            title="Title"
            img-src="https://placekitten.com/500/350"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>

          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer>
                <small
                  >Someone famous in
                  <cite title="Source Title">Source Title</cite></small
                >
              </footer>
            </blockquote>
          </b-card>

          <b-card>
            <b-card-title>Title</b-card-title>
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>

          <b-card
            img-src="https://picsum.photos/400/400/?image=41"
            img-alt="Image"
            overlay
          ></b-card>

          <b-card
            img-src="https://picsum.photos/400/200/?image=41"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first.
            </b-card-text>
            <template #footer>
              <small class="text-muted">Footer Text</small>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // this.getPosts()
  },
}
</script>
<style>
@media (min-width: 576px) {
  .card-columns {
    -moz-column-count: 2;
    column-count: 2;
    grid-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
}
@media (min-width: 768px) {
  .card-columns {
    -moz-column-count: 3;
    column-count: 3;
    grid-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
}
</style>
