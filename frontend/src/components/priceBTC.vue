<template>
  <div id="hello">
    <h1>{{ coin }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "priceBTC",
  data() {
    return {
      coin: null
    };
  },

  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.coin = response.data.bpi));
  }
};
</script>
