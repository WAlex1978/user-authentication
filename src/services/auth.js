import axios from 'axios';

export const login = async (username, password) => {
    try {
        const res = await axios.post('/api/auth/login', {
            username: username,
            password: password,
        });

        return res;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export const register = async (username, password) => {
    try {
        const res = await axios.post('/api/auth/register', {
            username: username,
            password: password,
        });

        return res;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export const verify = async (token) => {
    try {
        const res = await axios.post('/api/auth/verify', {
            token: token,
        });

        return res;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}