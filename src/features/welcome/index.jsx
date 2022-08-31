import Image from "next/image"
import Link from "next/link"
import styles from "./welcome.module.css"

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.profile}>
        <Image
          src="/images/site/richard-soriano-headshot-resize.jpg"
          alt="Richard profile picture"
          width={300}
          height={300}
        />
      </div>
      <div className={styles.msg}>
        <h2>Hi, I'm Richard.</h2>
        <p>
          Modern web development and blockchain technologies are my passion. I
          strive to make web development easier to understand.
        </p>

        <p>
          Every week, I co-host the{" "}
          <Link href="https://www.meetup.com/learnteachcode/">
            Koreatown Coders group for Learn Teach Code.
          </Link>
        </p>
      </div>
    </div>
  )
}
