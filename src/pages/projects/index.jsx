import Head from "next/head"
import AllProjects from "@/features/projects/"
import projectsList from "@/data/projects"

export default function AllProjectsPage({ projects }) {
  return (
    <>
      <title>Projects Page</title>
      <Head>
        <meta
          name="description"
          content="Projects about ReactJS and web programming"
        />
      </Head>
      <h2>All Projects</h2>
      <AllProjects projects={projects} />
    </>
  )
}
