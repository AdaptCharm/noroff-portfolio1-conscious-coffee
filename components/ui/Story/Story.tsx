import { FC } from 'react'
import s from './Story.module.css'

const Story: FC = () => {
  return (
    <section className={s.story}>
      <div className={s.inner}>
        <div className={s.heading}>
          <h1 className={s.title}>
            Our Story
          </h1>
        </div>
        <div className={s.content}>
          <p className={s.desc}>
            Vivamus arcu felis bibendum ut tristique. Odio eu feugiat pretium nibh ipsum consequat. Magna eget est lorem ipsum dolor sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p className={s.desc}>
            Porta lorem mollis aliquam ut porttitor. Id porta nibh venenatis cras sed. Enim ut sem viverra aliquet eget sit amet tellus. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Eleifend donec pretium vulputate sapien nec. Pharetra convallis posuere morbi leo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story