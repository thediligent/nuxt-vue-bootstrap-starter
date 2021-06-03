<template>
  <form class="helen-quote-form p-2">
    <h3>Contact Info</h3>
    <div class="form-group">
      <FormulateInput
        type="email"
        label="Email Address"
        placeholder="Email"
        name="email"
        validation="required|email"
      />
    </div>
    <div class="form-group">
      <FormulateInput
        type="tel"
        label="Phone Number"
        placeholder="Phone Number"
        name="phone"
        help="Enter a valid phone number for SMS."
      />
    </div>
    <div class="form-group">
      <input
        id="name"
        type="text"
        placeholder="Name"
        autocomplete="name"
        required
        class="form-control"
      />
    </div>
    <div class="form-group">
      <input
        id="company"
        type="text"
        placeholder="Company"
        autocomplete="organization"
        class="form-control"
      />
    </div>
    <h3>What kind of product are you looking for?</h3>
    <div class="form-group">
      <select id="line-item" class="form-control" required>
        <option value="">What kind of product are you looking for?</option>
      </select>
    </div>
    <div class="form-group">
      <select id="type" class="form-control" required>
        <option value="">What type?</option>
      </select>
    </div>
    <div class="form-group">
      <select id="size" class="form-control" required>
        <option value="">What Size?</option>
      </select>
    </div>
    <div id="children"></div>
    <h3>Your Design</h3>
    <div class="form-group">
      Have any drawings, logos, or PowerPoints of your design?
      <label id="upload" class="btn btnVelaOne">
        Upload Your Artwork
        <input type="file" hidden multiple />
      </label>
    </div>
    <div class="form-group">
      <label for="quantity">How many do you want?</label>
      <input
        id="quantity"
        type="number"
        placeholder="Quantity"
        class="form-control"
        required
        min="1"
      />
    </div>
    <div class="form-group">
      <label for="project">Have a nickname for this project?</label>
      <input
        id="project"
        type="text"
        placeholder="Nickname (Optional)"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="date">What date do you need these by?</label>
      <b-form-datepicker
        id="date"
        v-model="value"
        class="mb-2"
      ></b-form-datepicker>
    </div>
    <div class="form-group">
      <label for="notes">Have any other questions or requests?</label>
      <textarea
        id="notes"
        type="date"
        placeholder="Notes (Optional)"
        class="form-control"
        rows="4"
      ></textarea>
    </div>
    <div class="form-button">
      <input
        id="submit"
        type="submit"
        class="btn btnVelaOne"
        value="Submit"
        style="width: 100%"
      />
    </div>
  </form>
</template>
<script>
// export default {}
</script>
<style></style>
