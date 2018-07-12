import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.github.com/repos/bdouglasans/teste-repository`,
    withCredentials: false,
    auth: {
      'username': `bdouglasans`,
      'password': `1d028f93e2ac249b4efc7fa6d3254344bafbcb0f`
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
