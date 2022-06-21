import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
    <SessionProvider store={store}>
      <Component {...pageProps} />
    </SessionProvider>
    </AuthProvider>
  )
}

export default MyApp
