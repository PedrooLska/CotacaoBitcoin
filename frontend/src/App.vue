<template>
  <div class="priceBTC">
    <h1 class="priceBTC__title">Price BTC</h1>
    <priceBTC :listPriceBTC="listPriceBTC" />
  </div>
</template>

<script>
import priceBTC from "./components/priceBTC";
import Services from "./services/services";

export default {
  name: "Main",
  components: {
    priceBTC
  },
  data: () => ({
    listPriceBTC: {}
  }),
  created() {
    this.getPriceBTC();
  },
  methods: {
    async getPriceBTC() {
      const {
        data: { bpi }
      } = await Services.getPriceBtc();
      this.listPriceBTC = bpi;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background: #80a8ff;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}

.priceBTC {
  color: white;
  background: linear-gradient(to bottom right, #b65eba, #2e8de1);
  border: solid white 1px;
  border-radius: 10px;
  width: 450px;
  padding: 50px;
  margin: 0 auto;
}

.priceBTC__title {
  margin: 15px;
  text-align: center;
}
</style>
