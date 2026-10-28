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
  // Keep ads disabled in the app configuration until the site is approved.
  adsense: {
    publisherId: 'ca-pub-2794771713110568',
    enabled: false,
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
