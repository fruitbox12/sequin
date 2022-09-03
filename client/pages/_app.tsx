import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from 'web3uikit'
import {allReducers} from '../components/reducers/reducers'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  const store = createStore(allReducers)


  return (
    <MoralisProvider appId='xxxx' serverUrl='xxxx'>
      <NotificationProvider>
        <Provider store = {store}>
        <Component {...pageProps} />
        </Provider>
      </NotificationProvider>
    </MoralisProvider>
  )
}

export default MyApp


