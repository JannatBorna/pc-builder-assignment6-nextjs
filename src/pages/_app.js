import store from '@/redux/store';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      {/* <Provider store={store}> */}
        {
           getLayout(<Component {...pageProps} />)
        }
       {/* </Provider> */}
    </SessionProvider>
   
    
  )
}
