
// you can only import the global style in _app.tsx not in any other tsx
// if you need to import css for one component name it as {name}.module.css
import '../styles/globals.css'
import './custom-bootstrap.scss';
import store from '../components/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {

  console.log('hello from _app.tsx  (this log only execute in server and client )');

  return <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
}

export default MyApp
