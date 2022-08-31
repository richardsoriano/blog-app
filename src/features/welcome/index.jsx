import Image from "next/image"

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
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          vel minima molestiae deserunt sed alias perferendis labore architecto
          eaque, doloribus magni repellat. Placeat, temporibus obcaecati?
        </p>
      </div>
    </div>
  )
}
