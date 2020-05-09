import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default axios.create({
  baseURL: "https://dangerzone-react.herokuapp.com/"
});

// export default axios.create({
//   baseURL: "http://127.0.0.1:8000/"
// });
