<template>
  <div>
    <div class="row p-2">
      <div class="col-12">
        <h3 class="text-muted mb-1">FirstName LastName</h3>
        <div class="text-muted mb-2">firstname@emailaddress.com</div>
        <button type="button" class="btn btn-sm btn-primary">
          Edit Profile
        </button>
        <button type="button" class="btn btn-sm btn-primary">
          Edit Password
        </button>
        <a id="" href="#">
          <i class="fa fa-sign-out"></i>
          Logout
        </a>
        <p>Store credit: <b>$0.00</b></p>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-12">
        <hr />
        <span class="customer-first-name">Matthew</span>
        has spent $1,847.00 on <a href="#">7 orders</a>, averaging $263.86 per
        order.<br />
        Latest order placed on <a href="#">6/03/2021</a>.
        <hr />
      </div>
    </div>
    <div class="row p-2">
      <div class="col-12 col-md-6">
        <h5 class="text-muted">Most recent billing</h5>
        <div class="py-1">
          <p>
            Matthew Growick<br />
            76 Laurel Drive<br />
            Little Silver, NJ 07739<br />
            United States <br /><a href="tel:+1-973-960-1471">(973) 960-1471</a>
            <br /><a
              href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=mgrowick%40gmail.com&amp;name=Matthew+Growick"
              target="_blank"
              >mgrowick@gmail.com</a
            >
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <h5 class="text-muted">Most recent shipping</h5>
        <div class="text-block-load py-2">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="75%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.text-block-load {
  max-width: 16em;
}
</style>
