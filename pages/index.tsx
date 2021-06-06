import { Layout } from '@components/core'
import { Hero, Story, Contact } from '@components/ui'

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Contact />
    </>
  )
}

Home.Layout = Layout