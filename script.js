/**
 * iPhone 16 Pro Mockup Studio & Embed Generator
 * Handles image replacement, screen sharing (WebRTC getDisplayMedia),
 * 3D parallax tilt, dynamic island interaction, and high-res export.
 */

// Preset screens generated as clean standalone SVG Data URIs
const PRESET_SCREENS = {
  crypto: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 775" width="380" height="775">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0c0e17"/>
          <stop offset="100%" stop-color="#141829"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#a855f7"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <!-- Header -->
      <text x="32" y="90" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="14" font-weight="500">Welcome Back,</text>
      <text x="32" y="118" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="22" font-weight="700">Alex Morgan</text>
      <circle cx="340" cy="105" r="20" fill="#312e81"/>
      <text x="340" y="111" fill="#c7d2fe" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" text-anchor="middle">AM</text>
      <!-- Balance Card -->
      <rect x="24" y="145" width="332" height="185" rx="24" fill="url(#cardGrad)"/>
      <text x="50" y="185" fill="#e0e7ff" font-family="-apple-system, sans-serif" font-size="13" font-weight="500">Total Portfolio Value</text>
      <text x="50" y="225" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="32" font-weight="800">$48,295.80</text>
      <rect x="50" y="245" width="80" height="26" rx="13" fill="rgba(255,255,255,0.2)"/>
      <text x="90" y="262" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">+ 14.8% ↑</text>
      <text x="50" y="305" fill="#e0e7ff" font-family="-apple-system, sans-serif" font-size="13">•••• 8492</text>
      <text x="310" y="305" fill="#e0e7ff" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" text-anchor="end">VISA</text>
      <!-- Quick Actions -->
      <g transform="translate(24, 355)">
        <rect x="0" y="0" width="72" height="72" rx="18" fill="#1e2438"/>
        <text x="36" y="42" fill="#818cf8" font-size="22" text-anchor="middle">↑</text>
        <text x="36" y="92" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">Send</text>

        <rect x="86" y="0" width="72" height="72" rx="18" fill="#1e2438"/>
        <text x="122" y="42" fill="#34d399" font-size="22" text-anchor="middle">↓</text>
        <text x="122" y="92" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">Receive</text>

        <rect x="172" y="0" width="72" height="72" rx="18" fill="#1e2438"/>
        <text x="208" y="42" fill="#fbbf24" font-size="22" text-anchor="middle">⇄</text>
        <text x="208" y="92" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">Swap</text>

        <rect x="258" y="0" width="72" height="72" rx="18" fill="#1e2438"/>
        <text x="294" y="42" fill="#f472b6" font-size="22" text-anchor="middle">+</text>
        <text x="294" y="92" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">More</text>
      </g>
      <!-- Recent Transactions Header -->
      <text x="28" y="490" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="18" font-weight="700">Recent Activity</text>
      <text x="350" y="490" fill="#818cf8" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" text-anchor="end">See all</text>
      <!-- Item 1 -->
      <rect x="24" y="515" width="332" height="66" rx="18" fill="#181d2f"/>
      <circle cx="58" cy="548" r="18" fill="#000000"/>
      <text x="58" y="554" fill="#ffffff" font-size="16" text-anchor="middle">🍎</text>
      <text x="90" y="542" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">Apple Store</text>
      <text x="90" y="561" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12">Electronics • Today</text>
      <text x="336" y="552" fill="#f87171" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" text-anchor="end">-$1,199.00</text>
      <!-- Item 2 -->
      <rect x="24" y="595" width="332" height="66" rx="18" fill="#181d2f"/>
      <circle cx="58" cy="628" r="18" fill="#059669"/>
      <text x="58" y="634" fill="#ffffff" font-size="16" text-anchor="middle">📈</text>
      <text x="90" y="622" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">Dividend Payout</text>
      <text x="90" y="641" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12">Investment • Yesterday</text>
      <text x="336" y="632" fill="#34d399" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" text-anchor="end">+$450.25</text>
      <!-- Item 3 -->
      <rect x="24" y="675" width="332" height="66" rx="18" fill="#181d2f"/>
      <circle cx="58" cy="708" r="18" fill="#d97706"/>
      <text x="58" y="714" fill="#ffffff" font-size="16" text-anchor="middle">☕</text>
      <text x="90" y="702" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">Starbucks Coffee</text>
      <text x="90" y="721" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12">Food & Drinks • Oct 20</text>
      <text x="336" y="712" fill="#f87171" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" text-anchor="end">-$6.80</text>
    </svg>
  `)}`,

  social: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 775" width="380" height="775">
      <defs>
        <linearGradient id="storyBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="50%" stop-color="#ec4899"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#0a0a0c"/>
      <!-- Top Bar -->
      <text x="28" y="95" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="22" font-weight="800">Moments</text>
      <text x="348" y="95" fill="#ffffff" font-size="20" text-anchor="end">💬</text>
      <text x="305" y="95" fill="#ffffff" font-size="20" text-anchor="end">❤️</text>
      <!-- Stories Bar -->
      <g transform="translate(24, 120)">
        <circle cx="32" cy="32" r="30" stroke="url(#storyBorder)" stroke-width="3" fill="#1e1e24"/>
        <text x="32" y="38" fill="#fff" font-size="22" text-anchor="middle">🏄‍♂️</text>
        <text x="32" y="78" fill="#9ca3af" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">Your Story</text>

        <circle cx="106" cy="32" r="30" stroke="url(#storyBorder)" stroke-width="3" fill="#1e1e24"/>
        <text x="106" y="38" fill="#fff" font-size="22" text-anchor="middle">👩‍🎨</text>
        <text x="106" y="78" fill="#9ca3af" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">sarah_d</text>

        <circle cx="180" cy="32" r="30" stroke="url(#storyBorder)" stroke-width="3" fill="#1e1e24"/>
        <text x="180" y="38" fill="#fff" font-size="22" text-anchor="middle">🏔️</text>
        <text x="180" y="78" fill="#9ca3af" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">climb_pro</text>

        <circle cx="254" cy="32" r="30" stroke="url(#storyBorder)" stroke-width="3" fill="#1e1e24"/>
        <text x="254" y="38" fill="#fff" font-size="22" text-anchor="middle">🚀</text>
        <text x="254" y="78" fill="#9ca3af" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">technow</text>
      </g>
      <!-- Post Card -->
      <g transform="translate(20, 225)">
        <circle cx="22" cy="22" r="18" fill="#3b82f6"/>
        <text x="22" y="27" fill="#fff" font-size="14" font-weight="700" text-anchor="middle">JP</text>
        <text x="50" y="20" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="14" font-weight="700">jordan_pixels</text>
        <text x="50" y="36" fill="#9ca3af" font-family="-apple-system, sans-serif" font-size="11">Tokyo, Japan</text>
        <text x="330" y="25" fill="#9ca3af" font-size="16" text-anchor="end">•••</text>
        <!-- Post Image -->
        <rect x="0" y="55" width="340" height="290" rx="16" fill="#1e293b"/>
        <circle cx="170" cy="180" r="70" fill="#f43f5e" opacity="0.8"/>
        <polygon points="120,290 220,180 320,290" fill="#0f172a"/>
        <polygon points="30,290 120,210 210,290" fill="#1e293b"/>
        <text x="170" y="325" fill="#f8fafc" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Golden Hour in Shibuya</text>
      </g>
      <!-- Post Actions -->
      <g transform="translate(24, 595)">
        <text x="0" y="16" fill="#ef4444" font-size="22">❤️</text>
        <text x="38" y="16" fill="#ffffff" font-size="22">💬</text>
        <text x="76" y="16" fill="#ffffff" font-size="22">↗️</text>
        <text x="330" y="16" fill="#ffffff" font-size="22" text-anchor="end">🔖</text>
        <text x="0" y="44" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="13" font-weight="700">1,842 likes</text>
        <text x="0" y="64" fill="#d1d5db" font-family="-apple-system, sans-serif" font-size="13"><tspan font-weight="700" fill="#fff">jordan_pixels</tspan> The neon city comes alive at night ✨</text>
      </g>
    </svg>
  `)}`,

  fitness: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 775" width="380" height="775">
      <rect width="100%" height="100%" fill="#000000"/>
      <text x="28" y="95" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="26" font-weight="800">Activity</text>
      <text x="352" y="95" fill="#a1a1aa" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" text-anchor="end">Today</text>
      <!-- Activity Rings -->
      <g transform="translate(190, 230)">
        <circle cx="0" cy="0" r="95" fill="none" stroke="#374151" stroke-width="18"/>
        <circle cx="0" cy="0" r="95" fill="none" stroke="#fa114f" stroke-width="18" stroke-dasharray="597" stroke-dashoffset="140" stroke-linecap="round" transform="rotate(-90)"/>
        
        <circle cx="0" cy="0" r="72" fill="none" stroke="#1f2937" stroke-width="18"/>
        <circle cx="0" cy="0" r="72" fill="none" stroke="#a1f43a" stroke-width="18" stroke-dasharray="452" stroke-dashoffset="80" stroke-linecap="round" transform="rotate(-90)"/>
        
        <circle cx="0" cy="0" r="49" fill="none" stroke="#111827" stroke-width="18"/>
        <circle cx="0" cy="0" r="49" fill="none" stroke="#00d7fb" stroke-width="18" stroke-dasharray="307" stroke-dashoffset="60" stroke-linecap="round" transform="rotate(-90)"/>
      </g>
      <!-- Metrics Card -->
      <rect x="24" y="375" width="332" height="100" rx="20" fill="#18181b"/>
      <text x="44" y="415" fill="#fa114f" font-family="-apple-system, sans-serif" font-size="14" font-weight="700">MOVE</text>
      <text x="44" y="445" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="28" font-weight="800">680 / 800 <tspan font-size="16" fill="#a1a1aa">CAL</tspan></text>
      
      <rect x="24" y="490" width="332" height="100" rx="20" fill="#18181b"/>
      <text x="44" y="530" fill="#a1f43a" font-family="-apple-system, sans-serif" font-size="14" font-weight="700">EXERCISE</text>
      <text x="44" y="560" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="28" font-weight="800">42 / 30 <tspan font-size="16" fill="#a1a1aa">MIN</tspan></text>

      <rect x="24" y="605" width="332" height="100" rx="20" fill="#18181b"/>
      <text x="44" y="645" fill="#00d7fb" font-family="-apple-system, sans-serif" font-size="14" font-weight="700">STAND</text>
      <text x="44" y="675" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="28" font-weight="800">10 / 12 <tspan font-size="16" fill="#a1a1aa">HRS</tspan></text>
    </svg>
  `)}`,

  music: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 775" width="380" height="775">
      <defs>
        <radialGradient id="musicGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#4c1d95"/>
          <stop offset="70%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
        <linearGradient id="albumCover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ec4899"/>
          <stop offset="50%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#musicGlow)"/>
      <!-- Nav -->
      <text x="32" y="95" fill="#cbd5e1" font-size="20">⌄</text>
      <text x="190" y="92" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="1" text-anchor="middle">PLAYING FROM PLAYLIST</text>
      <text x="190" y="108" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Deep Focus Beats</text>
      <text x="348" y="95" fill="#cbd5e1" font-size="16" text-anchor="end">•••</text>
      <!-- Album Art -->
      <rect x="40" y="150" width="300" height="300" rx="24" fill="url(#albumCover)"/>
      <circle cx="190" cy="300" r="60" fill="rgba(255,255,255,0.15)"/>
      <circle cx="190" cy="300" r="25" fill="#0f172a"/>
      <!-- Track Meta -->
      <text x="40" y="500" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="22" font-weight="800">Midnight Reverie</text>
      <text x="40" y="525" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="16">Solaris Waves</text>
      <text x="340" y="515" fill="#ec4899" font-size="22" text-anchor="end">♥</text>
      <!-- Scrubber -->
      <rect x="40" y="570" width="300" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="40" y="570" width="180" height="4" rx="2" fill="#ffffff"/>
      <circle cx="220" cy="572" r="6" fill="#ffffff"/>
      <text x="40" y="595" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12">2:18</text>
      <text x="340" y="595" fill="#94a3b8" font-family="-apple-system, sans-serif" font-size="12" text-anchor="end">-1:42</text>
      <!-- Play Controls -->
      <g transform="translate(190, 660)">
        <text x="-90" y="12" fill="#ffffff" font-size="26" text-anchor="middle">⏮</text>
        <circle cx="0" cy="0" r="32" fill="#ffffff"/>
        <polygon points="-8,-12 14,0 -8,12" fill="#0f172a"/>
        <text x="90" y="12" fill="#ffffff" font-size="26" text-anchor="middle">⏭</text>
      </g>
    </svg>
  `)}`,

  wallpaper: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 775" width="380" height="775">
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#050505"/>
          <stop offset="35%" stop-color="#2e1065"/>
          <stop offset="70%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#wallGrad)"/>
      <circle cx="190" cy="380" r="140" fill="rgba(217, 70, 239, 0.35)" filter="blur(40px)"/>
      <circle cx="120" cy="280" r="90" fill="rgba(56, 189, 248, 0.4)" filter="blur(35px)"/>
      <!-- Lockscreen Clock -->
      <text x="190" y="185" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="76" font-weight="200" letter-spacing="-1" text-anchor="middle">09:41</text>
      <text x="190" y="105" fill="#e2e8f0" font-family="-apple-system, sans-serif" font-size="16" font-weight="500" text-anchor="middle">Wednesday, October 21</text>
      <!-- Bottom Lockscreen Shortcuts -->
      <circle cx="56" cy="690" r="24" fill="rgba(0,0,0,0.4)"/>
      <text x="56" y="696" fill="#fff" font-size="18" text-anchor="middle">🔦</text>
      <circle cx="324" cy="690" r="24" fill="rgba(0,0,0,0.4)"/>
      <text x="324" y="696" fill="#fff" font-size="18" text-anchor="middle">📷</text>
    </svg>
  `)}`
};

// DOM References
const iphoneDevice = document.getElementById('iphone-device');
const screenLayer = document.getElementById('screen-layer');
const screenImg = document.getElementById('screen-image');
const screenVideo = document.getElementById('screen-video');
const fileInput = document.getElementById('file-input');
const dropzone = document.getElementById('dropzone');
const btnScreenShare = document.getElementById('btn-screen-share');
const btnQuickShare = document.getElementById('btn-quick-share');
const screenShareText = document.getElementById('screen-share-text');
const imageUrlInput = document.getElementById('image-url-input');
const btnApplyUrl = document.getElementById('btn-apply-url');
const toggleGlare = document.getElementById('toggle-glare');
const screenGlare = document.getElementById('screen-glare');
const toggleIslandExpand = document.getElementById('toggle-island-expand');
const dynamicIsland = document.getElementById('dynamic-island');
const fitMode = document.getElementById('fit-mode');
const scaleRange = document.getElementById('scale-range');
const scaleValue = document.getElementById('scale-value');
const stageViewport = document.getElementById('stage-viewport');
const btnExportPng = document.getElementById('btn-export-png');
const mockupExportTarget = document.getElementById('mockup-export-target');
const btnOpenEmbed = document.getElementById('btn-open-embed');
const btnCloseModal = document.getElementById('btn-close-modal');
const embedModal = document.getElementById('embed-modal');
const embedCodeSnippet = document.getElementById('embed-code-snippet');
const btnCopyCode = document.getElementById('btn-copy-code');
const toast = document.getElementById('toast');
const presetButtons = document.querySelectorAll('.preset-btn');
const finishChips = document.querySelectorAll('.finish-chip');
const stageThemeButtons = document.querySelectorAll('.stage-theme-btn');
const btnResetView = document.getElementById('btn-toggle-camera-control');

