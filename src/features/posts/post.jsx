import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./featured-posts.module.css"

export default function Post({ post, i }) {
  const { title, image, content, datePublished, slug, readTime } = post
  const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

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
              <h3>
                {formattedDate}
                <i className="fa fa-book-open"></i> {readTime}
              </h3>
              <p>
                {content.slice(0, 200)}
                {content.length > 200 ? "..." : ""}
              </p>
            </a>
          </Link>
        </div>
      ) : (
        <div className={styles.card2}>
          <Link href={linkPath}>
            <a>
              <Image
                src={imagePath}
                width={500}
                height={300}
                layout="responsive"
              />
              <h2>{title}</h2>
              <h3>
                {formattedDate}
                <i className="fa fa-book-open"></i> <span>{readTime}</span>
              </h3>
              <p>
                {content.slice(0, 200)} {content.length > 200 ? "..." : ""}
              </p>
            </a>
          </Link>
        </div>
      )}
    </Fragment>
  )
}
