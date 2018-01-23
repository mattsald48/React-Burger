import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-b8680.firebaseio.com/'
});

export default instance;