import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.github.com/repos/bdouglasans/teste-repository`,
    withCredentials: false,
    auth: {
      'username': `bdouglasans`,
      'password': `_`
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
