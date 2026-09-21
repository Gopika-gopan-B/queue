function PatientTable() {
  return (
    <div className="patient-section">
      <h2>Patient Queue</h2>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>A001</td>
            <td>Rahul</td>
            <td>Dr. Thomas</td>
            <td>09:30 AM</td>
            <td>Waiting</td>
          </tr>

          <tr>
            <td>A002</td>
            <td>Anu</td>
            <td>Dr. Sarah</td>
            <td>09:45 AM</td>
            <td>In Consultation</td>
          </tr>

          <tr>
            <td>A003</td>
            <td>Arjun</td>
            <td>Dr. John</td>
            <td>10:00 AM</td>
            <td>Waiting</td>
          </tr>

          <tr>
            <td>A004</td>
            <td>Meera</td>
            <td>Dr. Thomas</td>
            <td>10:15 AM</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;