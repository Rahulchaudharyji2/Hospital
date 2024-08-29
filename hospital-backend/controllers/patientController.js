const Patient = require('../models/Patient');

// Get patient profile by ID
exports.getPatientProfile = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({ msg: 'Patient not found' });
        }

        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update patient profile
exports.updatePatientProfile = async (req, res) => {
    const { name, age, gender, contact, medicalHistory, appointments } = req.body;

    // Build patient object
    const patientFields = {};
    if (name) patientFields.name = name;
    if (age) patientFields.age = age;
    if (gender) patientFields.gender = gender;
    if (contact) patientFields.contact = contact;
    if (medicalHistory) patientFields.medicalHistory = medicalHistory;
    if (appointments) patientFields.appointments = appointments;

    try {
        let patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({ msg: 'Patient not found' });
        }

        // Update the patient profile
        patient = await Patient.findByIdAndUpdate(
            req.params.id,
            { $set: patientFields },
            { new: true }
        );

        res.json(patient);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
