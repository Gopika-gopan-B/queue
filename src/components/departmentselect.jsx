import { useEffect, useState } from 'react';
import { getDepartments } from '../api';

function DepartmentSelect({ hospitalId, onNext }) {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDepartments(hospitalId).then((data) => {
      setDepartments(data);
      setLoading(false);
    });
  }, [hospitalId]);

  if (loading) return <div className="screen"><p>Loading departments...</p></div>;

  return (
    <div className="screen">
      <h2>Select Department</h2>
      <div className="option-list">
        {departments.map((d) => (
          <button key={d.departmentId} className="option-card" onClick={() => onNext(d.departmentId, d.name)}>
            {d.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DepartmentSelect;