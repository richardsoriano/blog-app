import ProjectsGrid from "./projects-grid"
import styles from "./project.module.css"
// import projectsLists from "@/data/projects"

export default function AllProjects({ projects = [] }) {
  // console.log("projectslist", projects)
  return (
    <section>
      <div className={styles.projects} id="projects">
        <h2>Projects </h2>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}

// export function getStaticProps() {
//   const allProjects = projectsLists
//   if (!allProjects) {
//     return {
//       props: {
//         projects: [],
//       },
//     }
//   }
//   return {
//     props: {
//       projects: allProjects,
//     },
//   }
// }
