import axios from 'axios';
 
const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODJmNmRiZGU2N2YxYmEyZDYzN2UwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY3MjY3NSwiZXhwIjoxNzA1OTMxODc1fQ.BZ0sMhjr84WB_yZcJM5Yn0dNNXwcQKMNwkTP3_J7cEg"

export const publicrequest = axios.create({
    baseURL:BASE_URL,

});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})


