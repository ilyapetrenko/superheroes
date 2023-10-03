import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetHeroByIdQuery, useUpdateHeroMutation } from '../../store/reducers/heroApi.js'
import styles from './HeroInfo.module.css'

export const HeroInfo = () => {
    const { id } = useParams()
    const { data: hero, isLoading } = useGetHeroByIdQuery(id)
    const [isEditing, setIsEditing] = useState(false)
    const [editedHero, setEditedHero] = useState({
        nickname: '',
        real_name: '',
        catch_phrase: '',
        origin_description: '',
        superpowers: [],
        images: [],
        _id: '',
        __v: 0,
    })
    const [updateHero] = useUpdateHeroMutation()

    useEffect(() => {
        if (!isLoading && hero) {
            setEditedHero({
                nickname: hero.nickname,
                real_name: hero.real_name,
                catch_phrase: hero.catch_phrase,
                origin_description: hero.origin_description,
                superpowers: [...hero.superpowers],
                images: [...hero.images],
                _id: hero._id,
                __v: hero.__v,
            })
        }
    }, [id, hero, isLoading])

    const handleEditClick = () => {
        setIsEditing(true)
    };

    const handleSaveClick = async () => {
        await updateHero(editedHero)
        setIsEditing(false)
        window.location.reload()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedHero({ ...editedHero, [name]: value })
    }

    const handleSuperpowerChange = (e, index) => {
        const newSuperpowers = [...editedHero.superpowers]
        newSuperpowers[index] = e.target.value
        setEditedHero({ ...editedHero, superpowers: newSuperpowers })
    }

    const handleAddSuperpower = () => {
        const newSuperpowers = [...editedHero.superpowers, '']
        setEditedHero({ ...editedHero, superpowers: newSuperpowers })
    }

    const handleRemoveSuperpower = (index) => {
        const newSuperpowers = [...editedHero.superpowers]
        newSuperpowers.splice(index, 1)
        setEditedHero({ ...editedHero, superpowers: newSuperpowers })
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!hero) {
        return <div>Hero not found</div>
    }

    return (
        <div className={styles.container}>
            <img
                alt={'hero image'}
                className={styles.heroImage}
                src={`${hero.images[0]}`}
            />
            <div className={styles.heroDetails}>
                <h3 className={styles.heroName}>
                    {isEditing ? (
                        <input
                            type="text"
                            name="nickname"
                            value={editedHero.nickname}
                            onChange={handleChange}
                        />
                    ) : (
                        hero.nickname
                    )}
                </h3>
                <span className={styles.heroRealName}>
                    {isEditing ? (
                        <input
                            type="text"
                            name="real_name"
                            value={editedHero.real_name}
                            onChange={handleChange}
                        />
                    ) : (
                        `Real name: ${hero.real_name}`
                    )}
                </span>
                <span className={styles.heroCatchPhrase}>
                    {isEditing ? (
                        <input
                            type="text"
                            name="catch_phrase"
                            value={editedHero.catch_phrase}
                            onChange={handleChange}
                        />
                    ) : (
                        `Catch phrase: ${hero.catch_phrase}`
                    )}
                </span>
                <span className={styles.heroOriginDescription}>
                    {isEditing ? (
                        <input
                            type="text"
                            name="origin_description"
                            value={editedHero.origin_description}
                            onChange={handleChange}
                        />
                    ) : (
                        `Origin: ${hero.origin_description}`
                    )}
                </span>
                <div className={styles.heroSuperpowers}>
                    {editedHero.superpowers.map((superpower, index) => (
                        <div key={index}>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name={`superpowers[${index}]`}
                                    value={superpower}
                                    onChange={(e) => handleSuperpowerChange(e, index)}
                                />
                            ) : (
                                <span>{superpower}</span>
                            )}
                            {isEditing && (
                                <button
                                    onClick={() => handleRemoveSuperpower(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    {isEditing && (
                        <button onClick={handleAddSuperpower}>
                            Add Superpower
                        </button>
                    )}
                </div>
            </div>
            {isEditing ? (
                <button onClick={handleSaveClick}>
                    Save
                </button>
            ) : (
                <button className={styles.editButton} onClick={handleEditClick}>
                    Edit
                </button>
            )}
        </div>
    )
}



