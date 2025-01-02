export const saveToCache = (key, value) => {
    const data = { value, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromCache = (key, maxAge = 3600000) => {
    if (typeof localStorage === "undefined") return null;

    const data = JSON.parse(localStorage.getItem(key));
    if (data && (Date.now() - data.timestamp) < maxAge) {
        return data.value;
    }
    localStorage.removeItem(key);
    return null;
};

