import type { User } from '@/model/user'
import LogoImage from '@/assets/images/logo/logo.png'

export interface UserState {
  token: string
  user: User
  permissions: string[]
  features: string[]
}

export default () =>
  ({
    token: '',
    user: {
      id: 0,
      username: 'visitor',
      realname: '访客',
      workNumber: '0',
      lock: '0'
    },
    permissions: [],
    features: []
  } as UserState)
