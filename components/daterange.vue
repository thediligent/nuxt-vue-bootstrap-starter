<template>
  <div>
    <date-picker v-model="time3" range></date-picker>
    <div id="formulate--account-1-help" class="formulate-input-help">
      Select by Date Range
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
    }
  },
}
</script>
<style>
.formulate-input-help {
  color: #6d6d6d;
  font-size: 0.7em;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.25em;
  margin-top: 0.25em;
}
</style>
