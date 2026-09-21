import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Hospital</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/patients">Patients</Link>
        </li>

        <li>
          <Link to="/doctors">Doctors</Link>
        </li>

        <li>
          <Link to="/appointments">Appointments</Link>
        </li>

        <li>
          <Link to="/queue">Queue</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;