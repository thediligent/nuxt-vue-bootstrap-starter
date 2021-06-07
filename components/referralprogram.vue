<template>
  <div>
    <b-card
      id="referralcard"
      bg-variant="dark"
      text-variant="white"
      title="3 Easy Ways to Earn Referral Credits"
      class="mt-1 mb-3 rounded"
    >
      <b-card-text class="pb-3">
        💵 Give your friends a $50 credit and have $50 added to your account
        when they buy.
      </b-card-text>
      <div class="pb-2">
        <b-tabs content-class="p-3 bg-white">
          <b-tab title="Share Referral Link" active>
            <b-form-input
              v-model="text"
              placeholder="https://signaturecompany.com/?promo=Stormy2020"
            ></b-form-input>
            <div class="pt-3 text-right">
              <b-button variant="outline-primary">Copy Link</b-button>
              <b-button variant="outline-primary"
                >Share
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="text-primary opacity-40"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  ></path></svg
              ></b-button>
              <b-button variant="primary"
                >Share<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="ml-1 text-white opacity-40"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                  /></svg
              ></b-button>
            </div>
          </b-tab>
          <b-tab title="Email">
            <div class="row">
              <div class="col">
                <b-form-input
                  v-model="text"
                  placeholder="friend@emailaddress.com"
                ></b-form-input>
              </div>
              <div class="col">
                <button type="button" class="btn btn-primary">Send</button>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </b-card>
    <div class="card-text">
      <div class="d-flex">
        <h3 class="text-muted pl-2">Company Name - First LastName</h3>
      </div>
      <div class="p-2">
        <a id="customer-phone-link" href="tel:+1-973-960-1471"
          >(973) 960-1471</a
        >
        <span id="customer-phone-email-separator">—</span>
        <a
          id="customer-email-link"
          href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=mgrowick%40gmail.com&amp;name=Stacking+Stormtrooper+-+Matthew+Growick"
          target="_blank"
          >mgrowick@gmail.com</a
        >
        <div class="text-muted small my-2">
          Customer since 2019
          <span id="customer-user-role-option-parent"
            >-
            <span id="customer-user-role-option"> Personal Use/Hobby </span>
          </span>
        </div>
        <div class="pt-3">
          <p>Referral code: <span class="pl-2">Stormy2020</span></p>
          <p>Account balance: <span class="pl-2">$504.00</span></p>
          <p>Redeemed balance: <span class="pl-2">$1,582.00</span></p>
          <p>Referred total: <span class="pl-2">$44,118.63</span></p>
        </div>
        <div id="customer-user-associations-parent">
          <hr />
          <div class="text-muted small" style="margin-bottom: 4px">
            Other accounts
          </div>
          <div class="row" id="customer-other-accounts-parent">
            <div
              class="col-12 mb-075"
              data-user-association-id="11e11313-f9e8-11ea-a834-0acec95b80b0"
            >
              <a href="/customer?id=Fev-39wtdaA">Stacking Stormtrooper</a>
              <a
                href="#"
                class="user-association-delete-link ml-auto text-muted parent-hover-show"
                ><i class="fa fa-trash-o"></i
              ></a>
              <div class="small">
                <a
                  href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=stackingstormtrooper%40gmail.com&amp;name=Stacking+Stormtrooper"
                  target="_blank"
                  >stackingstormtrooper@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="customer-allow-html-alert" class="alert alert-info mt-1 d-none">
        <i class="fa fa-info-circle"></i>
        This customer has HTML emails disabled, and will only receive emails in
        plain text.
      </div>
      <hr />
      <div class="text-muted small pt-05" style="margin-bottom: 4px">
        Referred orders
      </div>
      <div class="pb-05">
        <a href="/orders/559316">
          559316 - National Cyber League - Kaitlyn Bestenheider
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=kaitlyn.bestenheider%40gmail.com&amp;name=National+Cyber+League+-+Kaitlyn+Bestenheider"
            target="_blank"
            >kaitlyn.bestenheider@gmail.com</a
          >
          - <a href="tel:+1-914-222-3420">(914) 222-3420</a>
        </div>
        <div class="small" style="padding-top: 2px">11/25/20 - $1,475.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/559313"> 559313 - Digstock Events, - Peter Sorrell </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=pete%40digstockevents.com&amp;name=Digstock+Events%2C+LLC+-+Peter+Sorrell"
            target="_blank"
            >pete@digstockevents.com</a
          >
          - <a href="tel:+1-518-802-7532">(518) 802-7532</a>
        </div>
        <div class="small" style="padding-top: 2px">11/25/20 - $384.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/559214"> 559214 - The Cliffs - Nicole DiFulio </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=ndifulio%40cliffsliving.com&amp;name=The+Cliffs+-+Nicole+DiFulio"
            target="_blank"
            >ndifulio@cliffsliving.com</a
          >
          - <a href="tel:+1-864-660-1117">(864) 660-1117</a>
        </div>
        <div class="small" style="padding-top: 2px">11/24/20 - $1,390.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/558998"> 558998 - Erik Moon </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=emoon1%40gmail.com&amp;name=Amazon+Web+Services+-+Erik+Moon"
            target="_blank"
            >emoon1@gmail.com</a
          >
          - <a href="tel:+1-206-434-7180">(206) 434-7180</a>
        </div>
        <div class="small" style="padding-top: 2px">11/23/20 - $460.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/557768">
          557768 - Ecommerce Foundation - Jorij Abraham
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=jorij.abraham%40ecommercefoundation.org&amp;name=Ecommerce+Foundation+%28Scamadviser.com%29+-+Jorij+Abraham"
            target="_blank"
            >jorij.abraham@ecommercefoundation.org</a
          >
          - <a href="tel:+31-6-52840039">+31 6 52840039</a>
        </div>
        <div class="small" style="padding-top: 2px">11/18/20 - $452.97</div>
      </div>
      <div class="pb-05">
        <a href="/orders/557099"> 557099 - Joshua Bush </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=joshua.p.bush%40gmail.com&amp;name=Joshua+Bush"
            target="_blank"
            >joshua.p.bush@gmail.com</a
          >
          - <a href="tel:+1-252-808-7177">(252) 808-7177</a>
        </div>
        <div class="small" style="padding-top: 2px">11/16/20 - $460.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/556868"> 556868 - Austin Anthem - Christine Hanley </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=christine.hanley%40austinanthem.org&amp;name=Austin+Anthem+-+Christine+Hanley"
            target="_blank"
            >christine.hanley@austinanthem.org</a
          >
          - <a href="tel:+1-512-217-8941">(512) 217-8941</a>
        </div>
        <div class="small" style="padding-top: 2px">11/13/20 - $1,150.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/555143">
          555143 - TNT Fitness Community LLC - Steven Knuth
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=steven%40tntfr.com&amp;name=TNT+Fitness+and+Sports+Performance+-+Steven+Knuth"
            target="_blank"
            >steven@tntfr.com</a
          >
          - <a href="tel:+1-920-579-6533">(920) 579-6533</a>
        </div>
        <div class="small" style="padding-top: 2px">11/5/20 - $495.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/554411"> 554411 - Timothy Tyler </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=t2002ty%40gmail.com&amp;name=Tim+Tyler"
            target="_blank"
            >t2002ty@gmail.com</a
          >
          - <a href="tel:+1-239-896-7131">(239) 896-7131</a>
        </div>
        <div class="small" style="padding-top: 2px">11/3/20 - $543.15</div>
      </div>
      <div class="pb-05">
        <a href="/orders/553997"> 553997 - Frank bradfield </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=ghostiiisec%40gmail.con&amp;name=Frank+Bradfield"
            target="_blank"
            >ghostiiisec@gmail.con</a
          >
          - <a href="tel:+1-856-625-9100">(856) 625-9100</a>
        </div>
        <div class="small" style="padding-top: 2px">10/30/20 - $1,265.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/553808"> 553808 - Jonathan Gray </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=jgray%40achidta.org&amp;name=DEA+Atlanta+-+HIDTA+Group+3+-+Jonathan+Gray"
            target="_blank"
            >jgray@achidta.org</a
          >
          - <a href="tel:+1-404-569-1016">(404) 569-1016</a>
        </div>
        <div class="small" style="padding-top: 2px">10/30/20 - $1,538.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/553001"> 553001 - NM WIC - Sarah Flores-Sievers </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=sarah.flores-siever%40state.nm.us&amp;name=NM+WIC+-+Sarah+Flores-Sievers"
            target="_blank"
            >sarah.flores-siever@state.nm.us</a
          >
          - <a href="tel:+1-505-690-6466">(505) 690-6466</a>
        </div>
        <div class="small" style="padding-top: 2px">10/27/20 - $472.50</div>
      </div>
      <div class="pb-05">
        <a href="/orders/552656">
          552656 - Le Sueur County Sheriffs Office - Deputy Joe Kern
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=jkern%40co.le-sueur.mn.us&amp;name=Le+Sueur+County+Sheriffs+Office+-+K9+Deputy+Kern+%2F+K9+Jett"
            target="_blank"
            >jkern@co.le-sueur.mn.us</a
          >
          - <a href="tel:+1-507-382-5700">(507) 382-5700</a>
        </div>
        <div class="small" style="padding-top: 2px">10/26/20 - $589.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/551522"> 551522 - Austin Lloyd Craig </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=austincraig16%40gmail.com&amp;name=Austin+Lloyd+Craig"
            target="_blank"
            >austincraig16@gmail.com</a
          >
          - <a href="tel:+1-570-594-6071">(570) 594-6071</a>
        </div>
        <div class="small" style="padding-top: 2px">10/21/20 - $565.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/551228"> 551228 - Adam Page </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=adam.t.page.mil%40mail.mil&amp;name=12106+Harmon+Cir+-+Adam+Page"
            target="_blank"
            >adam.t.page.mil@mail.mil</a
          >
          - <a href="tel:+1-719-646-9991">(719) 646-9991</a>
        </div>
        <div class="small" style="padding-top: 2px">10/20/20 - $629.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/551138">
          551138 - DEA Academy BA 226 - Barrett Smith
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=barrett.m.smith1%40gmail.com&amp;name=Drug+Enforcment+Administration+-+Barrett+Smith"
            target="_blank"
            >barrett.m.smith1@gmail.com</a
          >
          - <a href="tel:+1-214-336-4110">(214) 336-4110</a>
        </div>
        <div class="small" style="padding-top: 2px">10/20/20 - $2,968.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/550733"> 550733 - David Ross </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=djrblackburn%40yahoo.ca&amp;name=David+Ross"
            target="_blank"
            >djrblackburn@yahoo.ca</a
          >
          - <a href="tel:+1-613-565-0557">+1 613-565-0557</a>
        </div>
        <div class="small" style="padding-top: 2px">10/16/20 - $918.94</div>
      </div>
      <div class="pb-05">
        <a href="/orders/550178"> 550178 - Esteban Ramirez </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=srjjpp6%40gmail.com&amp;name=Iwakuni+ATC+-+Esteban+Ramirez"
            target="_blank"
            >srjjpp6@gmail.com</a
          >
          - <a href="tel:+1-315-253-3006">(315) 253-3006</a>
        </div>
        <div class="small" style="padding-top: 2px">10/15/20 - $1,467.61</div>
      </div>
      <div class="pb-05">
        <a href="/orders/549125">
          549125 - Mobile Fire Rescue Department - Barry Glisson
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=glissonb%40cityofmobile.org&amp;name=Mobile+Fire+Rescue+-+Barry+Glisson"
            target="_blank"
            >glissonb@cityofmobile.org</a
          >
          - <a href="tel:+1-251-689-8069">(251) 689-8069</a>
        </div>
        <div class="small" style="padding-top: 2px">10/9/20 - $657.70</div>
      </div>
      <div class="pb-05">
        <a href="/orders/547583"> 547583 - Cyndi Thurman </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=cthurman%40dadesheriff.com&amp;name=Cyndi+Thurman"
            target="_blank"
            >cthurman@dadesheriff.com</a
          >
          - <a href="tel:+1-706-657-3233">(706) 657-3233</a>
        </div>
        <div class="small" style="padding-top: 2px">10/8/20 - $840.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/548867"> 548867 - Donnie Chestnut </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=chestnutdonald%40gmail.com&amp;name=Donnie+Chestnut"
            target="_blank"
            >chestnutdonald@gmail.com</a
          >
          - <a href="tel:+1-843-364-0141">(843) 364-0141</a>
        </div>
        <div class="small" style="padding-top: 2px">10/8/20 - $559.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/548663"> 548663 - Sean Hamp </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=seanhamp%40hotmail.com&amp;name=Sean+Hamp"
            target="_blank"
            >seanhamp@hotmail.com</a
          >
          - <a href="tel:+1-907-854-7081">(907) 854-7081</a>
        </div>
        <div class="small" style="padding-top: 2px">10/8/20 - $1,673.52</div>
      </div>
      <div class="pb-05">
        <a href="/orders/548327"> 548327 - PTSO - Penelope Camp </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=penjor14%40yahoo.com&amp;name=PTSO-+Queen+Creek+Junior+HIgh+-+Penelope+Camp"
            target="_blank"
            >penjor14@yahoo.com</a
          >
          - <a href="tel:+1-410-627-6166">(410) 627-6166</a>
        </div>
        <div class="small" style="padding-top: 2px">10/6/20 - $475.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/547800">
          547800 - Youngsville Town Hall - Ashlie Pippin
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=apippin%40townofyoungsville.org&amp;name=Youngsville+Town+Hall+-+Ashlie+Pippin"
            target="_blank"
            >apippin@townofyoungsville.org</a
          >
          - <a href="tel:+1-919-925-3361">(919) 925-3361</a>
        </div>
        <div class="small" style="padding-top: 2px">10/5/20 - $660.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/547305"> 547305 - Ben Semonella </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=tools5452%40aol.com&amp;name=Ben+Semonella"
            target="_blank"
            >tools5452@aol.com</a
          >
          - <a href="tel:+1-516-424-1956">(516) 424-1956</a>
        </div>
        <div class="small" style="padding-top: 2px">10/1/20 - $1,332.10</div>
      </div>
      <div class="pb-05">
        <a href="/orders/547178"> 547178 - Eric K Fuenfstueck </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=ekf3057%40gmail.com&amp;name=Eric+Fuenfstueck"
            target="_blank"
            >ekf3057@gmail.com</a
          >
          - <a href="tel:+1-585-455-7554">(585) 455-7554</a>
        </div>
        <div class="small" style="padding-top: 2px">9/30/20 - $694.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/547194"> 547194 - theGRIMpocket - Thomas J Grimsal </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=tgrimsal%40yahoo.com&amp;name=theGRIMPocket+-+Thomas+Grimsal"
            target="_blank"
            >tgrimsal@yahoo.com</a
          >
          - <a href="tel:+1-318-792-6299">(318) 792-6299</a>
        </div>
        <div class="small" style="padding-top: 2px">9/30/20 - $415.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/545894">
          545894 - Leon Co Emergency Management - Jim Carrigan
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=jim.carrigan%40co.leon.tx.us&amp;name=LEON+COUNTY+-+Jim+Carrigan"
            target="_blank"
            >jim.carrigan@co.leon.tx.us</a
          >
          - <a href="tel:+1-903-536-4407">(903) 536-4407</a>
        </div>
        <div class="small" style="padding-top: 2px">9/23/20 - $1,394.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/544589"> 544589 - Veterans Jiu-Jitsu - Joey Zente </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=veteransjiujitsu%40gmail.com&amp;name=Veterans+Jiu-Jitsu+-+Joey+Zente"
            target="_blank"
            >veteransjiujitsu@gmail.com</a
          >
          - <a href="tel:+1-512-944-9014">(512) 944-9014</a>
        </div>
        <div class="small" style="padding-top: 2px">9/17/20 - $291.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/544328">
          544328 - Westworth Village PD - Kevin Reaves
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=dallen%40cityofwestworth.com&amp;name=Westworth+Village+PD+-+Dustin+Allen"
            target="_blank"
            >dallen@cityofwestworth.com</a
          >
          - <a href="tel:+1-912-844-3872">(912) 844-3872</a>
        </div>
        <div class="small" style="padding-top: 2px">9/16/20 - $1,678.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/543506"> 543506 - First Reliance Bank - Corey Hall </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=chall%40firstreliance.com&amp;name=First+Reliance+Bank+-+Corey+Hall"
            target="_blank"
            >chall@firstreliance.com</a
          >
          - <a href="tel:+1-843-674-3262">(843) 674-3262</a>
        </div>
        <div class="small" style="padding-top: 2px">9/11/20 - $470.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/542291"> 542291 - Mario Nodarse </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=nodarse2%40yahoo.com&amp;name=Yessenia+Nodarse"
            target="_blank"
            >nodarse2@yahoo.com</a
          >
          - <a href="tel:+1-239-240-7409">(239) 240-7409</a>
        </div>
        <div class="small" style="padding-top: 2px">9/8/20 - $994.81</div>
      </div>
      <div class="pb-05">
        <a href="/orders/541901"> 541901 - David Garsha </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=davidgarsha%40icloud.com&amp;name=David+Garsha"
            target="_blank"
            >davidgarsha@icloud.com</a
          >
          - <a href="tel:+1-916-303-6862">(916) 303-6862</a>
        </div>
        <div class="small" style="padding-top: 2px">9/3/20 - $358.50</div>
      </div>
      <div class="pb-05">
        <a href="/orders/541163"> 541163 - ASPC Yuma - Warehouse </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=mmontes1%40azadc.gov&amp;name=Aspc+Yuma+-+Warehouse"
            target="_blank"
            >mmontes1@azadc.gov</a
          >
          - <a href="tel:+1-928-627-8871">(928) 627-8871</a>
        </div>
        <div class="small" style="padding-top: 2px">9/1/20 - $1,318.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/540650"> 540650 - Mark Curato </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/3ba6db05f4d113ea/new-ticket/?email=markandlauren1886%40gmail.com&amp;name=Mark+Curato"
            target="_blank"
            >markandlauren1886@gmail.com</a
          >
          - <a href="tel:+1-202-236-5334">(202) 236-5334</a>
        </div>
        <div class="small" style="padding-top: 2px">8/31/20 - $373.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/540551"> 540551 - Joe Kern </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=kernbrothers.dj%40gmail.com&amp;name=Joe+Kern"
            target="_blank"
            >kernbrothers.dj@gmail.com</a
          >
          - <a href="tel:+1-507-382-5700">(507) 382-5700</a>
        </div>
        <div class="small" style="padding-top: 2px">8/28/20 - $495.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/539852"> 539852 - Brooke Schmitt </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=brookeschmitt85%40gmail.com&amp;name=Brooke+Schmitt"
            target="_blank"
            >brookeschmitt85@gmail.com</a
          >
          - <a href="tel:+1-334-332-3220">(334) 332-3220</a>
        </div>
        <div class="small" style="padding-top: 2px">8/26/20 - $495.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/539363"> 539363 - Joshua Bautz </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=joshua.bautz%40gmail.com&amp;name=Joshua+Bautz"
            target="_blank"
            >joshua.bautz@gmail.com</a
          >
          - <a href="tel:+1-808-298-6271">(808) 298-6271</a>
        </div>
        <div class="small" style="padding-top: 2px">8/24/20 - $1,247.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/537908"> 537908 - Grant Rowlett </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=cgrowlett%40gmail.com&amp;name=Grant+Rowlett"
            target="_blank"
            >cgrowlett@gmail.com</a
          >
          - <a href="tel:+1-615-631-9079">(615) 631-9079</a>
        </div>
        <div class="small" style="padding-top: 2px">8/17/20 - $535.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/537542"> 537542 - Zac Wills </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=zachary.a.wills%40usdoj.gov&amp;name=Zac+Wills"
            target="_blank"
            >zachary.a.wills@usdoj.gov</a
          >
          - <a href="tel:+1-503-686-4425">(503) 686-4425</a>
        </div>
        <div class="small" style="padding-top: 2px">8/13/20 - $1,386.48</div>
      </div>
      <div class="pb-05">
        <a href="/orders/537506"> 537506 - Lucas M DeGand </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=lucasdegand%40hotmail.com&amp;name=Lucas+M+DeGand"
            target="_blank"
            >lucasdegand@hotmail.com</a
          >
          - <a href="tel:+1-619-471-4661">(619) 471-4661</a>
        </div>
        <div class="small" style="padding-top: 2px">8/13/20 - $1,141.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/537608">
          537608 - Oakland FC Leopards - Edward Stephen
        </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=edward.stephen%40oaklandleopards.com&amp;name=Oakland+Leopards+-+Edward+Stephen"
            target="_blank"
            >edward.stephen@oaklandleopards.com</a
          >
          - <a href="tel:+1-925-299-1619">(925) 299-1619</a>
        </div>
        <div class="small" style="padding-top: 2px">8/13/20 - $410.25</div>
      </div>
      <div class="pb-05">
        <a href="/orders/537173"> 537173 - Chenango EVS - Ryan Warner </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=chenangoevs%40gmail.com&amp;name=Chenango+EVS+-+Ryan+Warner"
            target="_blank"
            >chenangoevs@gmail.com</a
          >
          - <a href="tel:+1-607-427-7372">(607) 427-7372</a>
        </div>
        <div class="small" style="padding-top: 2px">8/12/20 - $777.50</div>
      </div>
      <div class="pb-05">
        <a href="/orders/536303"> 536303 - Matt Gillis </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=gillis.matt.377%40gmail.com&amp;name=Matt+Gillis"
            target="_blank"
            >gillis.matt.377@gmail.com</a
          >
          - <a href="tel:+1-250-898-7497">+1 250-898-7497</a>
        </div>
        <div class="small" style="padding-top: 2px">8/7/20 - $414.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/534968"> 534968 - USFOR-A/CJIOC - Sam I Karl </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=samkarl%40gmail.com&amp;name=USFOR-A%2FCJIOC+-+Sam+I+Karl"
            target="_blank"
            >samkarl@gmail.com</a
          >
          - <a href="tel:+1-206-724-5378">(206) 724-5378</a>
        </div>
        <div class="small" style="padding-top: 2px">7/31/20 - $527.08</div>
      </div>
      <div class="pb-05">
        <a href="/orders/532298"> 532298 - Tatiana Velez </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=tativel11%40yahoo.com&amp;name=Tatiana+Velez"
            target="_blank"
            >tativel11@yahoo.com</a
          >
          - <a href="tel:+1-772-812-8355">(772) 812-8355</a>
        </div>
        <div class="small" style="padding-top: 2px">7/20/20 - $614.80</div>
      </div>
      <div class="pb-05">
        <a href="/orders/530402"> 530402 - Richard Reed </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=richard.c.reed46.mil%40mail.mil&amp;name=NYNG+CDTF+-+Rich+Reed"
            target="_blank"
            >richard.c.reed46.mil@mail.mil</a
          >
          - <a href="tel:+1-716-481-7301">(716) 481-7301</a>
        </div>
        <div class="small" style="padding-top: 2px">7/9/20 - $1,540.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/523313"> 523313 - Devin Posey </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=posey397%40gmail.com&amp;name=Devin+Posey"
            target="_blank"
            >posey397@gmail.com</a
          >
          - <a href="tel:+1-224-413-9425">(224) 413-9425</a>
        </div>
        <div class="small" style="padding-top: 2px">6/5/20 - $718.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/521939"> 521939 - Angela Clapsadle </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=angela.clapsadle%40yahoo.com&amp;name=Angela+Clapsadle"
            target="_blank"
            >angela.clapsadle@yahoo.com</a
          >
          - <a href="tel:+1-678-787-7333">(678) 787-7333</a>
        </div>
        <div class="small" style="padding-top: 2px">5/29/20 - $552.72</div>
      </div>
      <div class="pb-05">
        <a href="/orders/521888"> 521888 - Avi Bhavaraju </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=avi.bhavaraju%40gmail.com&amp;name=University+of+Arkansas+for+Medical+Sciences%2C+Department+of+Surgery+-+Avi+Bhavaraju"
            target="_blank"
            >avi.bhavaraju@gmail.com</a
          >
          - <a href="tel:+1-404-668-2696">(404) 668-2696</a>
        </div>
        <div class="small" style="padding-top: 2px">5/29/20 - $904.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/517025"> 517025 - Guyton Robinson </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=lee.robinson2022%40gmail.com&amp;name=Guyton+Robinson"
            target="_blank"
            >lee.robinson2022@gmail.com</a
          >
          - <a href="tel:+1-229-231-0628">(229) 231-0628</a>
        </div>
        <div class="small" style="padding-top: 2px">5/6/20 - $575.00</div>
      </div>
      <div class="pb-05">
        <a href="/orders/478203"> 478203 - Angela Clapsadle </a>
        <div class="small">
          <a
            href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=theladybullion%40gmail.com&amp;name=Angela+Clapsadle"
            target="_blank"
            >theladybullion@gmail.com</a
          >
          - <a href="tel:+1-678-787-7333">(678) 787-7333</a>
        </div>
        <div class="small" style="padding-top: 2px">11/6/19 - $379.00</div>
      </div>
      <hr />
      <div class="text-muted small" style="margin-bottom: 4px">
        Most recent billing
      </div>
      Matthew Growick<br />
      76 Laurel Drive<br />
      Little Silver, NJ 07739<br />
      United States <br /><a href="tel:+1-973-960-1471">(973) 960-1471</a>
      <br /><a
        href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=mgrowick%40gmail.com&amp;name=Matthew+Growick"
        target="_blank"
        >mgrowick@gmail.com</a
      >
      <br />
      Check
      <hr />
      <div class="text-muted small" style="margin-bottom: 4px">
        Most recent shipping
      </div>
      Matthew Growick<br />
      76 Laurel Drive<br />
      Little Silver, NJ 07739<br />
      United States <br /><a href="tel:+1-973-960-1471">(973) 960-1471</a>
      <br /><a
        href="https://secure.helpscout.net/mailbox/7cad925521596cbb/new-ticket/?email=mgrowick%40gmail.com&amp;name=Matthew+Growick"
        target="_blank"
        >mgrowick@gmail.com</a
      >
      <hr />
      <span class="customer-first-name">Matthew</span>
      has spent $1,847.00 on 7 orders, averaging $263.86 per order.<br />
      Latest order placed on 2/23/2021.
      <hr />
      <a
        class="text-muted small"
        style="margin-bottom: 4px"
        href="#"
        id="customer-merge-account-link"
      >
        <i class="fa fa-code-fork" aria-hidden="true"></i>
        Merge customer
      </a>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.tab-content {
  background: #fff !important;
}
#referralcard .nav-tabs .nav-link {
  color: #fff;
}
#referralcard .nav-pills-underline .nav-link:hover {
  color: #fff !important;
}
#referralcard .nav-pills-underline .nav-link:hover {
  color: #fff !important;
  border-bottom: 2px solid #fff;
}
#referralcard .nav-pills-underline .nav-link {
  color: rgba(255, 255, 255, 0.45) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.45) !important;
}
</style>
