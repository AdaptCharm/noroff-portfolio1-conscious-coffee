import { FC } from 'react'
import a from './About.module.css'

const About: FC = () => {
  return (
    <section className={a.about}>
      <div className={a.inner}>
        <div className={a.heading}>
          <h1 className={a.title}>
            About Us
          </h1>
        </div>
        <div className={a.content}>
          <p className={a.desc}>
            Vivamus arcu felis bibendum ut tristique. Odio eu feugiat pretium nibh ipsum consequat. Magna eget est lorem ipsum dolor sit amet. Tristique senectus et netus et malesuada fames ac turpis egestaa.
          </p>
          <p className={a.desc}>
            Porta lorem mollis aliquam ut porttitor. Id porta nibh venenatis cras sed. Enim ut sem viverra aliquet eget sit amet tellua. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Eleifend donec pretium vulputate sapien nec. Pharetra convallis posuere morbi leo.
          </p>
        </div>
        <div className={a.heading}>
          <h1 className={a.title}>
            The Company
          </h1>
        </div>
        <div className={a.content}>
          <p className={a.desc}>
            In cursus turpis massa tincidunt dui ut. Leo in vitae turpis massa sed elementum tempus egestas sed. Dolor sit amet consectetur adipiscing elit duis. Dolor magna eget est lorem ipsum. Etiam erat velit scelerisque in dictum non consectetur a erat.
          </p>
          <p className={a.desc}>
          Nisl nisi scelerisque eu ultrices vitae. Tincidunt dui ut ornare lectus sit. Leo a diam sollicitudin tempor. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vel facilisis volutpat est velit egestas. Ultricies mi quis hendrerit dolor magna eget. Pellentesque habitant morbi tristique senectus. Quam nulla porttitor massa id neque aliquam. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About