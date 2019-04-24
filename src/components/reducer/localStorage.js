export const getToken = () => {
    try {
        return localStorage.getItem('token');
    }
    catch (err) {
        console.log(err);
    }
}

export const setToken = (token) => {
    try {
        localStorage.setItem('token', token);
    }
    catch (err) {
        console.log(err);
    }
}

export const removeToken = () => {
    try {
        localStorage.removeItem('token');
    }
    catch (err) {
        console.log(err);
    }
}