const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js');

// CRUD operations for contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json(newContact);
});

router.delete('/', async (req, res) => {
    await Contact.deleteMany();
    res.json({ message: 'All contacts deleted' });
  });

router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  });

router.put('/:id', async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedContact);
});

router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
});


module.expo