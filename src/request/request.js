import axios from 'axios'

// 使 request 成为一个新的axios，
// 并且能够使http:127.0.0.1:8000/api/v1/books接口简化
// 在后续需要请求这个接口时，只需要写一个books/即可
const request = axios.create({
    baseURL: 'http://localhost:8081/', // 基础请求地址
    timeout: 10000, // 超时时间
    headers: { 'content-type': 'application/json' } // 携带的请求头，如 Token 等
})

export default request
