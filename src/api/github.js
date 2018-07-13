import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.github.com/repos/bdouglasans/teste-repository`,
    withCredentials: false,
    auth: {
      'username': `bdouglasans`,
      'password': `55964aeb5a957017d06eeefb27ea0a5bd0078e55`
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
