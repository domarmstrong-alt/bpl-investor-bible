import { useEffect } from 'react'
import DraftBanner from './components/DraftBanner'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Market from './components/Market'
import Competitive from './components/Competitive'
import Traction from './components/Traction'
import Financials from './components/Financials'
import Ask from './components/Ask'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <DraftBanner />
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Market />
      <Competitive />
      <Traction />
      <Financials />
      <Ask />
      <Footer />
    </>
  )
}
