import Content from "@/features/posts/post-detail/content"
import { getPostData, getPostsFiles } from "lib/post-utils"

export default function PostDetailPage({ post }) {
  return <Content post={post} />
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles()
  const slugs = postFileNames.map((postFileName) =>
    postFileName.replace(/\.md$/, "")
  ) // pre generate our paths in advance
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const { slug } = params
  return {
    props: {
      post: getPostData(slug),
    },
  }
}
