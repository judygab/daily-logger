import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { store } from '../src/app/store';

function MyApp({ Component, pageProps }: AppProps & { Component: { layout: any }}) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
}

// MyApp.getInitialProps = async ({ Component, router, ctx }) => {
//   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//   return { pageProps };
// }

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
