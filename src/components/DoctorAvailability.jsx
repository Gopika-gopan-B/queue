function DoctorAvailability() {
  return (
    <div className="doctor-section">
      <h2>Doctor Availability</h2>

      <div className="doctor-list">

        <div className="doctor-card">
          <div>
            <h3>Dr. Thomas</h3>
            <p>Cardiology</p>
          </div>
          <span className="status available">Available</span>
        </div>

        <div className="doctor-card">
          <div>
            <h3>Dr. Sarah</h3>
            <p>General Medicine</p>
          </div>
          <span className="status busy">Busy</span>
        </div>

        <div className="doctor-card">
          <div>
            <h3>Dr. John</h3>
            <p>Orthopedics</p>
          </div>
          <span className="status available">Available</span>
        </div>

        <div className="doctor-card">
          <div>
            <h3>Dr. Meera</h3>
            <p>Dermatology</p>
          </div>
          <span className="status offline">Offline</span>
        </div>

      </div>
    </div>
  );
}

export default DoctorAvailability;