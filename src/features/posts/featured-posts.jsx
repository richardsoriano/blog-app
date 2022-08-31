import PostsGrid from "@/features/posts/grid"
import styles from "./featured-posts.module.css"

export default function FeaturedPosts({ posts }) {
  return (
    <section>
      <div className={styles.blogs}>
        <h2>Featured Blog Posts</h2>
        <PostsGrid posts={posts} />
      </div>
    </section>
  )
}
