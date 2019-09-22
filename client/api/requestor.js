import request from 'superagent'

const baseUrl = '/api/v1'

export default function consume (endpoint, method = 'get', data = {}) {
  const payloadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {
    Accept: 'application/json'
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[payloadMethod](data)
    .then(res => res)
    .catch(err => {
      throw err
    })
}
