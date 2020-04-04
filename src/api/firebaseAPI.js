import axios from 'axios'

const instance =  axios.create({
    baseURL:'https://us-central1-one-time-password-app-60476.cloudfunctions.net'
})

export default instance