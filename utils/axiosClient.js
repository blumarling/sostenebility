import axios from 'axios'
// import {store} from '../redux/configStore'

const options = {
  baseURL: '/api/',
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}
const client = axios.create(options)

const onResponseSuccess = (response) => {
  return {
    isSuccess: true,
    ...response
  }
}

const onResponseFail = (error) => {
  if(error && error.response && error.response.status === 401) {
    // store.dispatch({ type: 'LOG_OUT'})
  }
  return Promise.reject({isSuccess: false, ...error})
}

const onRequestSuccess = (config) => {
  return config
}

const onRequestFail = (error) => {
  return error
}

client.interceptors.response.use(onResponseSuccess, onResponseFail)
client.interceptors.request.use(onRequestSuccess, onRequestFail)

export default client
