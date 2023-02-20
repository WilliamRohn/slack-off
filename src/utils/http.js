import axios from 'axios'

const $http = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 15000
})

export const get = (url, params)=>{
  params = params || {}
  return new Promise((resolve, reject)=>{
    $http.get(url, params)
      .then((res)=>{
        resolve(res)
      })
      .catch((err)=>{
        reject(err)
      })
  })
}
export const post = (url, params)=>{
  params = params || {}
  return new Promise((resolve, reject)=>{
    $http.post(url, params)
      .then((res)=>{
        resolve(res)
      })
      .catch((err)=>{
        reject(err)
      })
  })
}