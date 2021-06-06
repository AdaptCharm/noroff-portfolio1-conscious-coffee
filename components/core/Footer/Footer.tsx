import { FC } from 'react'
import Image from 'next/image'
import f from './Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={f.footer}>
      <div className={f.inner}>
        <div className={f.content}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={f.link}
            href="/locations"
          >
            Our locations
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={f.link}
            href="/contact"
          >
            Contact us
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={f.link}
            href="/about"
          >
            About us
          </a>
        </div>
        <a
          href="/"
        >
          <Image
            src="/icon.png"
            alt="Conscious coffee"
            width={320 / 3}
            height={301 / 3}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer