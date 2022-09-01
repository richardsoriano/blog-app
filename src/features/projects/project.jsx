import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./project.module.css"

export default function Project({ project, i }) {
  const { title, image, slug, content, url } = project
  const imagePath = `/images/projects/${slug}/${image}`
  const linkPath = url
  return (
    <Fragment>
      {i % 2 === 0 ? (
        <div className={styles.card1}>
          <Link href={linkPath}>
            <a className={styles.a}>
              <Image
                src={imagePath}
                width={500}
                height={300}
                layout="responsive"
              />
              <h2>{title}</h2>
              <p>{content}</p>
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles.card2}>
          <Link href={linkPath}>
            <a className={styles.a}>
              <Image
                src={imagePath}
                width={500}
                height={300}
                layout="responsive"
              />
              <h2>{title}</h2>
              <p>{content}</p>
            </a>
          </Link>
        </div>
      )}
    </Fragment>
  )
}
