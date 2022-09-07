import Link from "next/link"
import styles from "./navbar.module.css"
import { menuItems, menuSocialItems } from "./menuItems"

export default function NavBar({}) {
  return (
    <header styles={styles.header}>
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
    </header>
  )
}

// return (
//   <nav className="NavbarItems">
//     <h1 className="navbar-logo">
//       {/* <Link href="/"> */}
//       Richard Soriano
//       {/* </Link> */}
//     </h1>
//     {/* <div className="menu-icon" onClick={() => setActive((prev) => !prev)}>
//       <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
//     </div> */}
//     <ul>
//       {menuItems.map((menuItem, index) => {
//         return (
//           <li key={index}>
//             <Link href={menuItem.url}>
//               <a>{menuItem.name}</a>
//             </Link>
//           </li>
//         )
//       })}
//     </ul>
//   </nav>
// )
