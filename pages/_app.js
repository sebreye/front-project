import MainLayout from '@component/src/components/layout/MainLayout'
import '@component/styles/globals.css'
import { Store } from '@component/redux/store'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }) {
  return(
    <>
    <Provider store={Store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </Provider>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
    </>
    
    
  ) 
}
