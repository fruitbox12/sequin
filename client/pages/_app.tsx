import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from 'web3uikit'
import {allReducers} from '../components/reducers/reducers'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
//require("dotenv").config()

function MyApp({ Component, pageProps }: AppProps) {

  const store = createStore(allReducers)


  return (
    <MoralisProvider appId="6RDIAxHMb3kj3Lw8weF9PVkwXWoOpkLmRlMDBtBl" serverUrl="https://5crub2u2jzju.usemoralis.com:2053/server" initializeOnMount = {false}>
      <NotificationProvider>
        <Provider store = {store}>
        <Component {...pageProps} />
        </Provider>
      </NotificationProvider>
    </MoralisProvider>
  )
}

export default MyApp


