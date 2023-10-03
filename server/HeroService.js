import Hero from './Hero.js'

class HeroService {
  async create(hero) {
    const createdHero = await Hero.create(hero)
    return createdHero
  }

  async getAll() {
      const heroes = await Hero.find()
      return heroes
  }

  async getOne(id) {
      if (!id) {
        throw new Error('Id is required')
      }
      const hero = await Hero.findById(id)
      return hero
  }

  async update(hero) {
      if (!hero._id){
        throw new Error('Id is required')
      }
      const updatedHero = await Hero.findByIdAndUpdate(hero._id, hero, {new: true})
      return updatedHero
  }

  async delete(id) {
      if (!id) {
        throw new Error('Id is required')
      }
      const hero = await Hero.findByIdAndDelete(id)
      return hero
  }
}

export default new HeroService()
