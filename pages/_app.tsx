import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/core'
import '@styles/global.css'

const I: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || I

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}