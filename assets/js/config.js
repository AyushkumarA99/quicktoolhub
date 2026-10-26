/**
 * QuickToolHub - Global Configuration
 * 
 * Keep domain, AdSense publisher ID, and metadata configurable in one central place.
 */
window.QUICKTOOLHUB_CONFIG = {
  siteName: 'QuickToolHub',
  siteTagline: 'Free Online Tools for Everyday Tasks',
  siteDescription: 'Make your daily work easier with simple, fast, and free online tools. Word counters, image compressors, calculators, QR generators, and formatters directly in your browser.',
  canonicalDomain: 'https://quicktoolhubayush.netlify.app',
  version: '2.4.0',
  contactEmail: 'ayushkushwaha70935@gmail.com',
  
  // Google AdSense Settings
  // IMPORTANT: Replace this placeholder with your approved AdSense Publisher ID (e.g., 'ca-pub-1234567890123456')
  adsense: {
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
    enabled: false, // Set to true after your AdSense account is approved and verified
    testMode: true
  },
  
  // Navigation & Category definitions
  categories: [
    { id: 'text', name: 'Text Tools', icon: 'description', color: 'indigo', count: 2 },
    { id: 'image', name: 'Image Tools', icon: 'image_search', color: 'sky', count: 2 },
    { id: 'calc', name: 'Calculators', icon: 'functions', color: 'blue', count: 3 },
    { id: 'student', name: 'Student Tools', icon: 'local_library', color: 'fuchsia', count: 1 },
    { id: 'dev', name: 'Developer Tools', icon: 'terminal', color: 'emerald', count: 2 },
    { id: 'pdf', name: 'PDF Tools', icon: 'picture_as_pdf', color: 'rose', count: 0, status: 'Coming Soon' }
  ]
};
