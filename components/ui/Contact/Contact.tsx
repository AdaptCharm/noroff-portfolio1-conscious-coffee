import { FC } from 'react'
import c from './Contact.module.css'

const Contact: FC = () => {
  return (
    <section className={c.contact}>
      <div className={c.inner}>
        <div className={c.heading}>
            <h1 className={c.title}>
              Get in Touch
            </h1>
          </div>
        <form className={c.form}>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email address
            <input type="email" name="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" />
          </label>
          <label>
            Message
            <textarea name="message"></textarea>
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default Contact