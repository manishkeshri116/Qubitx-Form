"use client"

import { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirm: false,
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Step {step}</h1>

      {step === 1 && (
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Confirm Details</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 3 && <button onClick={nextStep} style={{ marginLeft: 10 }}>Next</button>}
        {step === 3 && (
          <button onClick={() => alert("Form submitted!")} style={{ marginLeft: 10 }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
