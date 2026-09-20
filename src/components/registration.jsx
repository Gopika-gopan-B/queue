import { useState } from 'react';

function Registration({ onNext }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name: required, letters and spaces only, at least 2 characters
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) {
      newErrors.name = 'Enter a valid name (letters only)';
    }

    // Phone: required, exactly 10 digits (adjust if your region differs)
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    // Age: optional, but if entered must be a reasonable number
    if (age.trim() && (!/^\d+$/.test(age.trim()) || Number(age) < 1 || Number(age) > 120)) {
      newErrors.age = 'Enter a valid age';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      onNext({ name: name.trim(), phone: phone.trim(), age, gender });
    }
  };

  return (
    <div className="screen">
      <h2>Patient Details</h2>

      <label>Full Name *</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      <label>Phone Number *</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
        placeholder="10-digit phone number"
        maxLength={10}
      />
      {errors.phone && <p className="error-text">{errors.phone}</p>}

      <label>Age (optional)</label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
        placeholder="Age"
        maxLength={3}
      />
      {errors.age && <p className="error-text">{errors.age}</p>}

      <label>Gender (optional)</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default Registration;