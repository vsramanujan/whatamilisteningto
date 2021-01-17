import '@/styles/global/index.css'
import '@/styles/global/custom.css'
import '@/styles/global/darkModeSwitch.css'
import Layout from "@/components/layout"
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
