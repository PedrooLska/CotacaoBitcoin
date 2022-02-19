<template>
  <div class="priceBTC">
    <img src="./img/img.svg" class="priceBTC__image" />
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
      } = await Services.getPriceBTC();
      this.listPriceBTC = bpi;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}

.priceBTC {
  position: absolute;
  background-color: #ffff;
  border: solid white 1px;
  border-radius: 10px;
  width: 450px;
  padding: 50px;
  margin: 0 auto;
  -webkit-box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.49);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.49);

  &__image {
    width: 300px;
  }

  &__title {
    margin: 20px;
    text-align: center;
  }
}
</style>
