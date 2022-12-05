import { Form, Submit, TextAreaField, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField id="name" name="name" />
        <label htmlFor="email">Email</label>
        <TextField id="email" name="email" />
        <label htmlFor="message">Message</label>
        <TextAreaField id="message" name="message" />

        <Submit>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
