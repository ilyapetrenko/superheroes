import React from "react";
import styles from './Hero.module.css'
import { useDeleteHeroMutation } from '../../store/reducers/heroApi.js'
import { Link } from 'react-router-dom'

export const Hero = ({ hero }) => {
    const [deleteHero] = useDeleteHeroMutation()

    const handleDelete = () => {
        deleteHero(hero._id)
        window.location.reload()
    }

    return (
        <div>
            <img
                className={styles.heroImage}
                alt={'hero image'}
                src={`${hero.images[0]}`}
            />
            <h3>{hero.nickname}</h3>
            <div className={styles.buttonContainer}>
                <button className={styles.editButton}><Link to={`/edit/${hero._id}`} className={styles.link}>View</Link></button>
                <button className={styles.removeButton}
                        onClick={handleDelete}>
                    Remove
                </button>
            </div>
        </div>
    );
}

