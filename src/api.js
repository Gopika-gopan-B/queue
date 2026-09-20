export async function getHospitals() {
  return [
    { hospitalId: 'hosp_1', name: 'City General Hospital' },
    { hospitalId: 'hosp_2', name: "St. Mary's Clinic" },
    { hospitalId: 'hosp_3', name: 'Lakeside Medical Center' },
    { hospitalId: 'hosp_4', name: 'Sunrise Multispecialty Hospital' },
  ];
}

export async function getDepartments(hospitalId) {
  return [
    { departmentId: 'cardiology', name: 'Cardiology' },
    { departmentId: 'general', name: 'General Medicine' },
    { departmentId: 'orthopedics', name: 'Orthopedics' },
    { departmentId: 'pediatrics', name: 'Pediatrics' },
    { departmentId: 'dermatology', name: 'Dermatology' },
    { departmentId: 'ent', name: 'ENT (Ear, Nose & Throat)' },
    { departmentId: 'gynecology', name: 'Gynecology' },
    { departmentId: 'neurology', name: 'Neurology' },
    { departmentId: 'ophthalmology', name: 'Ophthalmology' },
    { departmentId: 'dentistry', name: 'Dentistry' },
    { departmentId: 'psychiatry', name: 'Psychiatry' },
    { departmentId: 'urology', name: 'Urology' },
  ];
}

export async function getDoctors(departmentId) {
  return [
    { doctorId: 'dr_nair', name: 'Dr. Nair', specialization: 'Cardiologist', opdHours: '9:00 AM - 1:00 PM', peopleWaiting: 6 },
    { doctorId: 'dr_menon', name: 'Dr. Menon', specialization: 'General Physician', opdHours: '10:00 AM - 2:00 PM', peopleWaiting: 3 },
    { doctorId: 'dr_pillai', name: 'Dr. Pillai', specialization: 'Orthopedic Surgeon', opdHours: '11:00 AM - 3:00 PM', peopleWaiting: 4 },
    { doctorId: 'dr_thomas', name: 'Dr. Thomas', specialization: 'Pediatrician', opdHours: '9:30 AM - 12:30 PM', peopleWaiting: 8 },
  ];
}

let mockCallCount = 0;
export async function generateToken(payload) {
  mockCallCount = 0;
  const randomNum = Math.floor(Math.random() * 50) + 1;
  return {
    id: 'mock_token_' + randomNum,
    tokenNumber: 'A' + randomNum,
    peopleAhead: Math.floor(Math.random() * 10) + 1,
    etaMinutes: Math.floor(Math.random() * 30) + 5,
    status: 'waiting',
    roomNumber: 'Room ' + (Math.floor(Math.random() * 6) + 1),
    doctorName: 'Dr. Nair',
    opdHours: '9:00 AM - 1:00 PM',
  };
}


export async function getTokenStatus(tokenId) {
  mockCallCount++;
  if (mockCallCount >= 3) {
    return { id: 'mock_token_1', tokenNumber: 'A27', peopleAhead: 0, etaMinutes: 0, status: 'called', roomNumber: 'Room 4', doctorName: 'Dr. Nair', opdHours: '9:00 AM - 1:00 PM' };
  }
  return {
    id: 'mock_token_1', tokenNumber: 'A27',
    peopleAhead: Math.max(0, 6 - mockCallCount * 2),
    etaMinutes: Math.max(0, 25 - mockCallCount * 8),
    status: 'waiting', roomNumber: 'Room 4', doctorName: 'Dr. Nair', opdHours: '9:00 AM - 1:00 PM',
  };
}