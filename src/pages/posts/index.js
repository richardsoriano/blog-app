import AllPosts from "@/features/posts/all-posts"
import { getAllPosts } from "lib/post-utils"

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}
