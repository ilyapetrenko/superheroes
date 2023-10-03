import styles from './App.module.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
        <main className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>
                    Gallery of superheroes
                </h1>
                <p className={styles.desc}>
                    The world's first superhero gallery.
                    <br/>
                    Browse your favorite comic and movie characters.
                </p>
                <div className={styles.buttonContainer}>
                    <Link to="/gallery" className={styles.exploreButton}>
                        <button>View Gallery</button>
                    </Link>
                <button className={styles.exploreButton}>
                    About US
                </button>
                </div>
            </div>
        </main>
    </>
  )
}

export default App
