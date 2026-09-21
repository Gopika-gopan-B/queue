function StatCard({ title, value }) {
  return (
    <div className="stat-card">

      <h3>{title}</h3>

      <p>{value}</p>

      <span className="stat-info">
        Updated today
      </span>

    </div>
  );
}

export default StatCard;