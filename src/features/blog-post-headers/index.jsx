import Image from "next/image"
import blogHeaders from "@/data/blogs"
import styles from "./blog-posts-headers.module.css"

export default function BlogPostHeaders() {
  return (
    <div className={styles.blogs}>
      <h2>Blog Posts</h2>
      {blogHeaders.map((blogHeader, i) => {
        return (
          <>
            {i % 2 === 0 ? (
              <div className={styles.card1}>
                <Image src="/images/posts/1.png" width={500} height={300} />
                <h2>{blogHeader.title}</h2>
                <h3>{blogHeader.datePublished}</h3>
                <p>{blogHeader.content.slice(0, 50)}</p>
              </div>
            ) : (
              <div className={styles.card2}>
                <Image src="/images/posts/2.png" width={500} height={300} />
                <h2>{blogHeader.title}</h2>
                <h3>{blogHeader.datePublished}</h3>
                <p>{blogHeader.content.slice(0, 50)}</p>
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}
