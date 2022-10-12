import Logo from './logo'
import Button from './button'
import Container from './container'

export default function Hero() {
  return (
    <Container className="pb-20 text-center md:pt-10 md:pb-36 lg:pt-32">
      <Logo width={400} height={160} />
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        New Christian school coming soon.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Augusta Christian Academy starts this coming year, serving the Augusta
        county area. Find out more today!
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get 6 months free</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
    </Container>
  )
}
