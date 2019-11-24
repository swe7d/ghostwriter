import axios from 'axios'
import {useSelector} from 'react-redux'
import { store } from '../App'

const getApi = () => {
    return 'https://ghostwriter-dev.herokuapp.com/api/'
    
}

const api = axios.create({
    baseURL: getApi(),
    responseType: 'json',
})

// api.interceptors.request.use(function (config) {
//     const auth = store.getState().firebase.auth
//     // const auth = useSelector(state => state.firebase.auth)
//     console.log('hey from interceptor', auth)
//     config.headers.Authorization =  auth.stsTokenManager.accessToken;
//     return config;
// });

export default api