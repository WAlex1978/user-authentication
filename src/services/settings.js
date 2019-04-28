import axios from 'axios';

export const uploadAvatar = async (formData, token) => {
    try {
        const res = await axios.post('/api/settings/avatar', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data',
                'authentication' : token,
            }
        })

        return res;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}