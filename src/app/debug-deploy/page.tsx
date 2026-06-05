export default function Page() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Deployment Debug Page</h1>
      <p>Hash: 03eb458 + debug-deploy</p>
      <p>Current Time: {new Date().toISOString()}</p>
      <p>If you see this, the new deployment is LIVE.</p>
    </div>
  );
}
