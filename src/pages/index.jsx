import Page from "@/ui/page"

import { getFeaturedPosts } from "lib/post-utils"

// import featuredPosts from "@/data/blogs"
import FeaturedPosts from "@/features/posts/featured-posts"

import Main from "features/main"
import Welcome from "features/welcome"

export default function LandingPage({ posts }) {
  return (
    <div>
      <Page
        title="Welcome to my Blog"
        description="Richard Soriano's blog about Front End Programming in ReactJS Redux NextJS"
      >
        <Main>
          <Welcome />

          <FeaturedPosts posts={posts} />
        </Main>
      </Page>
    </div>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
