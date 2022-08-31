import Post from "@/features/posts/post"
import { Fragment } from "react"
export default function PostsGrid({ posts }) {
  return (
    <Fragment>
      {posts.map((post, i) => (
        <Post post={post} i={i} key={post.title} />
      ))}
    </Fragment>
  )
}
