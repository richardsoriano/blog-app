import Link from "next/link"
import styles from "./navbar.module.css"
import { menuItems, menuSocialItems } from "./menuItems"

export default function NavBar({}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Richard Soriano</a>
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link href={menuItem.url}>
                  <a>{menuItem.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>

        <ul>
          {menuSocialItems.map((menuSocialItem, index) => {
            return (
              <li key={index}>
                <Link href={menuSocialItem.url}>
                  <a aria-label={menuSocialItem.label}>
                    <i
                      className={menuSocialItem.fontName}
                      aria-hidden="true"
                      title={menuSocialItem.label}
                    ></i>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
