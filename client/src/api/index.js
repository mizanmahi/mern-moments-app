import axios from 'axios';

// const url = 'https://secure-mountain-61830.herokuapp.com/posts';
const url = 'http://localhost:5000/posts';

// Getting all post
export const fetchPosts = () => axios.get(url);
// Creating a  post
export const createPost = (newPost) => axios.post(url, newPost);
// Updating a post
export const updatePost = (currentId, updatedPost) =>
  axios.patch(`${url}/${currentId}`, updatedPost);
// Deleting a post
export const deletePost = (id) => axios.delete(`${url}/${id}`);
// Likeing a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
