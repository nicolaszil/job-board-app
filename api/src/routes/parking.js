const express = require('express')
const router = new express.Router()

const Parking = require('../models/parking')

const notFoundHandler = (req, res) => {
  res.status(404).send("Ressource not found");
};

router.get('/parkings', async (req, res) => {
  try {
    const result = await Parking.find({}, { __v: 0 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
});

router.get('/parkings/:id', async (req, res, next) => {
  try {
    const result = await Parking.findById(req.params.id, { __v: 0 });
    if (result) return res.status(200).json(result);
    next();
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
}, notFoundHandler);

router.post('/parkings', async (req, res) => {
  try {
    const result = new Parking(req.body);
    await result.save();
    res.status(201).end();
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
});

router.put('/parkings/:id', async (req, res, next) => {
  try {
    const result = await Parking.findByIdAndUpdate(req.params.id, req.body);
    if (result) return res.status(204).end();
    next();
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
}, notFoundHandler);

router.delete('/parkings/:id', async (req, res, next) => {
  try {
    const result = await Parking.findByIdAndDelete(req.params.id);
    if (result) return res.status(204).end();
    next();
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
}, notFoundHandler);

module.exports = router