import React, { useState } from 'react';

const PatientProfile = () => {
    const [appointments, setAppointments] = useState([
        { date: "2024-09-01", doctor: "Dr. Smith", reason: "Follow-up" },
        { date: "2024-10-12", doctor: "Dr. Brown", reason: "Routine check-up" },
    ]);
    const [newAppointment, setNewAppointment] = useState({ date: '', doctor: '', reason: '' });

    const addAppointment = () => {
        setAppointments([...appointments, newAppointment]);
        setNewAppointment({ date: '', doctor: '', reason: '' });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Patient Profile</h2>
            {/* Other patient data here */}

            <h3>Appointments</h3>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>{appointment.date} - {appointment.doctor} ({appointment.reason})</li>
                ))}
            </ul>

            <h4>Add New Appointment</h4>
            <input
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
            />
            <input
                type="text"
                placeholder="Doctor"
                value={newAppointment.doctor}
                onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
            />
            <input
                type="text"
                placeholder="Reason"
                value={newAppointment.reason}
                onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
            />
            <button onClick={addAppointment}>Add Appointment</button>
        </div>
    );
};

export default PatientProfile;
