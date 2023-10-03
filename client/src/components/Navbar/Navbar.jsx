import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <Link to={`/gallery`} className={styles.links}>Gallery</Link>
            <Link to={`/`} className={styles.links}>Home</Link>
        </nav>
    )
}
