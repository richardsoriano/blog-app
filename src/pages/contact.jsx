import { Fragment } from "react"
import Head from "next/head"

import ContactForm from "@/features/contact/"

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Richard Soriano</title>
        <meta
          name="description"
          content="Ask me anything about web programming and leveling up"
        />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
