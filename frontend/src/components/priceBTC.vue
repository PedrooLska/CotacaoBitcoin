<template>
  <div class="priceBTC">
    <h1>{{ title }}</h1>

      <div v-for="(item, index) in coin" :key="index">
        <span>{{ item.description }}: </span>

        <span v-html="item.symbol"></span>
        <span> {{ item.rate_float | toFixed2 }}</span>
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

    this.getCoin()

  },

  methods: {
    
    getCoin: () => {

      this.$http.get('currentprice.json')
        .then(response => (this.coin = response.data.bpi));

    }

  }

};
</script>

<style scoped>
.priceBTC {
  color: white;
  background: linear-gradient(to bottom right, #b65eba, #2e8de1);
  border: solid white 1px;
  border-radius: 10px;
  width: 450px;
  padding: 50px;
  margin: 0 auto;
}

.priceBTC h1 {
  margin: 15px;
  text-align: center;
}
</style>
