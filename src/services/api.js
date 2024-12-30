import axios from 'axios';

const API_BASE_URL = 'https://itx-frontend-test.onrender.com/api';

export const fetchProducts = () => axios.get(`${API_BASE_URL}/product`);
export const fetchProductDetails = (id) => axios.get(`${API_BASE_URL}/product/${id}`);
export const addToCart = (data) => axios.post(`${API_BASE_URL}/cart`, data);
