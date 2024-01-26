import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// auth routing
const Login = Loadable(lazy(() => import('views/auth/Login')))

// ===========================|| AUTH ROUTING ||=========================== //

const AuthRoutes = {
  path: '/auth',
  children: [
    {
      path: '/auth/login',
      element: <Login />
    }
  ]
}

export default AuthRoutes