// State Variables
let currentScreenStream = null;
let currentFinish = 'natural';
let currentScale = 0.85;
let isIslandExpanded = false;

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  // Set default initial preset
  setScreenImage(PRESET_SCREENS.crypto);

  // Attach all event listeners
  setupScreenReplacement();
  setupScreenSharing();
  setupAppearanceControls();
  setupEmbedModal();
  setupExport();
  updateMockupScale(currentScale);
}

// ==========================================================================
// Screen Content Replacement (Upload, Presets, URL, Drag & Drop)
// ==========================================================================
function setupScreenReplacement() {
  // Preset buttons
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetKey = btn.dataset.preset;
      if (PRESET_SCREENS[presetKey]) {
        stopScreenShare();
        setScreenImage(PRESET_SCREENS[presetKey]);
        showToast(`Loaded ${btn.textContent} preset screen`);
      }
    });
  });

  // Dropzone click -> file input
  dropzone.addEventListener('click', () => fileInput.click());

  // File input change
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleImageFile(file);
  });

  // Drag and Drop onto dropzone
  ['dragenter', 'dragover'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    } else {
      showToast('Please drop a valid image file');
    }
  });

  // ALSO support Drag and Drop DIRECTLY onto the iPhone screen!
  const screenElem = document.getElementById('device-screen');
  if (screenElem) {
    screenElem.addEventListener('dragover', (e) => {
      e.preventDefault();
      screenElem.style.outline = '3px solid #6366f1';
    });
    screenElem.addEventListener('dragleave', () => {
      screenElem.style.outline = 'none';
    });
    screenElem.addEventListener('drop', (e) => {
      e.preventDefault();
      screenElem.style.outline = 'none';
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleImageFile(file);
      }
    });
  }

  // URL apply button
  btnApplyUrl.addEventListener('click', () => {
    const url = imageUrlInput.value.trim();
    if (url) {
      stopScreenShare();
      setScreenImage(url);
      presetButtons.forEach(b => b.classList.remove('active'));
      showToast('Loaded screen from URL');
    }
  });

  imageUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btnApplyUrl.click();
  });
}

function handleImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    stopScreenShare();
    setScreenImage(e.target.result);
    presetButtons.forEach(b => b.classList.remove('active'));
    showToast(`Loaded ${file.name}`);
  };
  reader.readAsDataURL(file);
}

function setScreenImage(src) {
  screenImg.crossOrigin = 'anonymous';
  screenImg.src = src;
  screenImg.classList.remove('visually-hidden');
  screenVideo.classList.add('visually-hidden');
}

// ==========================================================================
// Live Screen Sharing (WebRTC navigator.mediaDevices.getDisplayMedia)
// Allows sharing mobile browser window, mirrored iPhone, or desktop
// ==========================================================================
function setupScreenSharing() {
  const toggleShare = async () => {
    if (currentScreenStream) {
      stopScreenShare();
      showToast('Live screen share stopped');
    } else {
      await startScreenShare();
    }
  };

  btnScreenShare.addEventListener('click', toggleShare);
  if (btnQuickShare) btnQuickShare.addEventListener('click', toggleShare);
}

async function startScreenShare() {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      alert('Screen sharing is not supported in this browser environment.');
      return;
    }

    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        cursor: 'always',
        displaySurface: 'monitor'
      },
      audio: false
    });

    currentScreenStream = stream;
    screenVideo.srcObject = stream;
    screenVideo.classList.remove('visually-hidden');
    screenImg.classList.add('visually-hidden');

    btnScreenShare.classList.add('recording');
    screenShareText.textContent = 'Stop Sharing Screen';

    showToast('Live screen mirroring active!');

    // Handle user stopping share via browser native banner
    stream.getVideoTracks()[0].addEventListener('ended', () => {
      stopScreenShare();
    });
  } catch (err) {
    if (err.name !== 'NotAllowedError') {
      console.error('Error sharing screen:', err);
      showToast('Could not start screen share: ' + err.message);
    }
  }
}

function stopScreenShare() {
  if (currentScreenStream) {
    currentScreenStream.getTracks().forEach(track => track.stop());
    currentScreenStream = null;
    screenVideo.srcObject = null;
  }
  screenVideo.classList.add('visually-hidden');
  screenImg.classList.remove('visually-hidden');
  btnScreenShare.classList.remove('recording');
  screenShareText.textContent = 'Share Live Screen / Phone';
}

// ==========================================================================
// Appearance & Customization Controls
// ==========================================================================
function setupAppearanceControls() {
  // Device Titanium Finish Selector
  finishChips.forEach(chip => {
    chip.addEventListener('click', () => {
      finishChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const finish = chip.dataset.color;
      currentFinish = finish;
      
      // Update device class
      iphoneDevice.className = `iphone-16-pro ${finish}-titanium`;
      showToast(`Selected ${chip.textContent.trim()} Titanium`);
    });
  });

  // Glare / Reflection toggle
  toggleGlare.addEventListener('change', (e) => {
    screenGlare.classList.toggle('hidden', !e.target.checked);
  });

  // Dynamic Island interactive expand
  dynamicIsland.addEventListener('click', () => {
    isIslandExpanded = !isIslandExpanded;
    dynamicIsland.classList.toggle('expanded', isIslandExpanded);
    toggleIslandExpand.checked = isIslandExpanded;
  });

  toggleIslandExpand.addEventListener('change', (e) => {
    isIslandExpanded = e.target.checked;
    dynamicIsland.classList.toggle('expanded', isIslandExpanded);
  });

  // Fit mode (Cover / Contain / Scrollable)
  fitMode.addEventListener('change', (e) => {
    screenLayer.classList.remove('fit-cover', 'fit-contain', 'fit-scrollable');
    screenLayer.classList.add(`fit-${e.target.value}`);
  });

  // Scale range slider
  scaleRange.addEventListener('input', (e) => {
    currentScale = parseFloat(e.target.value);
    scaleValue.textContent = `${Math.round(currentScale * 100)}%`;
    updateMockupScale(currentScale);
  });

  // Reset view button
  if (btnResetView) {
    btnResetView.addEventListener('click', () => {
      currentScale = 0.85;
      scaleRange.value = currentScale;
      scaleValue.textContent = '85%';
      updateMockupScale(currentScale);
      iphoneDevice.style.transform = `scale(${currentScale}) rotateX(0deg) rotateY(0deg)`;
      showToast('View reset');
    });
  }

  // Stage theme buttons
  stageThemeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      stageThemeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const stage = btn.dataset.stage;
      stageViewport.className = `stage-viewport stage-${stage}`;
    });
  });
}

