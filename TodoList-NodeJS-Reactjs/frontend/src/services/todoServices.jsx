import axios from "axios";

export const todo = {
  get: async function () {
    const res = await axios
      .get("http://localhost:3001/")
      .then((res) => res.data)
      .catch((err) => err);
    return res;
  },
  post: async function (name) {
    const res = axios
      .post("http://localhost:3001/", { name, isDone: false })
      .then((res) => res.data)
      .catch((err) => err);
    return res;
  },
  put: function () {},
  delete: function () {},
};
