import axios from 'axios';

const getAllBlogPosts = () => axios.get('http://localhost:8000/blogs');

export default getAllBlogPosts;
