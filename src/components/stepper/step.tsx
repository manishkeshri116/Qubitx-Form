"use client"

import React, { useState } from 'react';

// Step and form types
type StatusType = 'pending' | 'completed';
type StepTitle = 'Recipient' | 'Amount' | 'Details' | 'Review';

interface Step {
  title: StepTitle;
  status: StatusType;
}

interface FormData {
  recipient?: { name: string };
  amount?: number;
  details?: string;
}

// Component prop types
interface RecipientProps {
  onNext: () => void;
  onSelect: (data: { name: string }) => void;
}

interface AmountProps {
  onNext: () => void;
  onBack: () => void;
  formData: FormData;
  onUpdate: (amount: number) => void;
}

interface DetailsProps {
  onNext: () => void;
  onBack: () => void;
  formData: FormData;
  onUpdate: (details: string) => void;
}

interface ReviewProps {
  onBack: () => void;
  formData: FormData;
  onSubmit: () => void;
}

// Step components
const Recipient: React.FC<RecipientProps> = ({ onNext, onSelect }) => (
  <div className="p-4 border rounded">
    <h2>Recipient Step</h2>
    <button
      onClick={() => {
        onSelect({ name: 'John' });
        onNext();
      }}
    >
      Next
    </button>
  </div>
);

const Amount: React.FC<AmountProps> = ({ onNext, onBack, formData, onUpdate }) => (
  <div className="p-4 border rounded">
    <h2>Amount Step</h2>
    <p>Recipient: {formData.recipient?.name}</p>
    <button onClick={onBack}>Back</button>
    <button
      onClick={() => {
        onUpdate(100);
        onNext();
      }}
    >
      Next
    </button>
  </div>
);

const Details: React.FC<DetailsProps> = ({ onNext, onBack, formData, onUpdate }) => (
  <div className="p-4 border rounded">
    <h2>Details Step</h2>
    <p>Amount: {formData.amount}</p>
    <button onClick={onBack}>Back</button>
    <button
      onClick={() => {
        onUpdate('Transfer');
        onNext();
      }}
    >
      Next
    </button>
  </div>
);

const Review: React.FC<ReviewProps> = ({ onBack, formData, onSubmit }) => (
  <div className="p-4 border rounded">
    <h2>Review</h2>
    <pre>{JSON.stringify(formData, null, 2)}</pre>
    <button onClick={onBack}>Back</button>
    <button onClick={onSubmit}>Submit</button>
  </div>
);

// Main form component
const StepForm: React.FC = () => {
  const initialSteps: Step[] = [
    { title: 'Recipient', status: 'pending' },
    { title: 'Amount', status: 'pending' },
    { title: 'Details', status: 'pending' },
    { title: 'Review', status: 'pending' },
  ];

  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({});

  const update = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const startForm = () => {
    setActiveStepIndex(0);
    setSteps(initialSteps);
  };

  const handleNext = () => {
    if (activeStepIndex === null) return;

    const updatedSteps = steps.map((step, idx) =>
      idx === activeStepIndex ? { ...step, status: 'completed' as StatusType } : step
    );

    setSteps(updatedSteps);

    const nextIndex = activeStepIndex + 1;
    if (nextIndex < steps.length) {
      setActiveStepIndex(nextIndex);
    } else {
      // Form finished
      setActiveStepIndex(null);
      setFormData({});
    }
  };

  const handleBack = () => {
    if (activeStepIndex !== null && activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  const activeStep = activeStepIndex !== null ? steps[activeStepIndex] : null;

  return (
    <div className="max-w-md mx-auto p-6">
      {!activeStep && (
        <button
          onClick={startForm}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send Money
        </button>
      )}

      {activeStep && (
        <div className="mb-4 flex justify-between">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`px-2 py-1 border rounded 
                ${idx === activeStepIndex ? 'bg-blue-200' : ''}
                ${step.status === 'completed' ? 'bg-green-200' : ''}
              `}
            >
              {step.title} ({step.status})
            </div>
          ))}
        </div>
      )}

      {activeStep?.title === 'Recipient' && (
        <Recipient
          onNext={handleNext}
          onSelect={(data) => update({ recipient: data })}
        />
      )}

      {activeStep?.title === 'Amount' && (
        <Amount
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
          onUpdate={(amount) => update({ amount })}
        />
      )}

      {activeStep?.title === 'Details' && (
        <Details
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
          onUpdate={(details) => update({ details })}
        />
      )}

      {activeStep?.title === 'Review' && (
        <Review
          formData={formData}
          onBack={handleBack}
          onSubmit={() => {
            console.log('Submitted:', formData);
            setActiveStepIndex(null);
            setFormData({});
            setSteps(initialSteps);
          }}
        />
      )}
    </div>
  );
};

export default StepForm;
