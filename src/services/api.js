import axios from 'axios';
import { saveToCache, loadFromCache } from '../utils/storage';

const API_BASE_URL = 'https://itx-frontend-test.onrender.com/api';

export const fetchProducts = async () => {
    const cacheKey = 'products';
    const cachedData = loadFromCache(cacheKey);

    if (cachedData) {
        return cachedData;
    }

    const response = await axios.get(`${API_BASE_URL}/product`);
    saveToCache(cacheKey, response.data);
    return response.data;
};

export const fetchProductDetails = async (id) => {
    const cacheKey = `product-${id}`;
    const cachedData = loadFromCache(cacheKey);

    if (cachedData) {
        return cachedData;
    }

    const response = await axios.get(`${API_BASE_URL}/product/${id}`);
    saveToCache(cacheKey, response.data);
    return response.data;
};

export const addToCart = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/cart`, data);
    return response.data;
};
