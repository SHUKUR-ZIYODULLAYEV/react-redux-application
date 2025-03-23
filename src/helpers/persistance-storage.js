export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
        
    }
};
export const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.log(error);
    }
};
export const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};