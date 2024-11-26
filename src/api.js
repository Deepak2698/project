import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchInfluencers = () => API.get('/influencers');
export const createInfluencer = (newInfluencer) =>
  API.post('/influencers', newInfluencer);
export const updateInfluencer = (id, updatedInfluencer) =>
  API.put(`/influencers/${id}`, updatedInfluencer);
export const deleteInfluencer = (id) => API.delete(`/influencers/${id}`);
