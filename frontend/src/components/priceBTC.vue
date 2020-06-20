<template>
  <div class="priceBTC">
    <h1>{{ title }}</h1>

    <div v-for="(item, index) in coin" :key="index">
      <big>{{ item.description }}:</big>

      <span>
        <span v-html="item.symbol"></span>
        {{ item.rate_float | toFixed2 }}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: ["title"],

  data() {
    return {

      coin: ''

    };

  },

  mounted() {

    this.$http.get('currentprice.json')
    .then(response => (this.coin = response.data.bpi));

  },
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
