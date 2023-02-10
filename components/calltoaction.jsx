import Image from 'next/future/image'

import Button from './button'
import Container from './container'

export default function CallToAction({
  href,
  buttonText,
  text,
  heading,
  backgroundImage = '../images/background-call-to-action.jpg',
  logoTextImage = '',
}) {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt="Call to action section background image"
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className={logoTextImage ? 'bg-black bg-opacity-50 py-10' : ''}>
          <div className="mx-auto max-w-lg text-center">
            {logoTextImage ? (
              <>
                <Image
                  className=""
                  src={logoTextImage}
                  alt="Call to action logo text image"
                  width={2347}
                  height={1244}
                  unoptimized
                />
                <h2 className="hidden font-display text-3xl tracking-tight text-white sm:text-4xl">
                  {heading}
                </h2>
              </>
            ) : (
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                {heading}
              </h2>
            )}
            <p className="mt-4 text-lg tracking-tight text-white">{text}</p>
            <br />
            <Button href={href} variant="solid" color="white">
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
