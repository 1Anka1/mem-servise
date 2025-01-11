function Error404() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontSize: '50px',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Wrong page ❌
      </p>
    </div>
  );
}

export default Error404;
