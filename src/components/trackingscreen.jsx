import { useEffect, useState } from 'react';
import { getTokenStatus } from '../api';

function TrackingScreen({ token }) {
  const [current, setCurrent] = useState(token);

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const updated = await getTokenStatus(current.id);
      setCurrent((prev) => {
        if (updated.status === 'called' && prev.status !== 'called') {
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Your turn!', { body: `Please proceed to ${updated.roomNumber || 'the consultation room'}` });
          }
        }
        return updated;
      });
    }, 20000);
    return () => clearInterval(interval);
  }, [current.id]);

  if (current.status === 'called' || current.status === 'in_consultation') {
    return (
      <div className="screen proceed-screen">
        <h1>It's your turn!</h1>
        <h2>Please proceed to {current.roomNumber || 'the consultation room'}</h2>
        <p>Token: {current.tokenNumber}</p>
      </div>
    );
  }

  return (
    <div className="screen tracking-screen">
      <h1>Token: {current.tokenNumber}</h1>
      <p className="tracking-stat">People Ahead: {current.peopleAhead}</p>
      <p className="tracking-stat">Estimated Wait: {current.etaMinutes} min</p>
      {current.doctorName && <p className="tracking-sub">Doctor: {current.doctorName}</p>}
      {current.opdHours && <p className="tracking-sub">OPD Hours: {current.opdHours}</p>}
    </div>
  );
}

export default TrackingScreen;