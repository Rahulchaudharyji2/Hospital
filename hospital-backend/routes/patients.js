const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// @route   GET api/patients
// @desc    Get all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/patients
// @desc    Add a new patient
router.post('/', async (req, res) => {
    const { name, age, gender, contact, medicalHistory, appointments } = req.body;

    try {
        const newPatient = new Patient({
            name,
            age,
            gender,
            contact,
            medicalHistory,
            appointments
        });

        const patient = await newPatient.save();
        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
