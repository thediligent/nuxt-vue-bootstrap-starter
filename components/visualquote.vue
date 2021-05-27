<template>
  <div id="quote-container" class="bg-white border rounded p-3">
    <div class="row">
      <div class="col-12 col-lg-9 bg-white pb-3">
        <h2 class="h3 text-primary font-weight-bold">
          What kind of product are you looking for?
        </h2>
        <quotehorizontalsteps />
        <quotevisualproducts />
        <quotecontactform />
      </div>
      <div id="summary-bar" class="col-3 pb-5 px-0 d-none d-md-block">
        <div class="px-3">
          <h2 class="h4">Summary</h2>
          <small>Review your choices and confirm your quote.</small>
        </div>
        <ol id="summary">
          <li class="active">Product</li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
#summary-bar {
  padding-top: 1em;
  background-color: #e9ecef;
  border-left: 1px solid #ccc;
}
</style>
