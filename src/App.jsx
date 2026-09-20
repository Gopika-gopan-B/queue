import { useState } from 'react';
import Registration from './components/Registration';
import HospitalSelect from './components/HospitalSelect';
import DepartmentSelect from './components/DepartmentSelect';
import DoctorSelect from './components/DoctorSelect';
import TrackingScreen from './components/TrackingScreen';
import { generateToken } from './api';
import './App.css';

function App() {
  const [step, setStep] = useState('registration');
  const [patient, setPatient] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);
  const [hospitalName, setHospitalName] = useState('');
  const [departmentId, setDepartmentId] = useState(null);
  const [departmentName, setDepartmentName] = useState('');
  const [doctorId, setDoctorId] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [token, setToken] = useState(null);
  const [generating, setGenerating] = useState(false);

  const handleRegistration = (patientData) => {
    setPatient(patientData);
    setStep('hospital');
  };

  const handleHospital = (id, name) => {
    setHospitalId(id);
    setHospitalName(name);
    setStep('department');
  };

  const handleDepartment = (id, name) => {
    setDepartmentId(id);
    setDepartmentName(name);
    setStep('doctor');
  };

  const handleDoctor = async (id, doctorData) => {
    setDoctorId(id);
    setDoctor(doctorData);
    setGenerating(true);

    const result = await generateToken({
      patientName: patient.name,
      patientPhone: patient.phone,
      patientAge: patient.age,
      patientGender: patient.gender,
      hospitalId,
      departmentId,
      doctorId: id,
    });

    setToken(result);
    setGenerating(false);
    setStep('tracking');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>OPD Queue</h1>
        {hospitalName && <p className="breadcrumb">{hospitalName}{departmentName ? ` / ${departmentName}` : ''}</p>}
      </header>

      {step === 'registration' && <Registration onNext={handleRegistration} />}
      {step === 'hospital' && <HospitalSelect onNext={handleHospital} />}
      {step === 'department' && <DepartmentSelect hospitalId={hospitalId} onNext={handleDepartment} />}
      {step === 'doctor' && <DoctorSelect departmentId={departmentId} onNext={handleDoctor} />}
      {step === 'doctor' && generating && <div className="screen"><p>Generating your token...</p></div>}
      {step === 'tracking' && token && <TrackingScreen token={token} />}
    </div>
  );
}

export default App;