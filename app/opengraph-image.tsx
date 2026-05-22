import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const alt = 'QTerra | Integrated Professional Services';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  let logoBase64 = '';
  try {
    // Read the logo from public directory and convert to base64 for embedding
    const logoPath = path.join(process.cwd(), 'public/images/og-logo.png');
    const logoBuffer = fs.readFileSync(logoPath);
    logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
  } catch (error) {
    console.error('Error loading logo for dynamic OG image:', error);
  }



  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0B0E0B 0%, #151B15 100%)',
          padding: '80px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {/* Background Grids */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            display: 'flex',
            backgroundImage: 'radial-gradient(circle, #A8D32E 1.2px, transparent 1.2px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Decorative Neon Accents */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '80px',
            height: '80px',
            borderTop: '3px solid #A8D32E',
            borderLeft: '3px solid #A8D32E',
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '80px',
            height: '80px',
            borderBottom: '3px solid #A8D32E',
            borderRight: '3px solid #A8D32E',
            opacity: 0.4,
          }}
        />

        {/* Left Column: Authentic Logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
          }}
        >
          {logoBase64 ? (
            <img
              src={logoBase64}
              alt="QTerra Logo"
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'contain',
              }}
            />
          ) : (
            <div style={{ color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>QTERRA</div>
          )}
        </div>

        {/* Neon Divider */}
        <div
          style={{
            width: '2px',
            height: '60%',
            background: 'linear-gradient(to bottom, transparent, rgba(168, 211, 46, 0.4), transparent)',
          }}
        />

        {/* Right Column: Text Information with precise Sora styling */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '55%',
            fontFamily: 'Sora, sans-serif',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#A8D32E',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '15px',
            }}
          >
            Integrated Professional Services
          </div>
          <div
            style={{
              fontSize: '44px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '20px',
            }}
          >
            Strategic Growth. Capability Development.
          </div>
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.6,
            }}
          >
            Advising governments, corporates, and development organizations across Africa.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
