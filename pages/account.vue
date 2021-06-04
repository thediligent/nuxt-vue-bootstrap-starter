<template>
  <div class="container-fluid px-0 container-lg">
    <div class="mt-4 my-2">
      <div id="main-account-card" class="p-1">
        <h2 class="mb-3">My Account</h2>
        <div v-if="$device.isDesktop">
          <b-card no-body>
            <b-tabs pills card lazy vertical nav-wrapper-class="col-3" class="">
              <b-tab
                class="flex-sm-fill nav-link"
                title="Account Details"
                active
              >
                <accountdetails />
              </b-tab>
              <b-tab title="Projects"
                ><b-card-text>Tab contents 3</b-card-text></b-tab
              >
              <b-tab title="Orders">
                <accountorders />
              </b-tab>
              <b-tab title="Settings"
                ><b-card-text>Tab contents 3</b-card-text></b-tab
              >
            </b-tabs>
          </b-card>
        </div>
        <div v-else>
          <b-card class="p-1" no-body>
            <b-tabs
              content-class="mt-3"
              class="nav flex-row nav-pills-underline"
              lazy
            >
              <b-tab title="Account Details">
                <accountdetails />
              </b-tab>
              <b-tab title="Projects"
                ><b-alert show>I'm lazy mounted too!</b-alert></b-tab
              >
              <b-tab title="Orders"><accountorders /></b-tab>
              <b-tab title="Settings"
                ><b-alert show>I'm lazy mounted too!</b-alert></b-tab
              >
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.nav-pills-underline {
}
.nav-pills-underline .nav-link:hover {
  text-decoration: none;
}
.tab-content {
  width: 100%;
}
</style>
