<template>
  <div class="priceBTC">
    <h1>{{ title }}</h1>

    <div v-for="coins in coin" v-bind:key="coins.code">
      <big>{{ coins.description }}:</big>

      <span>
        <span v-html="coins.symbol"></span>
        {{ coins.rate_float | valueToFixed }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "priceBTC",
  props: ["title"],
  data() {
    return {
      coin: null
    };
  },

  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.coin = response.data.bpi));
  },
  filters: {
    valueToFixed(value) {
      return value.toFixed(2);
    }
  }
};
</script>

<style scoped>
.priceBTC {
  color: white;
  background: rgb(60, 1, 95);
  border-radius: 30px;
  width: 450px;
  padding: 50px;
  margin: 0 auto;
}

.priceBTC h1 {
  margin: 15px;
  text-align: center;
}

.priceBTC big {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}
</style>
