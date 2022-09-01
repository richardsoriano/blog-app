import Page from "@/ui/page"

import { getFeaturedPosts } from "lib/post-utils"

import FeaturedPosts from "@/features/posts/featured-posts"
import AllProjects from "@/features/projects/"
import projectsLists from "@/data/projects"

import Main from "features/main"
import Welcome from "features/welcome"

export default function LandingPage({ posts }) {
  return (
    <div>
      <Page
        title="Welcome to my Blog"
        description="Richard Soriano's blog about Javascript Programming in ReactJS Redux NextJS and using CSS"
      >
        <Main>
          <Welcome />

          <FeaturedPosts posts={posts} />
          <AllProjects projects={null} />
        </Main>
      </Page>
    </div>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  const allProjects = projectsLists
  if (!allProjects || !featuredPosts) {
    return {
      props: {
        posts: [],
        projects: null,
      },
    }
  }
  return {
    props: {
      posts: featuredPosts,
      projects: null,
    },
  }
}
