const express = require('express');
const db = require('../data/connection')
const router = express.Router();

router.get('/', (req ,res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch(error => {
        res.status(500).json({message: "Could not connect to the db"})
    })
})

router.post('/', (req, res) => {
    carInfo = req.body

    if(!carInfo.VIN || !carInfo.Make || !carInfo.Mileage || !carInfo.Model){
        res.status(404).json({message: "Please include VIN, Make, Model, and Mileage"})
    }else{
    db('cars').insert(carInfo)
    .then(cars => {
        res.status(201).json({message: "Car info was posted"})
    })
    .catch(error => {
        res.status(500).json({message: "There was an error saving your data"})
    })
}})
module.exports = router;