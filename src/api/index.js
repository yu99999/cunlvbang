import axios from "axios"

// axios.create({
//   baseURL: '',
//   timeout: 1000
// })

axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return err;
  }
)

export const fetchServerHomeList = () => axios.get("https://jsonplaceholder.typicode.com/todos/1");