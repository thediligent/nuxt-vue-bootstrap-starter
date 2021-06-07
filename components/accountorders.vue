<template>
  <div>
    <div class="row p-2">
      <div class="col-12 col-md-8">
        <h3 class="text-muted mb-3">Previous Orders</h3>
      </div>
      <div class="col-12 col-md-4">
        <b-form-input
          id="input-small"
          size="sm"
          placeholder="Search Orders"
        ></b-form-input>
      </div>
    </div>
    <div class="row p-2">
      <hr />
      <h4 class="h5 text-muted text-right pt-2 px-3">June 2021</h4>
      <ul class="timeline">
        <li class="timeline-item bg-white rounded shadow">
          <div class="timeline-arrow"></div>
          <div class="row p-0 m-0">
            <div class="col-md-8 d-inline-block p-3">
              <h3 class="my-1 text-primary">Project Name</h3>
              <h6 class="my-1"><em>Signature Coins</em></h6>
              <p class="small text-muted py-1">
                <i class="mr-1"></i>6/1/21 5:58pm
              </p>
              <p class="text-small mt-2 font-weight-light">
                Scott Poteet placed a $10,000.00 order for 2,500 challenge coins
              </p>
            </div>
            <div class="col-md-4 d-inline-block ml-auto text-right p-3">
              <div class="">
                <b-link class="" href="#"
                  >Order #604729
                  <i class="icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      /></svg
                  ></i>
                </b-link>
                <br />
                <b-link class="my-2" href="#"
                  >View Invoice
                  <i class="icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      /></svg
                  ></i> </b-link
                ><br />
                <b-button variant="outline-secondary my-2">Re-Order </b-button>
              </div>
            </div>
          </div>
          <div class="flex px-3"></div>
          <b-tabs class="nav flex-row nav-pills-underline" content-class="p-3">
            <b-tab title="Artwork">
              <div class="col-12">
                <img
                  class="d-inline pr-2"
                  src="https://d159l1kvshziji.cloudfront.net/f/kber/thumb.png"
                />
                <img
                  class="d-inline pr-2"
                  src="https://d159l1kvshziji.cloudfront.net/f/keaq/thumb.png"
                />
                <img
                  class="d-inline pr-2"
                  src="https://d159l1kvshziji.cloudfront.net/f/kc14/thumb.png"
                />
                <img
                  class="d-inline pr-2"
                  src="https://d159l1kvshziji.cloudfront.net/f/kc14/thumb.png"
                />
              </div>
            </b-tab>
            <b-tab title="Details">
              <div class="col-12">
                <div
                  class="helen-quote-serial-number"
                  style="padding-bottom: 1rem"
                >
                  <span>Serial Number:</span> <span>06012021-58</span>
                </div>
                <table class="table table-responsive table-hover w-100">
                  <thead>
                    <tr
                      style="
                        vertical-align: bottom;
                        border-bottom: 2px solid #ddd;
                      "
                    >
                      <th class="text-left">Proofs 1, 1, 2, &amp; 3</th>
                      <th style="text-align: right">Quantity</th>
                      <th style="text-align: right">Unit Price</th>
                      <!--<th style="text-align:right;">Subtotal</th>-->
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>2" Color On Both Sides Challenge Coin</b>
                      </td>
                      <td style="text-align: right">1,000</td>
                      <td style="text-align: right">$3.82</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Edge: <b>Standard</b></td>
                      <td style="text-align: right">1,000</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Mold Fee: <b>New One-Sided Mold</b>
                      </td>
                      <td style="text-align: right">2</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Packaging: <b>Plastic Coin Envelope</b>
                      </td>
                      <td style="text-align: right">1,000</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Plating: <b>Silver</b></td>
                      <td style="text-align: right">1,000</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>2" Color On Both Sides Challenge Coin</b>
                      </td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$3.82</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Edge: <b>Standard</b></td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Mold Fee: <b>New One-Sided Mold</b>
                      </td>
                      <td style="text-align: right">2</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        3D Setup Fee: <b>3D Mold on Both Sides</b>
                      </td>
                      <td style="text-align: right">1</td>
                      <td style="text-align: right">$150.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Packaging: <b>Plastic Coin Envelope</b>
                      </td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Plating: <b>Silver</b></td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>2" Color On Both Sides Challenge Coin</b>
                      </td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$3.82</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Edge: <b>Standard</b></td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Mold Fee: <b>New One-Sided Mold</b>
                      </td>
                      <td style="text-align: right">2</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        3D Setup Fee: <b>3D Mold on Both Sides</b>
                      </td>
                      <td style="text-align: right">1</td>
                      <td style="text-align: right">$150.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Packaging: <b>Plastic Coin Envelope</b>
                      </td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Plating: <b>Silver</b></td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>2" Color On Both Sides Challenge Coin</b>
                      </td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$3.82</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Edge: <b>Standard</b></td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Mold Fee: <b>New One-Sided Mold</b>
                      </td>
                      <td style="text-align: right">2</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        3D Setup Fee: <b>3D Mold on Both Sides</b>
                      </td>
                      <td style="text-align: right">1</td>
                      <td style="text-align: right">$150.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">
                        Packaging: <b>Plastic Coin Envelope</b>
                      </td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr>
                      <td style="padding-left: 30px">Plating: <b>Silver</b></td>
                      <td style="text-align: right">500</td>
                      <td style="text-align: right">$0.00</td>
                    </tr>
                    <tr style="vertical-align: top; border-top: 2px solid #ddd">
                      <td>&nbsp;</td>
                      <td style="text-align: right"><b>Total</b></td>
                      <td style="text-align: right">
                        <strong>$10,000.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Shipping" lazy
              ><div class="row">
                <div class="d-flex col-12 col-md-6">
                  <div
                    class="order-payment-option-address flex-grow-1"
                    style="word-break: break-all"
                  >
                    <address class="mb-0">
                      Scott Poteet c/o Tina Williams<br />
                      Inspiration4<br />
                      2202 N Irving St<br />
                      Allentown PA 18109<br />
                      United States of America<br /><a
                        href="tel:+1-603-502-1924"
                        >(603) 502-1924</a
                      ><br /><a href="#">kidd@inspiration4.com</a>
                    </address>
                    <div
                      class="ml-auto text-right flex-shrink-1"
                      style="min-width: 2rem"
                    >
                      <a class="edit" href="#"><i class="fa fa-pencil"></i></a>
                      <a class="delete" href="#"><i class="fa fa-trash"></i></a>
                    </div>
                  </div>
                  <div>
                    <a href="#" class="order-payment-option-edit-link">
                      <i class="fa fa-pencil"></i>
                    </a>
                  </div>
                </div></div
            ></b-tab>
            <b-tab title="Payment" lazy
              ><div class="row">
                <div class="d-flex col-12 col-md-6 pr-05">
                  <div
                    class="order-payment-option-address flex-grow-1"
                    style="word-break: break-all"
                  >
                    Scott Poteet<br />
                    Shift4<br />
                    26 Winding Brook Drive<br />
                    Stratham, NH 03885<br />
                    United States<br /><a
                      href="tel:+1-603-502-1924"
                      class="never-disabled"
                      >(603) 502-1924</a
                    ><br /><a
                      href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=kidd%40inspiration4.com&amp;name=Scott+Poteet"
                      target="_blank"
                      class="never-disabled"
                      >kidd@inspiration4.com</a
                    >
                  </div>
                </div>
                <div class="d-flex col-12 col-md-6 pr-05">
                  <div class="flex-grow-1">
                    <div class="row pt-3">
                      <div class="col-4"><b>Amount</b></div>
                      <div class="col-8">
                        <p class="small text-muted">$10,000.00</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-4"><b>Paid Date</b></div>
                      <div class="col-8">
                        <p class="small text-muted">6/1/21</p>
                      </div>
                    </div>
                    <div class="row" data-payment-option-type-credit="">
                      <div class="col-4"><b>Card #</b></div>
                      <div class="col-8 order-payment-credit-card-number">
                        *********2032
                      </div>
                    </div>
                    <div class="row" data-payment-option-type-credit="">
                      <div class="col-4"><b>Exp.</b></div>
                      <div
                        class="col-8 order-payment-credit-card-expiration-date"
                      >
                        02/26
                      </div>
                    </div>
                    <div class="row d-none" data-payment-option-type-paypal="">
                      <div class="col-12">
                        <i class="fa fa-paypal" aria-hidden="true"></i> PayPal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </li>
      </ul>
      <div class="text-center py-3">
        <p class="text-primary">Load More</p>
        <b-spinner
          class="my-1"
          small
          variant="primary"
          label="Text Centered"
        ></b-spinner>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
ul.timeline {
  list-style-type: none;
  padding-left: 0px;
}
li.timeline-item {
  margin: 0px;
}
@media only screen and (min-width: 769px) {
  /* Timeline holder */
  ul.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 1.8rem;
  }
  /* Timeline vertical line */
  ul.timeline:before {
    content: ' ';
    background: #bdbdbd52;
    display: inline-block;
    position: absolute;
    left: 16px;
    width: 4px;
    height: 100%;
    z-index: 400;
    border-radius: 1rem;
  }
  /* Timeline item circle marker */
  li.timeline-item::before {
    content: ' ';
    background: #00b7ae;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #fff;
    left: 11px;
    width: 14px;
    height: 14px;
    z-index: 400;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  /* Timeline item arrow */
  .timeline-arrow {
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid #fff;
    border-bottom: 0.5rem solid transparent;
    display: block;
    position: absolute;
    left: 2.2rem;
  }
  li.timeline-item {
    margin: 20px 14px !important;
  }
  .nav-tabs li.nav-item {
    min-width: 5em;
  }
  .table > :not(caption) > * > * {
    font-size: 14px;
    padding: 6px 4px;
  }
  .tabs.nav.flex-row.nav-pills-underline {
    width: 100%;
  }
}
</style>
