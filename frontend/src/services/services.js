import api from "./api";

export default {
  getPriceBTC() {
    return api.get("currentprice.json");
  }
};
