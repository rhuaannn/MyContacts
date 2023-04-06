const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  // listar todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // obter um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(contact);
  }

  store() {
    // criar novo registro
  }

  update() {
    // atualizar um registro
  }

  async delete(request, response) {
    // deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
