// const express = require('express');
// const router = express.Router();

// const Chefs = require('./chef-model');
// // const Recipes = require('./recipe-model');

// router.get('/', async (req, res) => {
//   try {
//     const allchefs = await Chefs.allchefs(req.query);
//     res.status(200).json(allchefs);
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error retrieving chef'
//     });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const hub = await Hubs.findById(req.params.id);

//     if (hub) {
//       res.status(200).json(hub);
//     } else {
//       res.status(404).json({ message: 'Hub not found' });
//     }
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error retrieving the hub'
//     });
//   }
// });

// router.post('/', requiredBody, async (req, res) => {
//   try {
//     const hub = await Hubs.add(req.body);
//     res.status(201).json(hub);
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error adding the hub'
//     });
//   }
// });

// router.delete('/:id', validateId, async (req, res) => {
//   try {
//     const count = await Hubs.remove(req.params.id);
//     if (count > 0) {
//       res.status(200).json({ message: 'The hub has been nuked' });
//     } else {
//       res.status(404).json({ message: 'The hub could not be found' });
//     }
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error removing the hub'
//     });
//   }
// });

// router.put('/:id', validateId, requiredBody, async (req, res) => {
//   try {
//     const hub = await Hubs.update(req.params.id, req.body);
//     if (hub) {
//       res.status(200).json(hub);
//     } else {
//       res.status(404).json({ message: 'The hub could not be found' });
//     }
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error updating the hub'
//     });
//   }
// });

// router.get('/:id/messages',  async (req, res) => {
//   try {
//     const messages = await Hubs.findHubMessages(req.params.id);

//     res.status(200).json(messages);
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error getting the messages for the hub'
//     });
//   }
// });

// router.post('/:id/messages', requiredBody, async (req, res) => {
//   const messageInfo = { ...req.body, hub_id: req.params.id };

//   try {
//     const message = await Messages.add(messageInfo);
//     res.status(210).json(message);
//   } catch (error) {
//     // log error to server
//     console.log(error);
//     res.status(500).json({
//       message: 'Error getting the messages for the hub'
//     });
//   }
// });
