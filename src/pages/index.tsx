import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <h1>Roey Zalta</h1>
      <Image
        src="https://media.licdn.com/dms/image/C5603AQF2wKkKkKkKkA/profile-photo.jpg"
        alt="Roey Zalta LinkedIn Profile Photo"
        width={200}
        height={200}
        style={{ borderRadius: '50%' }}
      />
      <a
        href="https://linkedin.com/in/roey-zalta"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#0077b5', textDecoration: 'underline' }}
      >
        View LinkedIn Profile
      </a>
    </main>
  );
}
