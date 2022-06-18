import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
function Navbar() {
  return (
    <ul className={styles.navbar}>
    <Link href='/'><li><a>Home</a></li></Link>
    <Link href='/blogs'><li><a>Blog</a></li></Link>
    <Link href='/services'><li><a>Services</a></li></Link>
    <Link href='/about'><li><a>About</a></li></Link>
</ul>

  )
}

export default Navbar