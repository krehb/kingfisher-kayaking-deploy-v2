import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kingfisher-kayaking.firebaseio.com/'
});

export default instance;