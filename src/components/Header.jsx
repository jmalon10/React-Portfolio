export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(to right, #333, #000)', // Dark grey to black gradient
      padding: '20px',
      textAlign: 'center',
      color: '#ff007f', // Neon pink text
      fontFamily: 'Verdana, sans-serif',
      borderBottom: '3px solid #ff007f', // Pink border at bottom
      boxShadow: '0px 4px 10px rgba(255, 0, 127, 0.5)', // Glowing effect
    }}>
      <h1 style={{
        fontSize: '3rem',
        margin: 0,
        letterSpacing: '3px',
        textShadow: '0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f',
      }}>
        Jacqueline Maloney
      </h1>
    </header>
  );
}

