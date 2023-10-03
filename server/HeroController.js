import Hero from './Hero.js'
import HeroService from './HeroService.js'

class HeroController {
  async create(req, res) {
    try {
      const hero = await HeroService.create(req.body)
      res.json(hero)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const heroes = await HeroService.getAll()
      return res.json(heroes)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const hero = await HeroService.getOne(req.params.id)
      return res.json(hero)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
      const updatedHero = await HeroService.update(req.body)
      return res.json(updatedHero)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const hero = await HeroService.delete(req.params.id)
      return res.json(hero)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new HeroController()
