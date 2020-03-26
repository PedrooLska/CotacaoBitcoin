<template>
  <div id="app">
    <priceBTC title="Price BTC" />
  </div>
</template>

<script>
import priceBTC from "./components/priceBTC";

export default {
  name: "App",
  components: {
    priceBTC
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
  background: linear-gradient(to right, rgb(54, 1, 85), rgb(93, 2, 146));
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}
</style>
