<template>
  <div>
    <div class="col-12 p-2">
      <h3 class="text-muted mb-1">FirstName LastName</h3>
      <div class="text-muted mb-2">firstname@emailaddress.com</div>
      <button type="button" class="btn btn-sm btn-primary">Edit Profile</button>
      <button type="button" class="btn btn-sm btn-primary">
        Edit Password
      </button>
      <hr />
      <ul class="list-unstyled">
        <li class="pb-3">Store credit: <b>$0.00</b></li>
        <li class="pb-3">
          Order history:
          <a href="/orders" class="helen-account-orders-link">0 Orders</a>
        </li>
        <li class="pb-3">
          Default shipping address
          <a
            href="/shipping"
            class="btn btn-sm btn-primary ml-2 helen-account-shipping-link"
            >Edit</a
          >
        </li>
        <li class="pb-3">
          Default payment method
          <a
            href="/billing"
            class="btn btn-sm btn-primary ml-2 helen-account-billing-link"
            >Edit</a
          >
        </li>
        <li class="pb-3">
          <a id="" href="#">
            <i class="fa fa-sign-out"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style></style>
