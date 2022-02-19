<template>
  <div>
    <div v-for="(priceBTC, index) in listPriceBTC" :key="index">
      <span>{{ priceBTC.description }} {{ index }}: </span>

      <span v-html="priceBTC.symbol"></span>
      <span> {{ priceBTC.rate_float.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceBTC",
  props: {
    listPriceBTC: {
      type: Object,
      required: true
    }
  }
};
</script>
