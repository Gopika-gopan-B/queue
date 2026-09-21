function Appointments() {
  return (
    <div className="appointment-section">
      <h2>Today's Appointments</h2>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>09:30 AM</td>
            <td>Rahul</td>
            <td>Dr. Thomas</td>
            <td>Cardiology</td>
            <td>Confirmed</td>
          </tr>

          <tr>
            <td>10:00 AM</td>
            <td>Anu</td>
            <td>Dr. Sarah</td>
            <td>General Medicine</td>
            <td>Waiting</td>
          </tr>

          <tr>
            <td>10:30 AM</td>
            <td>Arjun</td>
            <td>Dr. John</td>
            <td>Orthopedics</td>
            <td>Confirmed</td>
          </tr>

          <tr>
            <td>11:00 AM</td>
            <td>Meera</td>
            <td>Dr. Thomas</td>
            <td>Cardiology</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;