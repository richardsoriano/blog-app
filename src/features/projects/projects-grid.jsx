import Project from "@/features/projects/project"
import { Fragment } from "react"

export default function ProjectsGrid({ projects = [] }) {
  return (
    <Fragment>
      {projects
        ? projects.map((project, i) => (
            <Project project={project} i={i} key={project.title} />
          ))
        : null}
    </Fragment>
  )
}
