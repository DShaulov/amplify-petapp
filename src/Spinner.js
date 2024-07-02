const spinKeyframes = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const Spinner = () => (
  <>
    <style>{spinKeyframes}</style>
    <span 
      style={{
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border: '3px solid rgba(255,255,255,.3)',
        borderRadius: '50%',
        borderTopColor: '#fff',
        animation: 'spin 1s ease-in-out infinite',
      }}
    />
  </>
);