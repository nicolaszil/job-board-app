const express = require('express')
const router = new express.Router()

const Candidate = require('../models/candidate')

const notFoundHandler = (req, res) => {
  res.status(404).send("Ressource not found");
};

router.get('/candidates', async (req, res) => {
  try {
    const result = await Candidate.find({}, { __v: 0 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
});

router.get('/candidates/:id', async (req, res, next) => {
  try {
    const result = await Candidate.findById(req.params.id, { __v: 0 });
    if (result) return res.status(200).json(result);
    next();
  } catch (error) {
    res.status(500).send("An error occured, please try again", error);
  }
}, notFoundHandler);

module.exports = router