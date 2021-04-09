const express = require('express')
const router = new express.Router()

const parkings = require('../mocks/parkings.json')

const notFoundHandler = (req, res) => {
  res.status(404).send("Ressource not found");
};

router.get('/parkings', (req, res) => {
  res.status(200).json(parkings);
});

router.get('/parkings/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const parking = parkings.find((parking => parking.id === id));
  if (parking) return res.status(200).json(parking);
  next();
}, notFoundHandler);

router.post('/parkings', (req, res) => {
  parkings.push(req.body);
  const parking = parkings.find(parking => parking.id === req.body.id);
  if (parking) return res.status(201).end();
  return res.status(500).send("An error occured, please try again");
});

router.put('/parkings/:id', (req, res, next) => {
  const id = Number(req.params.id)
  const parkingIndex = parkings.findIndex(parking => parking.id === id);
  if (parkingIndex === -1) next();
  const parking = { id, ...req.body };
  parkings[parkingIndex] = parking;
  return res.status(204).end();
}, notFoundHandler);

router.delete('/parkings/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const parking = parkings.find(parking => parking.id === id);
  if (!parking) next();
  parkings.splice(parkings.indexOf(parking), 1);
  return res.status(204).end();
}, notFoundHandler);

module.exports = router