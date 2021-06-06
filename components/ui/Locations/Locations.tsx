import { FC } from 'react'
import Image from 'next/image'
import l from './Locations.module.css'

const Locations: FC = () => {
  return (
    <section className={l.locations}>
      <div className={l.inner}>
        <div className={l.heading}>
          <h1 className={l.title}>
            Our Locations
          </h1>
        </div>
        <div className={l.content}>
          <p className={l.desc}>
            Vivamus arcu felis bibendum ut tristique. Odio eu feugiat pretium nibh ipsum consequat. Magna eget est lorem ipsum dolor sit amet. Tristique senectus et netus et malesuada fames ac turpis egestal.
          </p>
        </div>
        <aside className={l.aside}>
          <h2 className={l.title}>
            Bergen
          </h2>
          <Image
            src="/bergen.jpg"
            alt="Bergen"
            width={400}
            height={200}
          />
        </aside>
        <aside className={l.aside}>
          <h2 className={l.title}>
            Oslo
          </h2>
          <Image
            src="/oslo.jpg"
            alt="Oslo"
            width={400}
            height={200}
          />
        </aside>
      </div>
    </section>
  )
}

export default Locations