// --- dracoo SVG Icons adapted from the source code ---
const icons = {
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  pc: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="8" x="5" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h2"/><path d="M12 18h6"/></svg>',
  configs: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>',
  projects: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  twitch: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>',
  youtube: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  mouse: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>',
  pad: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/></svg>',
  keyboard: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M7 16h10"/></svg>',
  monitor: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  mic: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
  instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
  discord: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  pin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

// --- i18n Dictionary ---
let lang = 'en';

const i18n = {
  en: {
    pinMsg: "taking editing coms more, so might not be active as usual.",
    about: "About",
    bio: "i edit videos for a living",
    pcSpecs: "PC Specs",
    peripherals: "Peripherals",
    searchPh: "Search peripherals",
    configs: "Configs",
    projects: "Projects",
    portfolio: "Portfolio",
    portfolioDesc: "editing portfolio (only some are here)",
    achievements: "Achievements",
    achievementsDesc: "achievements over the years ive been alive i guess",
    comingSoon: "coming soon...",
    back: "Back",
    navHome: "Home",
    navSetup: "Setup",
    navSettings: "Settings",
    navProjects: "Projects",
    searchBtn: "Search",
    all: "All",
    mice: "Mice",
    mousepads: "Mousepads",
    keyboards: "Keyboards",
    tablets: "Tablets",
    mousefeet: "Mousefeet",
    microphones: "Microphones",
    monitors: "Monitors",
    langToggle: "KR",
    confSens: "Sensitivity",
    confSensDesc: "Current sensitivity settings (Always up to date)",
    confObs: "OBS Config",
    confObsDesc: "Current OBS settings (Always up to date)",
    confOsu: "osu! Config",
    confOsuDesc: "Current osu!mania settings (Always up to date)",
    confKovaaks: "KovaaK's Config",
    confKovaaksDesc: "Current KovaaK's settings (Always up to date)",
    confArsenal: "Arsenal Config",
    confArsenalDesc: "Current Roblox Arsenal settings (Always up to date)",
    roblox: "Roblox",
    overwatch: "Overwatch",
    cs2: "CS2",
    cs16: "CS 1.6",
    settingsLabel: "Settings",
    cpu: "CPU",
    gpu: "GPU",
    motherboard: "Motherboard",
    ram: "RAM",
    storage: "Storage",
    displayName: "Jay",
    monitorValue: 'freeflow 240hz 24"',
    portfolioAll: "All",
    portfolioLongForm: "Long Form",
    portfolioShorts: "Shorts",
    portfolioLongFormEdits: "Long Form Edits",
    portfolioShortsEdits: "Shorts"
  },
  kr: {
    pinMsg: "편집 커미션을 많이 받고 있어서 평소만큼 활동하지 않을 수 있습니다.",
    about: "소개",
    bio: "12년생 편집자",
    pcSpecs: "컴 사양",
    peripherals: "장비",
    searchPh: "장비 검색",
    configs: "설정",
    projects: "프로젝트",
    portfolio: "포트폴리오",
    portfolioDesc: "영상편집 포트폴리오",
    achievements: "업적",
    achievementsDesc: "업적 (?)",
    comingSoon: "곧 공개 예정...",
    back: "뒤로가기",
    navHome: "홈",
    navSetup: "셋업",
    navSettings: "설정",
    navProjects: "프로젝트",
    searchBtn: "검색",
    all: "전체",
    mice: "마우스",
    mousepads: "마우스패드",
    keyboards: "키보드",
    tablets: "태블릿",
    mousefeet: "마우스피트",
    microphones: "마이크",
    monitors: "모니터",
    langToggle: "EN",
    confSens: "감도",
    confSensDesc: "현재 감도 설정 (항상 최신)",
    confObs: "OBS 설정",
    confObsDesc: "현재 OBS 설정 (항상 최신)",
    confOsu: "osu! 설정",
    confOsuDesc: "현재 osu!mania 설정 (항상 최신)",
    confKovaaks: "코박스 설정",
    confKovaaksDesc: "현재 코박스 설정 (항상 최신)",
    confArsenal: "아스널 설정",
    confArsenalDesc: "현재 로블록스 아스널 설정 (항상 최신)",
    roblox: "로블록스",
    overwatch: "오버워치",
    cs2: "카스2",
    cs16: "하프라이프",
    settingsLabel: "설정",
    cpu: "CPU",
    gpu: "글카",
    motherboard: "메인보드",
    ram: "램",
    storage: "SSD",
    displayName: "현우",
    monitorValue: "프리플로우 240hz 24인치",
    portfolioAll: "전체",
    portfolioLongForm: "롱폼",
    portfolioShorts: "숏폼",
    portfolioLongFormEdits: "롱폼 편집",
    portfolioShortsEdits: "숏폼 편집"
  }
};

function t(key) { return i18n[lang][key]; }

// --- DATA ---
const GEAR_DATA = [
  { category: "mice", name: "Endgame Gear OP1w 4K", sub: "U9 Universal" },
  { category: "mice", name: "VXE R1 SE+", sub: "Ultraglide Purple" },
  { category: "mice", name: "Razer Viper Mini", sub: "Stock Skates" },
  { category: "mousepads", name: "SkyPAD 3.0", sub: "Wallhack" },
  { category: "mousepads", name: "Artisan FX Zero", sub: "Softness: Mid" },
  { category: "keyboards", name: "AULA Hero 68HE", sub: "AULA" },
  { category: "keyboards", name: "MAD 60HE", sub: "Madlions" },
  { category: "keyboards", name: "VGN FLASH 68", sub: "VGN" },
  { category: "tablets", name: "CTL-472", sub: "Wacom" },
  { category: "mousefeet", name: "Universal U9", sub: "X-Raypad" },
  { category: "mousefeet", name: "Ultraglide Purple", sub: "Meow gaming gear" },
  { category: "microphones", name: "AM8T", sub: "fifine" },
  { category: "monitors", name: "Freeflow 240hz", sub: "freeflow" }
];

const HOME_GEAR = [
  { label: "mice", value: "OP1w 4K", icon: "mouse" },
  { label: "keyboards", value: "VGN FLASH 68", icon: "keyboard" },
  { label: "mousepads", value: "Artisan FX Zero", icon: "pad" },
  { label: "mousefeet", value: "Universal U9", icon: "mouse" },
  { label: "microphones", value: "AM8T", icon: "mic" },
  { label: "monitors", valueKey: "monitorValue", icon: "monitor" }
];

// Game configs stay in English per request, only titles translate
const CONFIGS = [
  {
    nameKey: "confSens", descKey: "confSensDesc",
    sections: [
      {
        label: "settingsLabel", rows: [
          { key: "cm/360", value: "40cm" },
          { key: "roblox", value: "0.0762" },
          { key: "overwatch", value: "4.32955 / 4.33" },
          { key: "cs2", value: "1.3" },
          { key: "cs16", value: "1.1 - 1.3" },
          { key: "DPI", value: "800" },
          { key: "Hz", value: "2000" }
        ]
      }
    ]
  },
  {
    nameKey: "confObs", descKey: "confObsDesc",
    sections: [
      {
        label: "Output Mode", rows: [
          { key: "Mode", value: "Advanced" }
        ]
      },
      {
        label: "Output > Recording", rows: [
          { key: "Type", value: "Standard" },
          { key: "Format", value: "MPEG-4 (.mp4)" },
          { key: "Video Encoder", value: "NVIDIA NVENC H.264" },
          { key: "Audio Encoder", value: "FFmpeg AAC" },
          { key: "Rescale Output", value: "Disabled" },
          { key: "Rate Control", value: "Lossless" },
          { key: "Keyframe Interval", value: "2s" },
          { key: "Multipass Mode", value: "Single Pass" },
          { key: "Profile", value: "High" },
          { key: "B-frames", value: "2" }
        ]
      },
      {
        label: "Audio & Video", rows: [
          { key: "Audio Bitrate", value: "320 (all tracks)" },
          { key: "Fractional FPS Value", value: "120 / 1" }
        ]
      }
    ]
  },
  {
    nameKey: "confOsu", descKey: "confOsuDesc",
    sections: [
      {
        label: "Gameplay", rows: [
          { key: "Skin", value: "Rowan (4k Finn orbs, 5-7k Plutes)" },
          { key: "FPS", value: "Unlimited" },
          { key: "Menu Cursor Size", value: "0.79x" },
          { key: "Scroll Speed", value: "441ms (Speed 26.0)" },
          { key: "Keys", value: "a s ; '" }
        ]
      }
    ]
  },
  {
    nameKey: "confKovaaks", descKey: "confKovaaksDesc",
    sections: [
      {
        label: "Main", rows: [
          { key: "Sens", value: "40cm/360" },
          { key: "FOV", value: "103" },
          { key: "Crosshair", value: "rounddot (Yellow)" }
        ]
      },
      {
        label: "Visuals", rows: [
          { key: "Walls", value: "Marble Polished" },
          { key: "Ramps", value: "Drywall" },
          { key: "Floors / Ceilings", value: "Brick clay beveled" },
          { key: "Enemy Colors", value: "Black (Override O/O)" },
          { key: "Roughness / Metallic", value: "0 / 0" },
          { key: "Full Bright", value: "0.53" },
          { key: "Game / Menu Max FPS", value: "360 / 120" }
        ]
      },
      {
        label: "Weapons", rows: [
          { key: "Show Weapon / Model", value: "Off / Off" },
          { key: "Hitscan Graphics", value: "On" },
          { key: "Visual Origin at Weapon", value: "On" },
          { key: "Zoomed Scope", value: "No scope" },
          { key: "Crosshair Bloom", value: "Off" }
        ]
      },
      {
        label: "Sounds & Misc", rows: [
          { key: "Sounds", value: "Removed everything" },
          { key: "Hitmarkers", value: "Off (All)" },
          { key: "Hit Sounds", value: "bodyshot03 (All), killconfirmed06" },
          { key: "Spawn Sound", value: "spawn07" },
          { key: "Movement Based Scoring", value: "None" }
        ]
      },
      {
        label: "Video", rows: [
          { key: "Vsync", value: "Off" },
          { key: "Anti-Aliasing", value: "Temporal (Cinematic)" },
          { key: "Post Processing / Effects", value: "High / High" },
          { key: "Shadows", value: "Off" },
          { key: "Texture Streaming", value: "On" },
          { key: "One Frame Thread Lag", value: "Off" },
          { key: "Tiled Reflections", value: "On" },
          { key: "Anisotropic Filter", value: "x16" },
          { key: "Scene Color", value: "MEDIUM" },
          { key: "Gamma", value: "2.2" },
          { key: "Nvidia Reflex Low Latency", value: "Enabled" },
          { key: "Reflex Analyzer Flash Ind.", value: "Off" },
          { key: "Pause on loss of focus", value: "On" }
        ]
      }
    ]
  },
  {
    nameKey: "confArsenal", descKey: "confArsenalDesc",
    sections: [
      {
        label: "Display - General & Outlines", rows: [
          { key: "Enemy Outlines", value: "ON (Color: Black)" },
          { key: "No Textures", value: "ON" },
          { key: "Legacy Viewmodel Offset", value: "ON" },
          { key: "Minimized Viewmodels", value: "ON" },
          { key: "Hide Career Stats", value: "ON" },
          { key: "Hide Viewmodels", value: "OFF" },
          { key: "FOV", value: "90" },
          { key: "Crosshair", value: "Custom Red (R:Max, G:Min, B:Min)" },
          { key: "Disable Weapon Sway", value: "OFF" },
          { key: "Chat", value: "ON" },
          { key: "Performance Stats (Basic / Adv)", value: "OFF / OFF" },
          { key: "Display Names / Mask Others", value: "OFF / OFF" }
        ]
      },
      {
        label: "Graphics", rows: [
          { key: "Particle Quality", value: "AUTO" },
          { key: "Basic Skins", value: "ON" },
          { key: "Kill Effects", value: "OFF" },
          { key: "Shadows / Ragdolls", value: "OFF / OFF" },
          { key: "Bloom / Color Correction / Sun Rays", value: "ON / ON / ON" },
          { key: "Viewport Character", value: "OFF" }
        ]
      },
      {
        label: "Audio - General", rows: [
          { key: "Announcers / Megaphones", value: "OFF / OFF" },
          { key: "Character Vocal Damage Noises", value: "OFF" },
          { key: "Menu Music", value: "OFF" },
          { key: "Mute Copyrighted Music", value: "OFF" }
        ]
      }
    ]
  }
];

// --- VIEWS GENERATION ---
function renderHome() {
  const gearHTML = HOME_GEAR.map(g => `
    <div class="gear-item">
      <div class="gear-icon">${icons[g.icon]}</div>
      <div>
        <div class="gear-label">${t(g.label.toLowerCase()) || g.label}</div>
        <div class="gear-value">${g.valueKey ? t(g.valueKey) : g.value}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="pinned-msg">
      <span class="pin-icon">${icons.pin}</span>
      <span class="pin-text">${t('pinMsg')}</span>
    </div>

    <section class="content-section">
      <div class="section-header">
        <span class="section-label">${t('about')}</span>
        <span class="section-line"></span>
      </div>
      <p class="bio-text">${t('bio')}</p>
    </section>
    
    <div class="home-gear">${gearHTML}</div>
  `;
}

function renderSetup() {
  const filterList = ['all', 'mice', 'mousepads', 'keyboards', 'tablets', 'mousefeet', 'microphones', 'monitors'];
  const filters = filterList.map(f => {
    return `
      <div class="gear-filter-item">
        <button class="gear-filter${f==='all'?' active':''}" data-filter="${f}">
          <span class="filter-radio"></span><span>${t(f)}</span>
        </button>
        ${f!=='monitors'?'<div class="filter-divider"></div>':''}
      </div>
    `;
  }).join('');

  return `
    <section class="content-section">
      <div class="section-header">
        <span class="section-label">${t('pcSpecs')}</span>
        <span class="section-line"></span>
      </div>
      <div class="pc-card dim-group">
        <div class="pc-row pc-row-border"><span class="pc-key">${t('cpu')}</span><span class="pc-val">Intel i5-12400F</span></div>
        <div class="pc-row pc-row-border"><span class="pc-key">${t('gpu')}</span><span class="pc-val">RTX 3060 Ti</span></div>
        <div class="pc-row pc-row-border"><span class="pc-key">${t('motherboard')}</span><span class="pc-val">MSI B660M-A</span></div>
        <div class="pc-row pc-row-border"><span class="pc-key">${t('ram')}</span><span class="pc-val">16GB DDR4</span></div>
        <div class="pc-row"><span class="pc-key">${t('storage')}</span><span class="pc-val">1TB NVMe</span></div>
      </div>
    </section>

    <section class="content-section">
      <div class="section-header">
        <span class="section-label">${t('peripherals')}</span>
        <span class="section-line"></span>
      </div>
      <div class="gear-page">
        <div class="gear-page-inner">
          <div class="gear-search-bar">
            <input type="text" id="gearLocalSearch" placeholder="${t('searchPh')}" autocomplete="off" spellcheck="false" />
            <span class="gear-count" id="gearLocalCount">${GEAR_DATA.length} / ${GEAR_DATA.length}</span>
          </div>
          <div class="gear-scroll-area" id="gearCatalogue"></div>
        </div>
        <nav class="gear-filters" id="gearFilters">${filters}</nav>
      </div>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="content-section" id="settingsRoot">
      <div class="section-header">
        <span class="section-label">${t('configs')}</span>
        <span class="section-line"></span>
      </div>
      <div class="config-list dim-group">
        ${CONFIGS.map((c, i) => `
          <button class="config-btn" data-config="${i}">
            <div>
              <div class="config-btn-name">${t(c.nameKey)}</div>
              <div class="config-btn-desc">${t(c.descKey)}</div>
            </div>
            <svg class="config-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function renderConfigDetail(idx) {
  const conf = CONFIGS[idx];
  return `
    <button class="config-back" id="configBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      <span>${t('back')}</span>
    </button>
    ${conf.sections.map(s => `
      <div class="content-section">
        <div class="section-header">
          <span class="section-label">${t(s.label) || s.label}</span>
          <span class="section-line"></span>
        </div>
        <div class="config-card dim-group">
          ${s.rows.map((r, ri) => `
            <div class="config-row${ri < s.rows.length-1 ? ' config-row-border':''}">
              <span class="config-key">${t(r.key) || r.key}</span>
              <span class="config-val">${r.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

function renderProjectsRoot() {
  return `
    <section class="content-section" id="projectsRoot">
      <div class="section-header">
        <span class="section-label">${t('projects')}</span>
        <span class="section-line"></span>
      </div>
      <div class="config-list dim-group">
        <button class="config-btn" data-proj="portfolio">
          <div>
            <div class="config-btn-name">${t('portfolio')}</div>
            <div class="config-btn-desc">${t('portfolioDesc')}</div>
          </div>
          <svg class="config-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <button class="config-btn" data-proj="achievements">
          <div>
            <div class="config-btn-name">${t('achievements')}</div>
            <div class="config-btn-desc">${t('achievementsDesc')}</div>
          </div>
          <svg class="config-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  `;
}

const PORTFOLIO_VIDEOS = [
  {
    id: "CqkHXAIERns",
    title: "Rivals Ranked But I Can ONLY Use SECONDARIES",
    game: "Roblox Rivals"
  },
  {
    id: "nTqi16nMSbM",
    title: "These Roblox Games Are Getting Sued",
    game: "Minecraft"
  },
  {
    id: "JhSsTG8YqDs",
    title: "마인크래프트 10인 배틀로얄 서바이벌에서 생존하기",
    game: "Minecraft"
  },
  {
    id: "rj388lG0Z4c",
    title: "[시참PVP] 미친 능력이 추가된 \"OP 인첸트\"로 시청자 100명 상대로 승리하기",
    game: "Minecraft"
  },
  {
    id: "tLt34Tk8R9c",
    title: "[배틀로얄] 마인크래프트 *배틀로얄 서바이벌*에서 살아남기",
    game: "Minecraft"
  }
];

const PORTFOLIO_SHORTS = [
  {
    id: "NKutiSBkVDE",
    title: "마크 1위 RPG 서버",
    game: "Minecraft"
  },
  {
    id: "KUq_8pNqel0",
    title: "🟩 초록색 마인크래프트 유튜버..?",
    game: "Minecraft"
  },
  {
    id: "S0pBQDpv_VM",
    title: "Finding fun games to play when you're bored! (Day 2) #games  #roblox  #gaming #shorts",
    game: "Minecraft"
  },
  {
    id: "8q41MP2SG4o",
    title: "Finding fun games to play when you're bored! (Day 1) #games  #roblox",
    game: "Minecraft"
  },
  {
    id: "A0lxcSfXPFI",
    title: "포코피아 꾸미기 고인물만 안다는 '이 블록'의 정체 🤫",
    game: "Minecraft"
  },
  {
    id: "sfQ8o0cYlfk",
    title: "What Rank Can You Place🫡 #roblox #robloxrivals #rivals",
    game: "Roblox Rivals"
  },
  {
    id: "EQvygdXnf3o",
    title: "Can u Win In Ranked With ONLY Secondaries  #roblox #robloxrivals #rivals",
    game: "Roblox Rivals"
  }
];

function renderPortfolio() {
  const isKr = lang === 'kr';
  
  const widescreenCards = PORTFOLIO_VIDEOS.map(v => `
    <div class="portfolio-card">
      <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/${v.id}" allowfullscreen></iframe>
      </div>
      <div class="portfolio-card-info">
        <div class="portfolio-card-tag">${v.game}</div>
        <div class="portfolio-card-title" title="${v.title}">
          ${v.title}
        </div>
      </div>
    </div>
  `).join('');

  const shortsCards = PORTFOLIO_SHORTS.map(s => `
    <div class="portfolio-card">
      <div class="video-wrapper short">
        <iframe src="https://www.youtube.com/embed/${s.id}" allowfullscreen></iframe>
      </div>
      <div class="portfolio-card-info">
        <div class="portfolio-card-tag">${s.game}</div>
        <div class="portfolio-card-title" title="${s.title}">
          ${s.title}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <button class="config-back" id="projBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      <span>${t('back')}</span>
    </button>
    
    <section class="content-section">
      <div class="section-header">
        <span class="section-label">${t('portfolio')}</span>
        <span class="section-line"></span>
      </div>
      
      <div class="portfolio-tabs">
        <button class="portfolio-tab active" data-filter="all">${t('portfolioAll')}</button>
        <button class="portfolio-tab" data-filter="longform">${t('portfolioLongForm')}</button>
        <button class="portfolio-tab" data-filter="shorts">${t('portfolioShorts')}</button>
      </div>

      <div class="portfolio-section" id="widescreen-section">
        <div class="portfolio-section-title">${t('portfolioLongFormEdits')}</div>
        <div class="videos-grid">
          ${widescreenCards}
        </div>
      </div>

      <div class="portfolio-section" id="shorts-section">
        <div class="portfolio-section-title">${t('portfolioShortsEdits')}</div>
        <div class="shorts-grid">
          ${shortsCards}
        </div>
      </div>
    </section>
  `;
}

function renderAchievements() {
  return `
    <button class="config-back" id="projBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      <span>${t('back')}</span>
    </button>
    <section class="content-section">
      <div class="section-header">
        <span class="section-label">${t('achievements')}</span>
        <span class="section-line"></span>
      </div>
      <div class="section-card" style="text-align:center; padding: 3rem; color: var(--text-muted);">
        ${t('comingSoon')}
      </div>
    </section>
  `;
}

// --- CORE LOGIC ---
const ROUTES = {
  home: renderHome,
  setup: renderSetup,
  settings: renderSettings,
  projects: renderProjectsRoot
};

let currentPage = 'home';
let webglInitialized = false;

window.toggleLang = function() {
  lang = lang === 'en' ? 'kr' : 'en';
  initApp();
};

function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="site-layout">
      <!-- Mobile Header Overlay -->
      <div class="mobile-header">
        <div class="mobile-header-left">
          <img src="avatar.png" alt="sevy" onerror="this.src='https://via.placeholder.com/64'">
          <span>${t('displayName')}</span>
        </div>
        <button class="mobile-nav-toggle" id="mobileNavToggle">
          ${icons.menu}
        </button>
      </div>

      <div class="site-inner">
        <div class="sidebar-wrap" id="sidebarWrap">
          <button class="mobile-close" id="mobileClose">${icons.x}</button>
          <aside class="sidebar">
            <div class="sidebar-profile">
              <img src="avatar.png" alt="sevy" class="sidebar-pfp" onerror="this.src='https://via.placeholder.com/64'">
              <div class="sidebar-name">${t('displayName')}</div>
              <div class="sidebar-handle">@donfifthy</div>
            </div>
            <div class="sidebar-socials">
              <a href="#" target="_blank" rel="noopener noreferrer" title="YouTube">${icons.youtube}</a>
              <a href="https://instagram.com/donicaim" target="_blank" rel="noopener noreferrer" title="Instagram">${icons.instagram}</a>
              <a href="https://discord.com/users/1511625910170943579" class="discord-btn" target="_blank" rel="noopener noreferrer" title="Discord">${icons.discord}<span class="discord-hover">@donfifthy</span></a>
            </div>
            <div class="sidebar-divider"></div>
            
            <button class="sidebar-search" onclick="openSearch()">
              ${icons.search} <span>${t('searchBtn')}</span> <kbd>Ctrl K</kbd>
            </button>

            <nav class="sidebar-nav" id="sidebarNav">
              <div class="nav-indicator" id="navIndicator"></div>
              <a href="#" data-page="home">${icons.home}<span>${t('navHome')}</span></a>
              <a href="#" data-page="setup">${icons.pc}<span>${t('navSetup')}</span></a>
              <a href="#" data-page="settings">${icons.configs}<span>${t('navSettings')}</span></a>
              <a href="#" data-page="projects">${icons.projects}<span>${t('navProjects')}</span></a>
            </nav>

            <div style="flex: 1;"></div>
            <button class="lang-toggle-bottom" onclick="toggleLang()">
              ${icons.globe} <span>${t('langToggle')}</span>
            </button>
          </aside>
        </div>
        <main class="main-content" id="page-content"></main>
      </div>
    </div>
  `;

  const navs = document.querySelectorAll('[data-page]');
  const indicator = document.getElementById('navIndicator');
  const content = document.getElementById('page-content');
  const sidebar = document.getElementById('sidebarWrap');
  const navToggle = document.getElementById('mobileNavToggle');
  const navClose = document.getElementById('mobileClose');

  if (navToggle) navToggle.addEventListener('click', () => sidebar.classList.add('mobile-open'));
  if (navClose) navClose.addEventListener('click', () => sidebar.classList.remove('mobile-open'));

  window.setPage = function(page) {
    currentPage = page;
    navs.forEach(n => {
      if (n.dataset.page === page) {
        n.classList.add('active');
        indicator.style.transform = `translateY(${n.offsetTop + 11}px)`;
      } else {
        n.classList.remove('active');
      }
    });

    content.className = 'main-content'; 
    void content.offsetWidth; 
    
    content.innerHTML = ROUTES[page]() + '<div class="main-footer">© Jay</div>';
    content.classList.add('glitch-in');
    
    content.scrollTo({ top: 0, behavior: 'smooth' });
    
    sidebar.classList.remove('mobile-open');

    if (page === 'setup') initSetup();
    if (page === 'settings') initSettings();
    if (page === 'projects') initProjects();
  };

  navs.forEach(n => n.addEventListener('click', (e) => {
    e.preventDefault();
    setPage(n.dataset.page);
  }));

  setPage(currentPage);
  
  if (!webglInitialized) {
    initWebGL();
    webglInitialized = true;
  }
}

function initSetup() {
  let filter = 'all';
  let query = '';
  
  function renderGear() {
    const cat = document.getElementById('gearCatalogue');
    const cCount = document.getElementById('gearLocalCount');
    if (!cat) return;
    
    let html = '';
    let visCount = 0;
    
    ['mice', 'mousepads', 'keyboards', 'tablets', 'mousefeet', 'microphones', 'monitors'].forEach(c => {
      const items = GEAR_DATA.filter(g => {
        if (g.category !== c) return false;
        if (filter !== 'all' && filter !== c) return false;
        if (query && !g.name.toLowerCase().includes(query) && !g.sub.toLowerCase().includes(query)) return false;
        return true;
      });
      
      if (items.length > 0) {
        visCount += items.length;
        html += `
          <div class="gear-cat-section">
            <div class="gear-cat-header">
              <span class="gear-cat-label">${t(c).toUpperCase()}</span>
              <span class="gear-cat-line"></span>
            </div>
            <div class="gear-cat-grid dim-group">
              ${items.map(i => `
                <div class="gear-card">
                  <div class="gear-card-name">${i.name}</div>
                  <div class="gear-card-sub">${i.sub}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
    });
    cat.innerHTML = html;
    if (cCount) cCount.textContent = `${visCount} / ${GEAR_DATA.length}`;
  }

  const filterBtns = document.querySelectorAll('.gear-filter');
  filterBtns.forEach(b => b.addEventListener('click', () => {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    b.classList.add('active');
    filter = b.dataset.filter;
    renderGear();
  }));
  
  const locSearch = document.getElementById('gearLocalSearch');
  if (locSearch) {
    locSearch.addEventListener('input', e => {
      query = e.target.value.toLowerCase();
      renderGear();
    });
  }

  renderGear();
}

function initSettings() {
  const content = document.getElementById('page-content');
  content.addEventListener('click', e => {
    const btn = e.target.closest('.config-btn');
    if (btn && btn.dataset.config !== undefined) {
      content.className = 'main-content'; 
      void content.offsetWidth;
      content.innerHTML = renderConfigDetail(btn.dataset.config) + '<div class="main-footer">© Jay</div>';
      content.classList.add('slide-in-right');
      content.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (e.target.closest('#configBack')) {
      content.className = 'main-content'; 
      void content.offsetWidth;
      content.innerHTML = renderSettings() + '<div class="main-footer">© Jay</div>';
      content.classList.add('slide-in-left');
      content.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

function initProjects() {
  const content = document.getElementById('page-content');
  content.addEventListener('click', e => {
    const btn = e.target.closest('.config-btn');
    if (btn && btn.dataset.proj) {
      content.className = 'main-content'; 
      void content.offsetWidth;
      if (btn.dataset.proj === 'portfolio') content.innerHTML = renderPortfolio() + '<div class="main-footer">© Jay</div>';
      if (btn.dataset.proj === 'achievements') content.innerHTML = renderAchievements() + '<div class="main-footer">© Jay</div>';
      content.classList.add('slide-in-right');
      content.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const tabBtn = e.target.closest('.portfolio-tab');
    if (tabBtn) {
      document.querySelectorAll('.portfolio-tab').forEach(t => t.classList.remove('active'));
      tabBtn.classList.add('active');
      
      const filter = tabBtn.dataset.filter;
      const widescreenSec = document.getElementById('widescreen-section');
      const shortsSec = document.getElementById('shorts-section');
      
      if (filter === 'all') {
        if (widescreenSec) widescreenSec.classList.remove('hidden-section');
        if (shortsSec) shortsSec.classList.remove('hidden-section');
      } else if (filter === 'longform') {
        if (widescreenSec) widescreenSec.classList.remove('hidden-section');
        if (shortsSec) shortsSec.classList.add('hidden-section');
      } else if (filter === 'shorts') {
        if (widescreenSec) widescreenSec.classList.add('hidden-section');
        if (shortsSec) shortsSec.classList.remove('hidden-section');
      }
      return;
    }

    if (e.target.closest('#projBack')) {
      content.className = 'main-content'; 
      void content.offsetWidth;
      content.innerHTML = renderProjectsRoot() + '<div class="main-footer">© Jay</div>';
      content.classList.add('slide-in-left');
      content.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// --- SEARCH ---
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');

window.openSearch = function() {
  searchModal.classList.add('open');
  searchInput.focus();
  const sidebar = document.getElementById('sidebarWrap');
  if(sidebar) sidebar.classList.remove('mobile-open');
};

searchModal.addEventListener('click', e => {
  if (e.target.closest('.search-overlay') || e.target.closest('.search-clear-btn')) {
    searchModal.classList.remove('open');
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') searchModal.classList.remove('open');
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
});

searchInput.addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const res = document.getElementById('searchResults');
  if (!q) {
    res.innerHTML = '';
    document.getElementById('searchCount').textContent = '0';
    return;
  }
  
  let rArr = [];
  GEAR_DATA.forEach(g => {
    if (g.name.toLowerCase().includes(q) || g.sub.toLowerCase().includes(q)) {
      rArr.push({ name: g.name, tag: t('peripherals'), action: "setPage('setup'); document.getElementById('searchModal').classList.remove('open');" });
    }
  });
  CONFIGS.forEach((c, i) => {
    const cName = t(c.nameKey).toLowerCase();
    const cDesc = t(c.descKey).toLowerCase();
    if (cName.includes(q) || cDesc.includes(q)) {
      rArr.push({ name: t(c.nameKey), tag: t('configs'), action: "setPage('settings'); setTimeout(() => { const b = document.querySelector('[data-config=\\'" + i + "\\']'); if(b) b.click(); }, 50); document.getElementById('searchModal').classList.remove('open');" });
    }
  });
  PORTFOLIO_VIDEOS.forEach(v => {
    const title = v.title.toLowerCase();
    if (title.includes(q) || v.game.toLowerCase().includes(q)) {
      rArr.push({ name: v.title, tag: t('portfolio') || 'Portfolio', action: "setPage('projects'); setTimeout(() => { const b = document.querySelector('[data-proj=\\'portfolio\\']'); if(b) b.click(); }, 50); document.getElementById('searchModal').classList.remove('open');" });
    }
  });
  PORTFOLIO_SHORTS.forEach(s => {
    const title = s.title.toLowerCase();
    if (title.includes(q) || s.game.toLowerCase().includes(q)) {
      rArr.push({ name: s.title, tag: t('portfolio') || 'Portfolio', action: "setPage('projects'); setTimeout(() => { const b = document.querySelector('[data-proj=\\'portfolio\\']'); if(b) b.click(); }, 50); document.getElementById('searchModal').classList.remove('open');" });
    }
  });
  
  document.getElementById('searchCount').textContent = rArr.length;
  if (rArr.length === 0) {
    res.innerHTML = '<div class="search-no-results">No results found.</div>';
    return;
  }
  
  res.innerHTML = rArr.map(r => `
    <div class="search-result" onclick="${r.action}">
      <div class="search-result-name">${r.name}</div>
      <div class="search-result-tag">${r.tag}</div>
    </div>
  `).join('');
});

// --- WEBGL EXACT DRACOO GLITCH SHADER B/W ---
function initWebGL() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
  if (!gl) return;

  const vsSource = `
    attribute vec2 a_position;
    void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
  `;

  const fsSource = `
    precision highp float;
    uniform float u_time;
    uniform vec2  u_resolution;
    uniform vec2  u_mouse;
    uniform float u_mouseSpeed;

    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    float hash2(vec2 p) {
      p = fract(p * vec2(443.897, 397.297));
      p += dot(p, p.yx + 19.19);
      return fract(p.x * p.y);
    }
    vec2 hash22(vec2 p) {
      return vec2(hash2(p), hash2(p + 47.53));
    }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash2(i); float b = hash2(i + vec2(1.0, 0.0));
      float c = hash2(i + vec2(0.0, 1.0)); float d = hash2(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 3; i++) {
        v += a * noise(p); p *= 2.1; a *= 0.5;
      }
      return v;
    }
    float rectSDF(vec2 uv, vec2 center, vec2 halfSize) {
      vec2 d = abs(uv - center) - halfSize;
      return max(d.x, d.y);
    }
    float burstIntensity(float t) {
      float cycle = 5.0 + hash(floor(t * 0.15)) * 3.0;
      float phase = mod(t, cycle);
      float burst = smoothstep(0.0, 0.03, phase) * smoothstep(0.18, 0.05, phase);
      burst *= step(0.6, hash(floor(t / cycle) * 7.7));
      return burst;
    }
    float glitchBand(float y, float t, float intensity) {
      float band = 0.0;
      for (int i = 0; i < 8; i++) {
        float id = float(i);
        float speed = 3.0 + hash(id * 13.7) * 6.0;
        float pos = hash(id * 7.3 + floor(t * speed) * 0.1);
        float width = 0.004 + hash(id * 3.1) * 0.025;
        float thresh = mix(0.88, 0.5, intensity);
        float strength = step(thresh, hash(floor(t * speed) * 0.3 + id));
        band += smoothstep(width, 0.0, abs(y - pos)) * strength;
      }
      return band;
    }
    vec4 rectLayer(vec2 uv, float t, float seed, float scale, int count) {
      vec3 col = vec3(0.0); float totalAlpha = 0.0;
      for (int i = 0; i < 12; i++) {
        if (i >= count) break;
        float id = float(i) + seed;
        float jumpSpeed = 0.4 + hash(id * 1.1) * 0.8;
        float jumpT = floor(t * jumpSpeed);
        vec2 basePos = hash22(vec2(id, jumpT + seed));
        vec2 drift = vec2(sin(t * 0.5 + id * 2.0) * 0.06, cos(t * 0.35 + id * 1.7) * 0.05);
        vec2 pos = basePos + drift;
        float w = 0.015 + hash(id * 5.6) * scale; float h = 0.01 + hash(id * 8.9) * scale * 0.7;
        float flickerSpeed = 1.5 + hash(id * 2.2) * 4.0;
        float visible = step(0.4, hash(floor(t * flickerSpeed) + id));
        float d = rectSDF(uv, pos, vec2(w, h));
        float colorSeed = hash(id * 4.4);
        
        vec3 rectColor;
        if (colorSeed < 0.5) rectColor = vec3(0.9);
        else if (colorSeed < 0.7) rectColor = vec3(0.65);
        else if (colorSeed < 0.85) rectColor = vec3(0.12);
        else rectColor = vec3(0.9);

        float isOutline = step(0.65, hash(id * 6.7));
        float border = 0.0025;
        float outline = step(-border, d) * step(d, 0.0) * isOutline;
        float inner = step(d, -border) * (1.0 - isOutline) + step(d, 0.0) * (1.0 - isOutline);
        float alpha = (inner + outline) * visible;
        alpha *= 0.25 + hash(id * 11.1) * 0.55;
        col += rectColor * alpha;
        totalAlpha += alpha;
      }
      return vec4(col, totalAlpha);
    }
    float inkSmear(vec2 uv, float t) {
      float ink = 0.0;
      for (int i = 0; i < 4; i++) {
        float id = float(i);
        vec2 center = vec2(0.2 + hash(id * 3.3) * 0.6 + sin(t * 0.15 + id) * 0.08, 0.2 + hash(id * 7.7) * 0.6 + cos(t * 0.12 + id * 2.0) * 0.06);
        vec2 d = uv - center;
        float angle = hash(id * 5.5) * 6.28 + t * 0.05;
        float cs = cos(angle), sn = sin(angle);
        d = vec2(d.x * cs - d.y * sn, d.x * sn + d.y * cs); d.x *= 0.3 + hash(id * 2.1) * 0.4;
        float dist = length(d); float noiseVal = fbm(d * 8.0 + id * 10.0 + t * 0.1);
        float smear = smoothstep(0.08 + noiseVal * 0.06, 0.02, dist);
        float vis = smoothstep(0.0, 0.5, sin(t * (0.2 + hash(id * 9.0) * 0.3) + id * 3.0));
        ink += smear * vis * (0.15 + hash(id * 4.0) * 0.15);
      }
      return ink;
    }
    float accentLines(vec2 uv, float t) {
      float lines = 0.0;
      for (int i = 0; i < 4; i++) {
        float id = float(i); float y = hash(id * 23.4 + floor(t * (0.6 + hash(id * 3.0))));
        float visible = step(0.6, hash(floor(t * 1.8) + id * 7.0));
        lines += smoothstep(0.0015, 0.0, abs(uv.y - y)) * visible * 0.5;
      }
      for (int i = 0; i < 3; i++) {
        float id = float(i) + 10.0; float x = hash(id * 17.8 + floor(t * 0.8));
        float visible = step(0.65, hash(floor(t * 1.4) + id * 5.0));
        lines += smoothstep(0.001, 0.0, abs(uv.x - x)) * visible * 0.4;
      }
      return lines;
    }
    float pixelDebris(vec2 uv, float t) {
      float debris = 0.0;
      for (int i = 0; i < 25; i++) {
        float id = float(i); float flickerSpeed = 4.0 + hash(id * 2.2) * 8.0;
        float visible = step(0.7, hash(floor(t * flickerSpeed) + id));
        vec2 pos = hash22(vec2(id + 200.0, floor(t * (1.0 + hash(id * 1.5) * 1.5))));
        float size = 0.002 + hash(id * 9.1) * 0.007;
        float d = rectSDF(uv, pos, vec2(size)); debris += step(d, 0.0) * visible;
      }
      return debris;
    }
    float crosshair(vec2 uv, vec2 pos) {
      float size = 0.01; float thick = 0.001;
      float h = smoothstep(thick, 0.0, abs(uv.y - pos.y)) * step(abs(uv.x - pos.x), size);
      float v = smoothstep(thick, 0.0, abs(uv.x - pos.x)) * step(abs(uv.y - pos.y), size);
      return (h + v) * 0.5;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float t = u_time * 1.5;

      float mDist = length(uv - u_mouse);
      float mouseProx = smoothstep(0.45, 0.0, mDist);
      float burst = burstIntensity(t);
      float chaos = clamp(burst + mouseProx * u_mouseSpeed * 1.5, 0.0, 1.0);
      float glitch = glitchBand(uv.y, t, chaos);
      float dispAmt = glitch * (0.025 + chaos * 0.06);
      float burstNoise = noise(uv * 20.0 + t * 10.0) * burst * 0.05;
      vec2 dispUV = uv + vec2(dispAmt + burstNoise, burstNoise * 0.5);

      float aberration = 0.003 + chaos * 0.012 + glitch * 0.008;
      vec2 rUV = dispUV + vec2(aberration, 0.0);
      vec2 gUV = dispUV;
      vec2 bUV = dispUV - vec2(aberration, 0.0);

      float baseR = 0.035 + noise(rUV * 6.0 + t * 0.05) * 0.015;
      float baseG = 0.032 + noise(gUV * 6.0 + t * 0.05) * 0.013;
      float baseB = 0.032 + noise(bUV * 6.0 + t * 0.05) * 0.013;

      float inkR = inkSmear(rUV, t); float inkG = inkSmear(gUV, t); float inkB = inkSmear(bUV, t);

      vec4 rectsR = rectLayer(rUV, t, 0.0, 0.05, 12) + rectLayer(rUV, t, 30.0, 0.08, 10) * 0.6 + rectLayer(rUV, t, 60.0, 0.14, 8) * 0.35;
      vec4 rectsG = rectLayer(gUV, t, 0.0, 0.05, 12) + rectLayer(gUV, t, 30.0, 0.08, 10) * 0.6 + rectLayer(gUV, t, 60.0, 0.14, 8) * 0.35;
      vec4 rectsB = rectLayer(bUV, t, 0.0, 0.05, 12) + rectLayer(bUV, t, 30.0, 0.08, 10) * 0.6 + rectLayer(bUV, t, 60.0, 0.14, 8) * 0.35;

      float linesR = accentLines(rUV, t); float linesG = accentLines(gUV, t); float linesB = accentLines(bUV, t);
      float debrisR = pixelDebris(rUV, t); float debrisG = pixelDebris(gUV, t); float debrisB = pixelDebris(bUV, t);
      float debrisIsRed = step(0.5, hash2(floor(dispUV * 150.0)));

      float r = baseR - inkR * 0.7 + rectsR.r + linesR * 0.8 + mix(0.25, 0.7, debrisIsRed) * debrisR * 0.5;
      float g = baseG - inkG * 0.7 + rectsG.g + linesG * 0.03 + mix(0.25, 0.04, debrisIsRed) * debrisG * 0.5;
      float b = baseB - inkB * 0.7 + rectsB.b + linesB * 0.03 + mix(0.25, 0.04, debrisIsRed) * debrisB * 0.5;

      float ch = crosshair(uv, u_mouse);
      r += ch * 0.8; g += ch * 0.05; b += ch * 0.05;

      float flash = burst * 0.15;
      r += flash; g += flash * 0.6; b += flash * 0.6;

      float invertAmt = burst * step(0.8, burst) * 0.4;
      r = mix(r, 1.0 - r, invertAmt); g = mix(g, 1.0 - g, invertAmt); b = mix(b, 1.0 - b, invertAmt);

      float scan = sin(gl_FragCoord.y * 2.5) * 0.5 + 0.5;
      float scanIntensity = 0.03 + burst * 0.06;
      r *= 1.0 - scan * scanIntensity; g *= 1.0 - scan * scanIntensity; b *= 1.0 - scan * scanIntensity;

      float grain = (hash2(gl_FragCoord.xy + fract(t * 80.0)) - 0.5) * (0.04 + burst * 0.08);
      r += grain; g += grain; b += grain;

      float vig = 1.0 - smoothstep(0.3, 1.5, length(uv - 0.5) * 1.5);
      float vigMul = 0.88 + 0.12 * vig;
      r *= vigMul; g *= vigMul; b *= vigMul;

      float luma = dot(vec3(clamp(r,0.0,1.0), clamp(g,0.0,1.0), clamp(b,0.0,1.0)), vec3(0.299, 0.587, 0.114));
      gl_FragColor = vec4(luma, luma, luma, 1.0);
    }
  `;

  function createShader(type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  }

  const p = gl.createProgram();
  gl.attachShader(p, createShader(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(p, createShader(gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(p);
  gl.useProgram(p);

  const posLoc = gl.getAttribLocation(p, "a_position");
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(p, "u_time");
  const uRes = gl.getUniformLocation(p, "u_resolution");
  const uMouse = gl.getUniformLocation(p, "u_mouse");
  const uMouseSpeed = gl.getUniformLocation(p, "u_mouseSpeed");

  let mouseX = 0.5, mouseY = 0.5;
  let tmouseX = 0.5, tmouseY = 0.5;
  let mouseSpeed = 0.0;

  window.addEventListener('mousemove', e => {
    tmouseX = e.clientX / window.innerWidth;
    tmouseY = 1.0 - e.clientY / window.innerHeight;
  });

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  const start = performance.now();
  function render() {
    const dx = tmouseX - mouseX;
    const dy = tmouseY - mouseY;
    mouseSpeed = Math.sqrt(dx*dx + dy*dy) * 50.0;
    mouseX += dx * 0.1;
    mouseY += dy * 0.1;
    mouseSpeed *= 0.9;

    gl.uniform1f(uTime, (performance.now() - start) / 1000);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform2f(uMouse, mouseX, mouseY);
    gl.uniform1f(uMouseSpeed, mouseSpeed);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  render();
}

window.selectLang = function(selectedLang) {
  lang = selectedLang;
  const overlay = document.getElementById('langSelector');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => {
      overlay.style.display = 'none';
      initApp();
    }, 400);
  } else {
    initApp();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  if (!webglInitialized) {
    initWebGL();
    webglInitialized = true;
  }
});
