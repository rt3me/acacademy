import Logo from './logo'
import Button from './button'
import Container from './container'

export default function Hero() {
  return (
    <Container className="pb-20 text-center md:pt-10 md:pb-36 lg:pt-32">
      <Logo widthProp={400} heightProp={160} />
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Augusta Christian Academy is enrolling now.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Augusta Christian Academy starts Fall 2023, serving the Augusta county
        area. Find out more today!
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="https://form.jotform.com/222765635435057">
          Community Interest Survey
        </Button>
        <Button href="/contact" variant="outline">
          <span>Contact Us</span>
        </Button>
      </div>
    </Container>
  )
}
