import { useState } from 'react'

import Container from './container'
import { TextField, TextArea } from './fields'
import Button from './button'

export default function Form() {
  // States for contact form fields
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  // Validation check method
  const handleValidation = () => {
    const tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors.fullname = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors.email = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors.subject = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors.message = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email,
          fullname,
          subject,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send')
    }
    console.log(fullname, email, subject, message)
  }

  return (
    <Container className="max-w-3xl py-24">
      <form
        onSubmit={handleSubmit}
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
          <span>{buttonText}</span>
        </Button>

        <div className="col-span-full text-left">
          {showSuccessMessage && (
            <p className="my-2 text-sm font-semibold text-green-500">
              Thank you! Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </form>
    </Container>
  )
}
