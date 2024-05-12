import backgroundSvg from '/home/adi/blackred/public/wave-haikei.svg';
import Compress from './compress';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSvg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>
        Blackred
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem' }}>
        Compress your PDF
      </h2>
      <Compress />
    </div>
  );
}