import { FC, useState } from 'react'
import { Router } from 'next/router'
import Link from 'next/link'
import { Logo } from '@components/ui'
import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
import n from './Navbar.module.css'

const Navbar: FC = () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  Router.events.on('routeChangeStart', () => { setMobileNavShown(false) })

  return (
    <div className={n.navbar}>
      <Link href="/">
        <a className={n.logo} aria-label="Logo">
          <Logo size={8} />
        </a>
      </Link>
      <span className={n.toggle} onClick={() => setMobileNavShown(!mobileNavShown)}>
        {mobileNavShown == true ? (
          <ArrowLeft />
        ) : (
          <ArrowRight />
        )}
      </span>
      <nav className={`${n.nav} ${mobileNavShown ? n.active : ''}`}>
        <Link href="/">
          <a className={n.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={n.link}>About us</a>
        </Link>
        <Link href="/locations">
          <a className={n.link}>Our Locations</a>
        </Link>
        <Link href="/contact">
          <a className={n.link}>Contact</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar