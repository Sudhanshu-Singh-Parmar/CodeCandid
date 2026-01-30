export default function ControlBar({ step, setStep }) {
  return (
    <div className="controlbar glass">
      <button onClick={() => setStep(step - 1)} disabled={step === 0}>
        Prev
      </button>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  );
}