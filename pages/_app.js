// import { Provider } from "react-redux";
import "../styles/globals.css";
// import exp from "../config/redux/Exp";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  // return <Provider exp={exp}>
  //   <Component {...pageProps} />
  // </Provider>;
}

export default MyApp;
