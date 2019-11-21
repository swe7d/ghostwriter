import axios from 'axios'
import {useSelector} from 'react-redux'

axios.interceptors.request.use(function (config) {
    const auth = useSelector(state => state.firebase.auth)
    console.log('hey from interceptor', auth)
    config.headers.Authorization =  auth.stsTokenManager.accessToken;
    return config;
});

export default axios.create({
    baseURL: 'http://localhost:9000/api/',
    responseType: 'json',
})