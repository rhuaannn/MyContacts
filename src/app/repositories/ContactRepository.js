const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Rhuan Marques',
    email: 'rhuanmarques1223@gmail.com',
    phone: '62982481606',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Brenda',
    email: 'brendafeitosa@gmail.com',
    phone: '6298545457',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}
module.exports = new ContactsRepository();
