import { useEffect, useState } from 'react';
import { getDoctors } from '../api';

function DoctorSelect({ departmentId, onNext }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctors(departmentId).then((data) => {
      setDoctors(data);
      setLoading(false);
    });
  }, [departmentId]);

  if (loading) return <div className="screen"><p>Loading doctors...</p></div>;

  return (
    <div className="screen">
      <h2>Select Doctor / OPD</h2>
      <div className="option-list">
        {doctors.map((doc) => (
          <button key={doc.doctorId} className="option-card doctor-card" onClick={() => onNext(doc.doctorId, doc)}>
            <div className="doctor-name">{doc.name}</div>
            {doc.specialization && <div className="doctor-sub">{doc.specialization}</div>}
            {doc.opdHours && <div className="doctor-sub">OPD Hours: {doc.opdHours}</div>}
            {typeof doc.peopleWaiting === 'number' && <div className="doctor-sub">{doc.peopleWaiting} waiting</div>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DoctorSelect;