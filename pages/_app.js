import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../config/redux/store";
// import exp from "../config/redux/Exp";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>);
}

export default MyApp;
