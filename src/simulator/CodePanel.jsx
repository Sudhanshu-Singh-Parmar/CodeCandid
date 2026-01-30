export default function CodePanel({ step }) {
  return (
    <pre className="code glass">
{`for i in range(n):
  // step ${step}`}
    </pre>
  );
}