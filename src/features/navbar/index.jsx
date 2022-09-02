import Link from "next/link"
import styles from "./navbar.module.css"

export default function NavBar({}) {
  return (
    <header>
      <h1 className={styles.header}>
        <Link href="/">
          <a>Richard Soriano</a>
        </Link>
      </h1>

      <nav className={styles.nav}>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/#projects">
            <a>Projects </a>
          </Link>
          <Link href="/posts">
            <a>Blogs</a>
          </Link>
        </ul>
        <ul>
          <Link href="https://www.linkedin.com/in/richard-soriano/">
            <a aria-label="linked in profile">
              <i
                className="fa-brands fa-linkedin"
                aria-hidden="true"
                title="Linkedin Profile"
              ></i>
            </a>
          </Link>
          <Link href="https://soriano-richard2020.medium.com/">
            <a>
              <i
                className="fa-brands fa-medium"
                aria-hidden="true"
                title="Medium Blog"
              ></i>
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC0eMAHlouLpVDx1Lixql34Q">
            <a>
              <i
                className="fa-brands fa-youtube"
                aria-hidden="true"
                title="Coding and Coffee"
              ></i>
            </a>
          </Link>
          <Link href="https://github.com/richardsoriano">
            <a>
              <i
                className="fa-brands fa-github"
                aria-hidden="true"
                title="Github"
              ></i>
            </a>
          </Link>
          <Link href="https://twitter.com/WritesNCodes">
            <a>
              <i
                className="fa-brands fa-twitter"
                aria-hidden="true"
                title="Twitter @WritesNCodes"
              ></i>
            </a>
          </Link>
          <Link href="https://youtu.be/TWXu0wQ60PY">
            <a>
              <i
                className="fa-solid fa-film"
                aria-hidden="true"
                title="My Apocalyptic Thanksgiving Trailer"
              ></i>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