function updateMockupScale(scale) {
  iphoneDevice.style.transform = `scale(${scale})`;
}

// ==========================================================================
// Embed Code Modal & Snippet Generation
// ==========================================================================
function setupEmbedModal() {
  btnOpenEmbed.addEventListener('click', () => {
    generateEmbedSnippet();
    embedModal.classList.add('open');
  });

  btnCloseModal.addEventListener('click', () => {
    embedModal.classList.remove('open');
  });

  embedModal.addEventListener('click', (e) => {
    if (e.target === embedModal) embedModal.classList.remove('open');
  });

  btnCopyCode.addEventListener('click', () => {
    const code = embedCodeSnippet.textContent;
    navigator.clipboard.writeText(code).then(() => {
      btnCopyCode.textContent = 'Copied!';
      showToast('Embed code copied to clipboard!');
      setTimeout(() => {
        btnCopyCode.textContent = 'Copy Code';
      }, 2000);
    }).catch(() => {
      showToast('Press Ctrl+C to copy code');
    });
  });
}

function generateEmbedSnippet() {
  const currentSrc = screenImg.src.startsWith('data:') ? 'YOUR_SCREEN_IMAGE.jpg' : screenImg.src;

  const code = `<!-- ==========================================
     iPhone 16 Pro Mockup Component for Your Website
     Drop this snippet anywhere on your website!
     To change the screen: replace "YOUR_SCREEN_IMAGE.jpg"
     ========================================== -->
<div class="iphone-16-pro ${currentFinish}-titanium">
  <div class="chassis">
    <!-- Hardware Buttons -->
    <div class="hardware-button action-button"></div>
    <div class="hardware-button volume-up"></div>
    <div class="hardware-button volume-down"></div>
    <div class="hardware-button power-button"></div>
    <div class="hardware-button camera-control"></div>

    <div class="bezel">
      <div class="screen">
        <!-- Dynamic Island -->
        <div class="dynamic-island">
          <div class="island-camera"></div>
          <div class="island-sensor"></div>
        </div>

        <!-- Your Screen Image -->
        <div class="screen-content-layer fit-cover">
          <img src="${currentSrc}" alt="Screen Preview" class="screen-media">
        </div>

        <!-- Realistic Glass Reflection -->
        <div class="screen-reflection"></div>

        <!-- Home Indicator -->
        <div class="home-indicator"></div>
      </div>
    </div>
  </div>
</div>

<!-- Include the CSS stylesheet or link style.css in your head -->
<link rel="stylesheet" href="style.css">`;

  embedCodeSnippet.textContent = code;
}

// ==========================================================================
// High-Precision Native Canvas Mockup Exporter (2x Retina Quality)
// Replaces fragile html2canvas with 100% reliable, zero-artifact canvas rendering
// ==========================================================================
const FINISH_PALETTES = {
  natural: {
    rim: ['#ded6cc', '#aa9f92', '#766d62', '#c5bbb0'],
    button: '#9c9184',
    innerBezelHighlight: 'rgba(255, 255, 255, 0.45)'
  },
  black: {
    rim: ['#4f4f54', '#29292c', '#151517', '#3e3e42'],
    button: '#38383c',
    innerBezelHighlight: 'rgba(255, 255, 255, 0.2)'
  },
  white: {
    rim: ['#ffffff', '#e2e4e8', '#b8bcc4', '#f0f2f5'],
    button: '#c9ccd4',
    innerBezelHighlight: 'rgba(255, 255, 255, 0.7)'
  },
  desert: {
    rim: ['#eed5c2', '#c49f85', '#8f6f57', '#d8baa5'],
    button: '#aa866e',
    innerBezelHighlight: 'rgba(255, 240, 230, 0.45)'
  }
};

