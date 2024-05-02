import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

const CARDS = [
    {
        label: "Patients",
        value: 6,
    },
    {
        label: "New Appointments",
        value: 6,
    },
    {
        label: "Cancelled",
        value: 6,
    },
    {
        label: "Programmes",
        value: 6,
    },
];

const APPOINTMENTS = [
    {
        startTime: "10:00 AM",
        endTime: "10:15 AM",
        patientName: "Ananya",
    },
    {
        startTime: "10:15 AM",
        endTime: "10:30 AM",
        patientName: "Ananya",
        isActive: true,
    },
    {
        startTime: "10:30 AM",
        endTime: "11:00 AM",
        patientName: "Ananya",
    },
    {
        startTime: "11:00 AM",
        endTime: "11:15 AM",
        patientName: "Ananya",
        isRescheduled: true,
    },
    {
        startTime: "11:15 AM",
        endTime: "11:45 AM",
        patientName: "Ekum",
        isCancelled: true,
    },
];

const ReschedulePage: React.FC = () => {
    return (
        <div>
            <h2>Reschedule Appointment</h2>
            {/* Add your rescheduling form or content here */}
        </div>
    );
};

const Appoint: React.FC = () => {
    const history = useHistory();

    const handleRescheduleClick = () => {
        // Navigate to the rescheduling page
        history.push('/reschedule');
    };

    return (
        <div className="bg-gray-200 h-screen flex">
            {/* Your existing components */}
            {/* ... */}
            <button className="border-orange-600 border px-10 py-2 text-sm  rounded-full w-fit mt-6" onClick={handleRescheduleClick}>
                Reschedule
            </button>
            {/* ... */}
        </div>
    );
}

const App: React.FC = () => {
    return (
        <Router>
            <Route path="/appoint" component={Appoint} />
            <Route path="/reschedule" component={ReschedulePage} />
        </Router>
    );
};

export default App;
