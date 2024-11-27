import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/';

// Fetching user data, posts, comments, and todos
export const getUserData = async (userId) => {
  const user = axios.get(`${API_URL}users/${userId}`);
  const posts = axios.get(`${API_URL}posts?userId=${userId}`);
  const comments = axios.get(`${API_URL}comments?postId=${userId}`);
  const todos = axios.get(`${API_URL}todos?userId=${userId}`);

  return Promise.all([user, posts, comments, todos]);
};

// Fetching details for a specific post by its ID
export const getPostDetails = async (postId) => {
  const response = await axios.get(`${API_URL}posts/${postId}`);
  return response;
};

// Updating a post 
export const updatePost = async (postId, postData) => {
  const response = await axios.put(`${API_URL}posts/${postId}`, postData);
  return response;
};

// Deleting a post
export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_URL}posts/${postId}`);
  return response;
};

