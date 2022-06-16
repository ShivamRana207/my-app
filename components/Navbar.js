import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className={styles.nav}>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/blogs"><a>Blogs</a></Link></li>
      <li><Link href="/services"><a>Services</a></Link></li>
    </ul>
  </nav>
  )
}

export default Navbar