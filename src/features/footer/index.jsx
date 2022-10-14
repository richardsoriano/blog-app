import styles from "./footer.module.css"

export default function Footer({}) {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footer}>
        Copyright © 2022 Full Stack Blog in Next, MongoDB, React, Javscript,
        HTML, CSS by Richard Soriano
      </p>
    </div>
  )
}
