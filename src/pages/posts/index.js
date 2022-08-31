import Head from "next/head"
import AllPosts from "@/features/posts/all-posts"
import { getAllPosts } from "lib/post-utils"

export default function AllPostsPage({ posts }) {
  return (
    <>
      <title>All Blogs</title>
      <Head>
        <meta
          name="description"
          content="Blogs about ReactJS and web programming"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}
