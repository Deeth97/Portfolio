import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://github.com/Deeth97" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/willdeeth/" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="mailto:william.deeth@gmail.com" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a href="tel:0490772025" rel="noreferrer" target="_blank" className={styles.icon}>
      <i className="fa-solid fa-square-phone-flip"></i>
      </a>
    </div>
  )
}