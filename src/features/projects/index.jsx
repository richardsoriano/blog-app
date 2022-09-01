import ProjectsGrid from "./projects-grid"
import styles from "./project.module.css"

export default function AllProjects({ projects }) {
  return (
    <section>
      <div className={styles.projects} id="projects">
        <h2>Projects </h2>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}
