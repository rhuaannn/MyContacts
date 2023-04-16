const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const categories = await CategoriesRepository.findById(id);

    if (!categories) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'NAME IS REQUIRED' });
    }
    const category = await CategoriesRepository.create({ name });
    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
    } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'Name is required ' });
    }
    const categories = await CategoriesRepository.update(id, {
      name,
    });

    response.send(categories);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}
module.exports = new CategoryController();
