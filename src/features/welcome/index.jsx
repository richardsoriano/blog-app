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
        <h2>Hi, I'm Richard</h2>
        <p>
          A space enthusiast, whose computer program was launched on a Space
          Shuttle Endeavour’s mission while at UCLA. As a high-end developer, I
          love working in a friendly team environment and making the customers
          happy. With several years of software development, my strong suit is
          integrating new technology to existing web applications while
          respecting the existing legacy code.
        </p>

        <p>
          Every week, I co-facilitate the
          <Link href="https://www.meetup.com/learnteachcode/">
            Koreatown Coders group for Learn Teach Code.
          </Link>
        </p>
      </div>
    </div>
  )
}
