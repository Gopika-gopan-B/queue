import { useEffect, useState } from 'react';
import { getHospitals } from '../api';

function HospitalSelect({ onNext }) {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHospitals().then((data) => {
      setHospitals(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="screen"><p>Loading hospitals...</p></div>;

  return (
    <div className="screen">
      <h2>Select Hospital</h2>
      <div className="option-list">
        {hospitals.map((h) => (
          <button key={h.hospitalId} className="option-card" onClick={() => onNext(h.hospitalId, h.name)}>
            {h.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HospitalSelect;