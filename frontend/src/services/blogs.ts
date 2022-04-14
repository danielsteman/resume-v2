import axios from "axios"

export const getAllBlogs = () => {
  return axios.get('http://localhost:8000/blogs')
}
