import axios from 'axios';

export const login = async (username, password) => {
    try {
        const token = await axios.post('/api/auth/login', {
            username: username,
            password: password,
        });

        return token;
    }
    catch(err) {
        console.log(err);
    }
}