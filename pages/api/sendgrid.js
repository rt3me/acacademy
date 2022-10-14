import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_TO_EMAIL, // Your email where you'll receive emails
      from: process.env.SENDGRID_FROM_EMAIL, // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You have received a new form submission</div>`,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
