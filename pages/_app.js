import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // let user = await fetch("/api/auth/me").then(res => res.json())
  // pageProps.user = user
  return <Component {...pageProps} />
}

export default MyApp
