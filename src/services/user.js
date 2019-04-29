import axios from 'axios';

export const getUser = async (username) => {
    try {
        const res = await axios.get('/api/user', {
            params: {
                username: username,
            }
        });

        return res;
    }
    catch(err) {
        console.log(err);
        return err;
    }
}