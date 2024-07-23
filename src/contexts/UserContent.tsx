import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'

interface UserContextData {
  user: Alfa.UserProps
  setUser: Dispatch<SetStateAction<Alfa.UserProps>>
  isAuthenticated: boolean | undefined
  token: string
  signIn: (token: string) => void
  signOut: () => void
  checkUserIsAuthenticated: () => void
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()
  const [token, setToken] = useState<string>('')
  const [user, setUser] = useState<Alfa.UserProps>({
    name: '',
    id: 0,
    created: '',
    doc: '',
    status: '',
    type: ''
  })

  const signIn = (token: string) => {
    setIsAuthenticated(true)

    setToken(token)
    localStorage.setItem('alfasorteios_token', token)
  }

  const signOut = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('alfasorteios_token')
    navigate('/login', { replace: true })
  }

  const checkUserIsAuthenticated = () => {
    const localToken = localStorage.getItem('alfasorteios_token')
    if (localToken !== null) {
      setToken(localToken)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        signIn,
        signOut,
        token,
        checkUserIsAuthenticated
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAlfa = () => {
  return useContext(UserContext)
}