function drawCanvasRoundRect(ctx, x, y, width, height, radius) {
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function renderMockupToCanvas() {
  const canvas = document.createElement('canvas');
  // Dimensions for high-res 2x export tightly fitted around phone + hardware buttons
  const phoneW = 760;
  const phoneH = 1550;
  const padX = 16;
  const padY = 16;
  canvas.width = phoneW + padX * 2;
  canvas.height = phoneH + padY * 2;

  const ctx = canvas.getContext('2d');
  const ox = padX;
  const oy = padY;

  // 1. Transparent Background (True Alpha Channel PNG)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const toggleTransparent = document.getElementById('toggle-transparent-export');
  const forceTransparent = !toggleTransparent || toggleTransparent.checked;

  if (!forceTransparent) {
    if (stageViewport.classList.contains('stage-mesh')) {
      const bgGrad = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 50, canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.7);
      bgGrad.addColorStop(0, '#131722');
      bgGrad.addColorStop(1, '#08090d');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (stageViewport.classList.contains('stage-light')) {
      const bgGrad = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.35, 100, canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.8);
      bgGrad.addColorStop(0, '#f8fafc');
      bgGrad.addColorStop(1, '#cbd5e1');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (!stageViewport.classList.contains('stage-transparent')) {
      const bgGrad = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.4, 100, canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.85);
      bgGrad.addColorStop(0, '#1e2430');
      bgGrad.addColorStop(1, '#090a0f');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  const palette = FINISH_PALETTES[currentFinish] || FINISH_PALETTES.natural;

  // 2. Hardware Buttons
  ctx.fillStyle = palette.button;
  // Action button (Left)
  drawCanvasRoundRect(ctx, ox - 8, oy + 210, 8, 56, 4);
  ctx.fill();
  // Volume Up (Left)
  drawCanvasRoundRect(ctx, ox - 8, oy + 304, 8, 104, 4);
  ctx.fill();
  // Volume Down (Left)
  drawCanvasRoundRect(ctx, ox - 8, oy + 436, 8, 104, 4);
  ctx.fill();
  // Power / Side Button (Right)
  drawCanvasRoundRect(ctx, ox + phoneW, oy + 310, 8, 156, 4);
  ctx.fill();
  // Camera Control (Right)
  ctx.fillStyle = '#2d2d30';
  drawCanvasRoundRect(ctx, ox + phoneW, oy + 1090, 6, 136, 3);
  ctx.fill();

  // 3. Titanium Outer Frame
  const rimGrad = ctx.createLinearGradient(ox, oy, ox + phoneW, oy + phoneH);
  rimGrad.addColorStop(0, palette.rim[0]);
  rimGrad.addColorStop(0.35, palette.rim[1]);
  rimGrad.addColorStop(0.7, palette.rim[2]);
  rimGrad.addColorStop(1, palette.rim[3]);
  ctx.fillStyle = rimGrad;
  drawCanvasRoundRect(ctx, ox, oy, phoneW, phoneH, 108);
  ctx.fill();

  // 4. Antenna Bands
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.fillRect(ox, oy + 140, 7, 6);
  ctx.fillRect(ox + phoneW - 7, oy + 140, 7, 6);
  ctx.fillRect(ox, oy + phoneH - 140, 7, 6);
  ctx.fillRect(ox + phoneW - 7, oy + phoneH - 140, 7, 6);

  // 5. Bezel (Inner dark band)
  ctx.fillStyle = '#000000';
  drawCanvasRoundRect(ctx, ox + 7, oy + 7, phoneW - 14, phoneH - 14, 101);
  ctx.fill();

  // 6. Screen Display Area
  const sx = ox + 25;
  const sy = oy + 25;
  const sw = phoneW - 50; // 710px
  const sh = phoneH - 50; // 1500px
  const sRadius = 92;

  ctx.save();
  drawCanvasRoundRect(ctx, sx, sy, sw, sh, sRadius);
  ctx.clip();

  // Screen background fill
  ctx.fillStyle = '#000000';
  ctx.fillRect(sx, sy, sw, sh);

  // 7. Draw Screen Media (Image or Live Video)
  const activeMedia = (currentScreenStream && screenVideo) ? screenVideo : screenImg;
  const mediaW = activeMedia.naturalWidth || activeMedia.videoWidth || activeMedia.width || 0;
  const mediaH = activeMedia.naturalHeight || activeMedia.videoHeight || activeMedia.height || 0;

  if (activeMedia && mediaW > 0 && mediaH > 0) {
    const fit = fitMode ? fitMode.value : 'cover';
    const mediaRatio = mediaW / mediaH;
    const screenRatio = sw / sh;

    if (fit === 'contain') {
      if (mediaRatio > screenRatio) {
        const destH = sw / mediaRatio;
        const destY = sy + (sh - destH) / 2;
        ctx.drawImage(activeMedia, 0, 0, mediaW, mediaH, sx, destY, sw, destH);
      } else {
        const destW = sh * mediaRatio;
        const destX = sx + (sw - destW) / 2;
        ctx.drawImage(activeMedia, 0, 0, mediaW, mediaH, destX, sy, destW, sh);
      }
    } else if (fit === 'scrollable') {
      const destH = sw / mediaRatio;
      ctx.drawImage(activeMedia, 0, 0, mediaW, mediaH, sx, sy, sw, destH);
    } else {
      // Cover mode (default) - centered crop covering 100% of the screen
      let cropW = mediaW;
      let cropH = mediaH;
      let cropX = 0;
      let cropY = 0;

      if (mediaRatio > screenRatio) {
        cropW = mediaH * screenRatio;
        cropX = (mediaW - cropW) / 2;
      } else {
        cropH = mediaW / screenRatio;
        cropY = (mediaH - cropH) / 2;
      }
      ctx.drawImage(activeMedia, cropX, cropY, cropW, cropH, sx, sy, sw, sh);
    }
  }

  // 8. Specular Glass Glare Reflection
  if (toggleGlare && toggleGlare.checked) {
    const glareGrad = ctx.createLinearGradient(sx, sy, sx + sw * 0.75, sy + sh * 0.55);
    glareGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
    glareGrad.addColorStop(0.24, 'rgba(255, 255, 255, 0.06)');
    glareGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glareGrad;
    ctx.fillRect(sx, sy, sw, sh);
  }

  // 9. Dynamic Island
  const islandW = 232;
  const islandH = 66;
  const islandX = sx + (sw - islandW) / 2;
  const islandY = sy + 22;

  ctx.fillStyle = '#000000';
  drawCanvasRoundRect(ctx, islandX, islandY, islandW, islandH, 33);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Camera lens (right aperture)
  ctx.fillStyle = '#07070b';
  ctx.beginPath();
  ctx.arc(islandX + 188, islandY + 33, 11, 0, Math.PI * 2);
  ctx.fill();
  // Camera reflection dot
  ctx.fillStyle = '#1e1b4b';
  ctx.beginPath();
  ctx.arc(islandX + 186, islandY + 31, 4, 0, Math.PI * 2);
  ctx.fill();

  // Sensor lens (left aperture)
  ctx.fillStyle = '#0b0c10';
  ctx.beginPath();
  ctx.arc(islandX + 44, islandY + 33, 8, 0, Math.PI * 2);
  ctx.fill();

  // 10. Home Indicator Bar
  const barW = 270;
  const barH = 9;
  const barX = sx + (sw - barW) / 2;
  const barY = sy + sh - 26;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  drawCanvasRoundRect(ctx, barX, barY, barW, barH, 4.5);
  ctx.fill();

  ctx.restore();

  return canvas;
}

function setupExport() {
  btnExportPng.addEventListener('click', async () => {
    btnExportPng.disabled = true;
    const originalText = btnExportPng.innerHTML;
    btnExportPng.innerHTML = `<span>Exporting...</span>`;

    try {
      const canvas = renderMockupToCanvas();

      // Trigger high-res instant download
      const link = document.createElement('a');
      link.download = `iphone-16-pro-mockup-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Mockup exported in 2x Retina quality!');
    } catch (err) {
      console.error('Export failed:', err);
      showToast('Export error: ' + err.message);
    } finally {
      btnExportPng.disabled = false;
      btnExportPng.innerHTML = originalText;
    }
  });
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Start application on DOM ready
document.addEventListener('DOMContentLoaded', init);
