export const saveToCache = (key, value) => {
    const data = { value, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromCache = (key, maxAge = 3600000) => {
    const data = JSON.parse(localStorage.getItem(key));
    if (data && (Date.now() - data.timestamp) < maxAge) {
        return data.value;
    }
    return null;
};

export const saveCartCount = (count) => {
    localStorage.setItem('cartCount', count);
};

export const loadCartCount = () => {
    const count = localStorage.getItem('cartCount');
    return count ? parseInt(count, 10) : 0;
};

