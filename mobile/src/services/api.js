import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333' });
//adb reverse tcp:3333 tcp:3333
//or change localhost for IP address

export default api;
