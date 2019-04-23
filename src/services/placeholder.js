import axios from 'axios';

export const placeholder = async () => {
    const data = await axios.get('/api');

    console.log(data);
}