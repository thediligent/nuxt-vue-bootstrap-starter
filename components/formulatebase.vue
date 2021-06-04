<template>
  <div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens specimens--text">
          <h2>Box classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Single Checkbox</h3>
        <FormulateInput
          type="checkbox"
          label="Are you attractive?"
          help="In your own opinion at least."
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Multi checkbox</h3>
        <FormulateInput
          type="checkbox"
          label="Which recent U.S. president is your favorite?"
          :options="{
            trump: 'Trump',
            obama: 'Obama',
            bush: 'Bush',
            clinton: 'Clinton',
          }"
          help="Your selection will be transmitted directly to the NSA."
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Radio</h3>
        <FormulateInput
          type="radio"
          label="What heavily body would you like to visit?"
          :options="{
            moon: 'Moon',
            mars: 'Mars',
            venus: 'Venus',
            mercury: 'Mercury',
            sun: 'Sun',
          }"
        />
      </div>
    </div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens">
          <h2>Button classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Button</h3>
        <FormulateInput label="Click me" class="f-btn-primary" type="button" />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Submit</h3>
        <FormulateInput
          label="Submit me"
          class="f-btn-secondary"
          type="submit"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Loader</h3>
        <FormulateInput type="button" disabled>
          Loading
          <span
            class="spinner-border spinner-border-sm text-white ml-2 ms-2"
            role="status"
            aria-hidden="true"
          ></span>
        </FormulateInput>
      </div>
    </div>
    <div class="row pt-1 pb-3 border">
      <div class="col-12">
        <div class="specimens specimens--text">
          <h2>File classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Single File</h3>
        <FormulateInput
          label="Upload a file"
          type="file"
          :outer-class="['file-input-1']"
          help="Select any file to upload"
          :uploader="uploadToS3"
          upload-url="https://cq2cm6d0h6.execute-api.us-east-1.amazonaws.com/signature"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Multiple Files</h3>
        <FormulateInput
          :multiple="true"
          label="Upload a file"
          name="file"
          type="file"
          :outer-class="['file-input-2']"
          :value="[{ url: 'apple.pdf' }]"
          help="Select any file to upload"
          validation="mime:application/pdf"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Image</h3>
        <FormulateInput
          label="What do you look like?"
          type="image"
          help="Select a picture to upload."
          multiple
        />
      </div>
    </div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens specimens--group">
          <h2>Group classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Non-repeatable group</h3>
        <FormulateInput type="group">
          <FormulateInput label="City" type="text" name="city" />
          <FormulateInput
            label="State"
            type="select"
            :options="{ NE: 'Nebraska', MO: 'Missouri', VA: 'Virginia' }"
            placeholder="Select a state"
          />
        </FormulateInput>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Simple repeatable group</h3>
        <FormulateInput type="group" name="foobar" :repeatable="true">
          <div class="wrap">
            <FormulateInput type="text" name="name" />
          </div>
        </FormulateInput>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Repeatable group</h3>
        <FormulateInput
          name="users"
          label="Invite some new users"
          type="group"
          placeholder="users"
          help="Fields can be grouped"
          :repeatable="true"
          minimum="3"
          :value="[{ name: 'Justin' }, { name: 'Bob' }]"
          add-label="Add new user"
          remove-label="Remove user"
        >
          <FormulateInput
            label="First and last name"
            name="name"
            type="text"
            placeholder="User’s name"
            validation="required"
          />
          <FormulateInput
            name="email"
            label="Email address"
            type="email"
            placeholder="User’s email"
            validation="required|email"
          />
        </FormulateInput>
      </div>
    </div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens specimens--text">
          <h2>Text classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Color</h3>
        <FormulateInput
          label="Pick a color?"
          type="color"
          help="Choose your favorite."
          validation="required|between:0,10"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Date</h3>
        <FormulateInput
          label="Select a day."
          type="date"
          help="Choose your birthday."
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Datetime-local</h3>
        <FormulateInput
          label="Select a day and time."
          type="datetime-local"
          help="When is the meeting?"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Email</h3>
        <FormulateInput
          label="What is your email?"
          type="email"
          placeholder="placeholder@example.com"
          help="What is your email address?"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Month</h3>
        <FormulateInput
          label="Favorite month"
          type="month"
          help="When is Christmas?"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Number</h3>
        <FormulateInput
          label="How old are you?"
          type="number"
          placeholder="25"
          help="Select your age"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Password</h3>
        <FormulateInput
          label="Enter a password."
          type="password"
          help="Choose something long and tricky."
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Search</h3>
        <FormulateInput
          label="But I still haven't found."
          type="search"
          placeholder="What im looking for..."
          help="I have climbed the highest mountains."
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Tel</h3>
        <FormulateInput
          label="Oh you like Mike & Ikes?"
          type="tel"
          placeholder="Can I have you number..."
          help="Can I have it?"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Time</h3>
        <FormulateInput
          label="What time is dinner?"
          type="time"
          placeholder="Pick a time"
          help="When will you eat your food?"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Text</h3>
        <FormulateInput
          label="Username"
          type="text"
          placeholder="Username"
          help="Select a username"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Url</h3>
        <FormulateInput
          label="Personal website"
          type="url"
          placeholder="https://"
          help="What is the url for your website?"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Week</h3>
        <FormulateInput
          label="I don’t know who would use this field."
          type="week"
          placeholder="Pick a week"
          help="What week is it?"
        />
      </div>
    </div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens specimens--text">
          <h2>Select classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Select</h3>
        <FormulateInput
          label="What planet is the hottest?"
          type="select"
          :options="{
            mercury: 'Mercury',
            venus: 'Venus',
            earth: 'Earth',
            mars: 'Mars',
          }"
          help="Average temperature on the surface of the planet."
        />
        <FormulateInput
          label="Who makes the best rockets?"
          type="select"
          :options="[
            'SpaceX',
            'United Launch Alliance',
            'Avio',
            'Aerojet Rocketdyne',
            'Russians',
          ]"
          help="Select your favorite"
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Select with placeholder</h3>
        <FormulateInput
          label="What planet is the hottest?"
          type="select"
          placeholder="Select a planet"
          :options="{
            mercury: 'Mercury',
            venus: 'Venus',
            earth: 'Earth',
            mars: 'Mars',
          }"
          help="Average temperature on the surface of the planet."
        />
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Select with multiple attribute</h3>
        <FormulateInput
          label="When visiting a hot planet what are your favorite icecream flavors?"
          type="select"
          multiple
          size="3"
          :options="{
            vanilla: 'Vanilla',
            chocolate: 'Chocolate',
            cherry: 'Cherry',
            lemon: 'Lemon',
          }"
          help="You can choose more than one selection by holding command (mac) or option (windows)."
        />
      </div>
    </div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens specimens--text">
          <h2>Slider classification</h2>
        </div>
      </div>
      <div class="specimen col-12 col-md-6 col-lg-4">
        <h3>Range</h3>
        <FormulateInput
          label="How far should we crank it up?"
          type="range"
          min="0"
          max="11"
          :show-value="true"
          help="Whenever we’re allowed to have a party again..."
        />
      </div>
    </div>
    <div class="row pt-1 pb-3 border my-3">
      <div class="col-12">
        <div class="specimens specimens--text">
          <h2>Textarea classification</h2>
        </div>
      </div>
      <div class="specimen specimen--single col-12 col-md-6 col-lg-4">
        <h3>Textarea</h3>
        <FormulateInput
          label="What is your life story?"
          type="textarea"
          help="I want to hear all about it!"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async uploadToS3(file, progress, error, options) {
      const matches = file.name.match(/\.([a-zA-Z0-9]+)$/)
      const extension = matches ? matches[1] : 'txt'
      progress(5)
      const response = await fetch(options.uploadUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          extension,
          mime: file.type || 'application/octet-stream',
        }),
      })
      if (response.ok) {
        const { uploadUrl } = await response.json()
        progress(10)
        const xhr = new XMLHttpRequest()
        xhr.open('PUT', uploadUrl)
        xhr.upload.addEventListener('progress', (e) =>
          progress(Math.round((e.loaded / e.total) * 90) + 10)
        )
        xhr.setRequestHeader('Content-Type', 'application/octet-stream')
        try {
          await new Promise((resolve, reject) => {
            xhr.onload = (e) =>
              xhr.status - 200 < 100
                ? resolve()
                : reject(new Error('Failed to upload'))
            xhr.onerror = (e) => reject(new Error('Failed to upload'))
            xhr.send(file)
          })
          progress(100)
          const url = new URL(uploadUrl)
          return {
            url: `${url.protocol}//${url.host}${url.pathname}`,
            name: file.name,
          }
        } catch {
          // we'll suppress this since we have a catch all error
        }
      }
      // Catch all error
      error('There was an error uploading your file.')
    },
  },
}
</script>
<style>
.specimens .row {
  margin-top: 0.25em;
  margin-bottom: 1.5em;
}
.specimens h2 {
  color: #00b7ae !important;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}
.specimens h3 {
  margin-top: 0.85em;
  margin-bottom: 0.45em;
}
</style>
