import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-maxiboy.firebaseio.com/'
});

export default instance;