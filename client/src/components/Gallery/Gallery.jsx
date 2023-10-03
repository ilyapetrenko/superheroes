import { useSearchCharsQuery, useCreateHeroMutation } from '../../store/reducers/heroApi.js'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Hero } from '../Hero/Hero.jsx'
import { useActions } from '../../hooks/useActions.js'
import styles from './Gallery.module.css'

export const Gallery = () => {
    const { data } = useSearchCharsQuery()
    let currentChars = useSelector(state => state.hero)
    const { addChars } = useActions()

    useEffect(() => {
        addChars(data)
    }, [data])

    const [isNewHeroFormOpen, setIsNewHeroFormOpen] = useState(false)
    const [newHeroData, setNewHeroData] = useState({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: [],
        catch_phrase: '',
        images: [],
    })

    const [createHero, { isLoading: isCreating }] = useCreateHeroMutation()

    const openNewHeroForm = () => {
        setIsNewHeroFormOpen(true)
    }

    const closeNewHeroForm = () => {
        setIsNewHeroFormOpen(false)
    }

    const handleCreateButtonClick = () => {
        openNewHeroForm()
    }

    const handleCancelButtonClick = () => {
        closeNewHeroForm()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewHeroData({ ...newHeroData, [name]: value })
    }

    const handleCreateHeroSubmit = async (e) => {
        e.preventDefault()
        try {
            await createHero(newHeroData).unwrap()
            closeNewHeroForm()
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.gallery}>
                {currentChars &&
                    currentChars.map((hero) => <Hero hero={hero} key={hero.id} />)}
                {isNewHeroFormOpen ? (
                    <form onSubmit={handleCreateHeroSubmit} className={styles.heroForm}>
                        <label>
                            Nickname:
                            <input
                                type="text"
                                name="nickname"
                                value={newHeroData.nickname}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Real name:
                            <input
                                type="text"
                                name="real_name"
                                value={newHeroData.real_name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                name="origin_description"
                                value={newHeroData.origin_description}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Superpower:
                            <input
                                type="text"
                                name="superpowers"
                                value={newHeroData.superpowers}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Catch Phrase:
                            <input
                                type="text"
                                name="catch_phrase"
                                value={newHeroData.catch_phrase}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Image URL:
                            <input
                                type="text"
                                name="images"
                                value={newHeroData.images}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit" disabled={isCreating}>
                            {isCreating ? 'Creating...' : 'Create'}
                        </button>
                        <button type="button" onClick={handleCancelButtonClick}>
                            Cancel
                        </button>
                    </form>
                ) : (
                    <button className={styles.createButton} onClick={handleCreateButtonClick}>
                        New Hero +
                    </button>
                )}
            </div>
        </div>
    )
}

