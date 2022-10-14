import Container from './container'
import { TextField, TextArea } from './fields'
import Button from './button'

export default function Form() {
  return (
    <Container className="max-w-3xl py-24">
      <form
        action="/api/form"
        method="post"
        className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Full name"
          id="full-name"
          name="full-name"
          type="text"
          autoComplete="full-name"
          required
        />

        <TextField
          className="col-span-full"
          label="E-mail address"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />

        <TextField
          className="col-span-full"
          label="Subject"
          id="subject"
          name="subject"
          type="text"
          autoComplete="subject"
          required
        />

        <TextArea
          className="col-span-full"
          label="Message"
          id="message"
          name="message"
          autoComplete="message"
          rows={5}
          required
        />

        <Button color="blue">
          <span>Send</span>
        </Button>
      </form>
    </Container>
  )
}
