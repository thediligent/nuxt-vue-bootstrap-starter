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
          type: 'email',
          name: 'email',
          placeholder: 'Email address',
          validation: 'required',
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          validation: 'required',
        },
        {
          type: 'submit',
          class: 'f-btn-primary',
          label: 'Login',
        },
      ],
    }
  },
}
</script>
