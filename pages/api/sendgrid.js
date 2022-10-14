import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_TO_EMAIL, // Your email where you'll receive emails
      from: process.env.SENDGRID_FROM_EMAIL, // your website email address here
      subject: `[ACA Contact Form] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>ACA Contact Form Submission</title>
        <meta name="description" content="Augusta Christian Academy Contact Form">
        <meta name="author" content="Augusta Christian Academy">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      
      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${req.body.message}</p>
            <br>
          </div>
        </div>
      </body>
      </html>`,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
