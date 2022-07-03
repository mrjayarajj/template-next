
const LocalStorage = {
    getItem: (key) => {
        if (typeof window !== "undefined") {
            return localStorage.getItem(key);
        }
    },
    setItem: (key,value) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, value)
            return;
        }
    },
    removeItem: (key) => {
        if (typeof window !== "undefined") {
            localStorage.removeItem(key)
            return;
        }
    },
};

export default LocalStorage;