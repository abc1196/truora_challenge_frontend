import api from "./api";

const BASE_DOMAINS = "/domains";
export default {
  getDomains() {
    return api
      .get(BASE_DOMAINS)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  },

  getDomain(id: string) {
    return api
      .get(BASE_DOMAINS + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
};
