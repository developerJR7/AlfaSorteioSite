import md5 from 'md5'
import { api } from './Api';


class AuthApi {
  public async login({ email, pwd }: { email: string; pwd: string }) {
    const res = await api.post('/actions/login', { email, pwd: md5(pwd) })
    return res.data
  }
}

export default new AuthApi()