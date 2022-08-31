import Content from "@/features/posts/post-detail/content"
import { getPostData, getPostsFiles } from "lib/post-utils"

// const DUMMYPOST = {
//   title: "title 100",
//   image: "1.png",
//   slug: "getting-started-with-nextjs",
//   datePublished: "2022-02-10",
//   excert:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae enim tempore ipsum magni, provident esse! Quibusdam similique maxime voluptate dolor! Reprehenderit adipisci sunt obcaecati. Odio ex, excepturi esse inventore velit similique molestias, amet repudiandae optio quam nulla provident nemo accusantium dolor quasi ab! Magni, pariatur fugiat sequi nam illo voluptatibus?",
//   content: "# This is a first post",
//   readTime: "5 mins",
// }
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
