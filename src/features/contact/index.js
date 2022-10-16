import { useState, useEffect } from "react"
import styles from "./contact.module.css"
import { Fragment } from "react"
import Notification from "@/ui/notification"

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!")
  }
}

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState() // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState()

  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredName, setEnteredName] = useState("")
  const [enteredMessage, setEnteredMessage] = useState("")

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  async function sendMessageHandler(event) {
    event.preventDefault()

    // optional: add client-side validation
    // console.log("send Message")
    setRequestStatus("pending")

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })
      setRequestStatus("success")
      setEnteredMessage("")
      setEnteredEmail("")
      setEnteredName("")
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus("error")
    }
  }

  let notification

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    }
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    }
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    }
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.control}>
          <form className={styles.form} onSubmit={sendMessageHandler}>
            <section className={styles.formGroup}>
              <ul className={styles.formFields}>
                <li>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={enteredName}
                    required
                    onChange={(e) => setEnteredName(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={enteredEmail}
                    required
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  />
                </li>

                <li>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    value={enteredMessage}
                    onChange={(event) => setEnteredMessage(event.target.value)}
                  ></textarea>
                </li>
              </ul>
            </section>

            <div className={styles.actions}>
              <button>Send Message</button>
            </div>
          </form>
          {notification && (
            <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default ContactForm
