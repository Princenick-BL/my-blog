import '../styles/globals.scss'
import '../styles/quill.css'
import WaitingPage from '../components/WaitingPage'

function MyApp({ Component, pageProps }) {
  return (
    <WaitingPage>
      <Component {...pageProps} />
    </WaitingPage>
  )
}

export default MyApp