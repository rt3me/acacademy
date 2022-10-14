import { useState } from 'react'

import Container from './container'
import { TextField, TextArea } from './fields'
import Button from './button'

export default function Form() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

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
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value)
          }}
          autoComplete="full-name"
          required
        />

        <TextField
          className="col-span-full"
          label="E-mail address"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          autoComplete="email"
          required
        />

        <TextField
          className="col-span-full"
          label="Subject"
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value)
          }}
          autoComplete="subject"
          required
        />

        <TextArea
          className="col-span-full"
          label="Message"
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
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
