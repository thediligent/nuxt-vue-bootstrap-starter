<template>
  <div>
    <megamenu />
    <div class="page-wrapper d-block w-100 bg-light">
      <div class="page-inner">
        <div id="left-sidebar" class="bg-dark page-sidebar h-100">
          <leftsidebar />
        </div>
        <div class="overlay"></div>
        <div
          id="content-container"
          class="container-fluid bg-light px-0 d-block pt-4"
        >
          <Nuxt />
          <sitefooter />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
