import PostsGrid from "./grid"
import styles from "./featured-posts.module.css"

export default function AllPosts({ posts }) {
  return (
    <section>
      <div className={styles.blogs}>
        <h2>All Posts</h2>
        <PostsGrid posts={posts} />
      </div>
    </section>
  )
}
