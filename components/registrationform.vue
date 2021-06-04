<template>
  <FormulateForm v-model="values" :schema="schema" />
</template>

<script>
export default {
  data() {
    return {
      values: {},
      schema: [
        {
          type: 'text',
          name: 'First Name',
          placeholder: 'First Name',
          validation: 'required',
        },
        {
          type: 'text',
          name: 'Last Name',
          placeholder: 'Last Name',
        },
        {
          type: 'text',
          name: 'company',
          placeholder: 'Company, Team Name, etc...',
        },
        {
          type: 'tel',
          name: 'phone',
          placeholder: '201-555-0123',
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'Email address',
          validation: 'required',
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          validation: 'required|confirm',
          validationname: 'Password confirmation',
        },
        {
          type: 'submit',
          class: 'f-btn-primary',
          label: 'Join',
        },
      ],
    }
  },
}
</script>
