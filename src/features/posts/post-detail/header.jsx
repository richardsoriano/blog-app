import Image from "next/image"
import styles from "./header.module.css"

export default function Header({ title, image, datePublished, readTime }) {
  const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <header className={styles.header}>
      {/* <Image src={image} width={500} height={300} layout="responsive" /> */}
      <h2>{title}</h2>
      <h3>
        {formattedDate} <i class="fa fa-book-open"></i> {readTime}
      </h3>
    </header>
  )
}
