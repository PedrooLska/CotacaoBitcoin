import api from "./api";

export default {
  getPriceBtc() {
    return api.get("currentprice.json");
  }
};
