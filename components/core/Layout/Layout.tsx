import { FC } from 'react'
import { Navbar, Footer } from '@components/core'
import l from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <>
      <header className={l.layout}>
        <div className={l.inner}>
          <Navbar />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout