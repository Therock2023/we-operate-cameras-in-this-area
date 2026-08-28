import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" width="1200" height="1500">
  <defs>
    <!-- Shadow for depth -->
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.15" />
    </filter>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0B192C" />
      <stop offset="100%" stop-color="#1E3E62" />
    </linearGradient>
  </defs>

  <!-- Outer background (White Sign with rounded corners) -->
  <rect x="20" y="20" width="1160" height="1460" rx="36" fill="#FFFFFF" stroke="#0B192C" stroke-width="18" />
  <rect x="44" y="44" width="1112" height="1412" rx="24" fill="none" stroke="#E2E8F0" stroke-width="4" />

  <!-- 4 Corner Mounting Hole Markers for Authentic Sign / Decal Look -->
  <circle cx="70" cy="70" r="14" fill="#CBD5E1" stroke="#0B192C" stroke-width="4"/>
  <circle cx="1130" cy="70" r="14" fill="#CBD5E1" stroke="#0B192C" stroke-width="4"/>
  <circle cx="70" cy="1430" r="14" fill="#CBD5E1" stroke="#0B192C" stroke-width="4"/>
  <circle cx="1130" cy="1430" r="14" fill="#CBD5E1" stroke="#0B192C" stroke-width="4"/>

  <!-- Top Warning Header Banner -->
  <path d="M 44 68 Q 44 44 68 44 L 1132 44 Q 1156 44 1156 68 L 1156 240 L 44 240 Z" fill="url(#headerGrad)" />

  <!-- Warning Header Text -->
  <text x="600" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="64" fill="#FFFFFF" text-anchor="middle" letter-spacing="10">SECURITY NOTICE</text>
  <text x="600" y="205" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="28" fill="#F1F5F9" text-anchor="middle" letter-spacing="4">24 HOUR CCTV SURVEILLANCE</text>

  <!-- CCTV Camera Illustration (Center) -->
  <g transform="translate(600, 470)">
    <!-- Base mounting bracket -->
    <path d="M-180 -100 L-100 -40 L-100 -10 L-180 -10 Z" fill="#0B192C" />
    <circle cx="-180" cy="-55" r="28" fill="#0B192C" />
    <circle cx="-180" cy="-55" r="12" fill="#FFFFFF" />

    <!-- Adjustable arm -->
    <path d="M-120 -30 L-30 0 L-30 40 L-120 10 Z" fill="#1E3E62" />
    <circle cx="-30" cy="20" r="22" fill="#0B192C" />

    <!-- Camera Housing -->
    <!-- Sun/Weather Shield (top) -->
    <path d="M-160 -110 L160 -40 L150 -10 L-160 -80 Z" fill="#0B192C" rx="6" />

    <!-- Main Camera Body -->
    <path d="M-140 -80 L130 -20 L110 90 L-140 30 Z" fill="#0B192C" />
    <!-- Highlight on body -->
    <path d="M-130 -65 L115 -10 L100 20 L-130 -35 Z" fill="#1E3E62" />

    <!-- Front Lens Bezel & Lens -->
    <ellipse cx="130" cy="35" rx="35" ry="55" fill="#0B192C" />
    <ellipse cx="130" cy="35" rx="26" ry="42" fill="#1E3E62" />
    <ellipse cx="130" cy="35" rx="16" ry="26" fill="#000000" />
    <ellipse cx="126" cy="30" rx="6" ry="10" fill="#38BDF8" opacity="0.8" />

    <!-- Status Indicator LED (Glowing Red) -->
    <circle cx="95" cy="-5" r="10" fill="#EF4444" />
    <circle cx="95" cy="-5" r="5" fill="#FCA5A5" />

    <!-- Surveillance / Recording Field Waves -->
    <path d="M 180 -20 A 140 140 0 0 1 240 90" fill="none" stroke="#0B192C" stroke-width="8" stroke-linecap="round" />
    <path d="M 210 -45 A 190 190 0 0 1 290 115" fill="none" stroke="#0B192C" stroke-width="8" stroke-linecap="round" />
    <path d="M 240 -70 A 240 240 0 0 1 340 140" fill="none" stroke="#0B192C" stroke-width="8" stroke-linecap="round" />
  </g>

  <!-- Divider Line -->
  <line x1="120" y1="730" x2="1080" y2="730" stroke="#0B192C" stroke-width="8" stroke-linecap="round" />

  <!-- Primary Headline -->
  <text x="600" y="850" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="76" fill="#0B192C" text-anchor="middle" letter-spacing="2">
    WE OPERATE
  </text>
  <text x="600" y="955" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="76" fill="#0B192C" text-anchor="middle" letter-spacing="2">
    CAMERAS
  </text>
  <text x="600" y="1060" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="76" fill="#0B192C" text-anchor="middle" letter-spacing="2">
    IN THIS AREA
  </text>

  <!-- Subtitle / Warning Details Box -->
  <rect x="100" y="1120" width="1000" height="230" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="4" />
  
  <text x="600" y="1190" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="34" fill="#0B192C" text-anchor="middle" letter-spacing="1">
    IMAGES &amp; VIDEO ARE BEING RECORDED
  </text>
  <text x="600" y="1250" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="28" fill="#475569" text-anchor="middle">
    FOR THE PURPOSE OF CRIME PREVENTION &amp; PUBLIC SAFETY
  </text>
  <text x="600" y="1305" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="600" font-size="22" fill="#64748B" text-anchor="middle" letter-spacing="1">
    AUTHORISED CLOSED CIRCUIT TELEVISION (CCTV) MONITORING
  </text>
</svg>`;

async function run() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Save SVG
  fs.writeFileSync(path.join(publicDir, 'we-operate-cameras-in-this-area.svg'), svg);

  // Generate crisp PNG (1200x1500)
  await sharp(Buffer.from(svg))
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'we-operate-cameras-in-this-area.png'));

  console.log('PNG and SVG successfully created in public/ directory!');
}

run().catch(console.error);
