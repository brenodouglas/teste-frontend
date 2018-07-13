import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.github.com/repos/bdouglasans/teste-repository`,
    withCredentials: false,
    auth: {
      'username': `bdouglasans`,
      'password': `44f97994bbf405b2f6b51144373c088ab293f804`
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
