/**
 * QuickToolHub - Reusable UI Components
 * Preserves 100% of the Stitch UI/UX design tokens and glassmorphism styling.
 */
(function(window) {
  'use strict';

  var components = {};

  /**
   * Determine relative path prefix if not provided
   */
  function getRootPrefix() {
    var path = window.location.pathname;
    if (path.indexOf('/tools/') !== -1) {
      return '../../';
    } else if (path.indexOf('/all-tools/') !== -1 || 
               path.indexOf('/categories/') !== -1 || 
               path.indexOf('/about-us/') !== -1 || 
               path.indexOf('/contact-us/') !== -1 || 
               path.indexOf('/privacy-policy/') !== -1 || 
               path.indexOf('/terms-and-conditions/') !== -1) {
      return '../';
    }
    return './';
  }

  /**
   * Initialize Theme Toggle (Light / Dark mode)
   */
  function initTheme() {
    var savedTheme = localStorage.getItem('qth_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('qth_theme', isDark ? 'dark' : 'light');
    var themeIcons = document.querySelectorAll('.theme-toggle-icon');
    themeIcons.forEach(function(icon) {
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });
  }

  /**
   * Header Navigation Component
   */
  components.renderHeader = function(activePath, customRootPrefix) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();
    var isDark = document.documentElement.classList.contains('dark');

    var html = `
      <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-200">
        <div class="h-16 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <!-- Logo & Brand -->
          <div class="flex items-center gap-6">
            <a class="flex items-center gap-2 group" href="${prefix}index.html">
              <div class="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-tr from-[#3525cd] via-[#4F46E5] to-indigo-500 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
                <span class="material-symbols-outlined text-white text-[20px]">construction</span>
              </div>
              <span class="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-600 to-sky-500 dark:from-white dark:via-indigo-400 dark:to-sky-400 bg-clip-text text-transparent hidden sm:inline">QuickToolHub</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-white/60 dark:border-slate-700/60 shadow-inner">
              <a href="${prefix}index.html" class="px-4 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${activePath === 'home' ? 'text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-sm shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-700/60'}">Home</a>
              <a href="${prefix}all-tools/index.html" class="px-4 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${activePath === 'all-tools' ? 'text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-sm shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-700/60'}">All Tools</a>
              <a href="${prefix}categories/index.html" class="px-4 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${activePath === 'categories' ? 'text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-sm shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-700/60'}">Categories</a>
              <a href="${prefix}about-us/index.html" class="px-4 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${activePath === 'about-us' ? 'text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-sm shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-700/60'}">About Us</a>
            </nav>
          </div>

          <!-- Actions: Search, Theme Toggle, Mobile Menu -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- Search Trigger -->
            <button type="button" onclick="window.QuickToolHub.openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 bg-slate-50/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl transition-all shadow-sm group">
              <span class="material-symbols-outlined text-[18px] text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">search</span>
              <span class="hidden md:inline text-[13px]">Search tools...</span>
              <span class="hidden md:inline px-1.5 py-0.5 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded font-mono text-[11px] shadow-2xs">⌘K</span>
            </button>

            <!-- Light / Dark Mode Toggle -->
            <button type="button" aria-label="Toggle color mode" onclick="window.QuickToolHub.toggleTheme()" class="w-9 h-9 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center transition-all shadow-sm">
              <span class="material-symbols-outlined text-[19px] theme-toggle-icon">${isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <!-- Mobile Hamburger Button -->
            <button type="button" aria-label="Open Mobile Menu" onclick="window.QuickToolHub.toggleMobileMenu()" class="lg:hidden w-9 h-9 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all shadow-sm">
              <span class="material-symbols-outlined text-[20px]" id="mobileMenuIcon">menu</span>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobileNavDrawer" class="hidden lg:hidden border-t border-slate-200/70 dark:border-slate-700/70 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-xl">
          <a href="${prefix}index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm ${activePath === 'home' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}">
            <span class="material-symbols-outlined text-[20px]">home</span>
            Home
          </a>
          <a href="${prefix}all-tools/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm ${activePath === 'all-tools' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}">
            <span class="material-symbols-outlined text-[20px]">grid_view</span>
            All Tools
          </a>
          <a href="${prefix}categories/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm ${activePath === 'categories' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}">
            <span class="material-symbols-outlined text-[20px]">category</span>
            Categories
          </a>
          <a href="${prefix}about-us/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm ${activePath === 'about-us' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}">
            <span class="material-symbols-outlined text-[20px]">info</span>
            About Us
          </a>
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span>QuickToolHub v2.4</span>
            <a href="${prefix}contact-us/index.html" class="text-indigo-600 dark:text-indigo-400 font-medium">Contact Support</a>
          </div>
        </div>
      </header>
    `;

    var container = document.getElementById('header-container');
    if (container) {
      container.innerHTML = html;
    }
    return html;
  };

  /**
   * Footer Component
   */
  components.renderFooter = function(customRootPrefix) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();

    var html = `
      <footer class="w-full relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-800/60 shadow-[0_-1px_12px_rgba(0,0,0,0.02)] mt-auto">
        <div class="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
            <div class="md:col-span-6 space-y-4">
              <div class="flex items-center gap-2">
                <div class="p-1.5 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-xs">
                  <span class="material-symbols-outlined text-[18px]">construction</span>
                </div>
                <span class="font-bold text-lg text-slate-900 dark:text-white">QuickToolHub</span>
              </div>
              <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                Free, simple, and lightning-fast online tools for students, creators, developers, and professionals. All processing happens safely inside your browser without accounts or installation.
              </p>
              <div class="flex items-center gap-3 text-xs text-slate-500">
                <span class="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 100% Client-Side Privacy
                </span>
                <span>•</span>
                <span>No Data Storage</span>
              </div>
            </div>

            <div class="md:col-span-3 space-y-3">
              <h3 class="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">Navigation</h3>
              <ul class="space-y-2">
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}index.html">Home</a></li>
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}all-tools/index.html">All Tools</a></li>
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}categories/index.html">Categories</a></li>
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}about-us/index.html">About Us</a></li>
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}contact-us/index.html">Contact Us</a></li>
              </ul>
            </div>

            <div class="md:col-span-3 space-y-3">
              <h3 class="text-xs text-slate-900 dark:text-white font-bold uppercase tracking-wider">Legal & Trust</h3>
              <ul class="space-y-2">
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}privacy-policy/index.html">Privacy Policy</a></li>
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}terms-and-conditions/index.html">Terms and Conditions</a></li>
                <li><a class="text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block py-0.5" href="${prefix}contact-us/index.html">Report an Issue</a></li>
              </ul>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500 dark:text-slate-400 font-medium">
            <p>© 2026 QuickToolHub. All rights reserved.</p>
            <p class="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
              <span class="material-symbols-outlined text-[16px]">verified</span>
              Crafted for productivity & performance
            </p>
          </div>
        </div>
      </footer>
    `;

    var container = document.getElementById('footer-container');
    if (container) {
      container.innerHTML = html;
    }
    return html;
  };

  /**
   * AdSense Leaderboard / Rectangle Component (Zero Layout Shift Reserved Space)
   */
  components.renderAdSenseBanner = function(slotType, title) {
    var config = window.QUICKTOOLHUB_CONFIG || {};
    var adsense = config.adsense || { enabled: false, publisherId: 'ca-pub-XXXXXXXXXXXXXXXX' };
    var label = title || 'Responsive Ad Banner (728 × 90 Leaderboard Placement)';

    if (adsense.enabled && adsense.publisherId && adsense.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX') {
      return `
        <div class="w-full max-w-[1280px] mx-auto px-4 md:px-8 my-4">
          <div class="ad-slot-leaderboard relative glass-card rounded-2xl py-3 px-4 flex flex-col items-center justify-center text-center overflow-hidden border border-white/70 dark:border-slate-700">
            <span class="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 font-semibold">Advertisement</span>
            <div id="ad-container-active" class="w-full flex justify-center">
              <!-- Actual AdSense Ins block rendered here -->
              <ins class="adsbygoogle"
                   style="display:block; text-align:center;"
                   data-ad-layout="in-article"
                   data-ad-format="fluid"
                   data-ad-client="${adsense.publisherId}"
                   data-ad-slot="1234567890"></ins>
            </div>
          </div>
        </div>
      `;
    }

    // Default compliant placeholder with reserved height (Zero CLS)
    return `
      <section class="w-full max-w-[1280px] mx-auto px-4 md:px-8 my-4" aria-label="Advertisement Section">
        <div class="relative glass-card rounded-2xl py-3 px-4 flex flex-col items-center justify-center min-h-[90px] text-center overflow-hidden border border-white/70 dark:border-slate-800">
          <span class="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 font-semibold">Advertisement</span>
          <div class="w-full max-w-[728px] h-[64px] bg-white/70 dark:bg-slate-800/60 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center px-4 shadow-inner">
            <span class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-indigo-500">ad_units</span>
              ${label}
            </span>
          </div>
        </div>
      </section>
    `;
  };

  /**
   * Breadcrumb Navigation Component
   */
  components.renderBreadcrumbs = function(items, customRootPrefix) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();
    var listItems = items.map(function(item, index) {
      var isLast = index === items.length - 1;
      if (isLast) {
        return `<span class="text-slate-900 dark:text-white font-semibold truncate" aria-current="page">${item.label}</span>`;
      }
      return `
        <a href="${item.url}" class="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">${item.label}</a>
        <span class="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
      `;
    }).join('');

    return `
      <nav aria-label="Breadcrumb" class="w-full max-w-[1280px] mx-auto px-4 md:px-8 pt-6 pb-2">
        <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto py-1">
          <a href="${prefix}index.html" class="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <span class="material-symbols-outlined text-[16px]">home</span>
            <span>Home</span>
          </a>
          <span class="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
          ${listItems}
        </div>
      </nav>
    `;
  };

  /**
   * Tool Card Component (matching Stitch Bento Grid design)
   */
  components.renderToolCard = function(tool, customRootPrefix) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();
    var toolUrl = prefix + tool.relativePath + 'index.html';

    return `
      <a href="${toolUrl}" class="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between group relative overflow-hidden text-left block">
        <div class="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full pointer-events-none"></div>
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${tool.gradient} flex items-center justify-center text-white shadow-md ${tool.shadowColor} group-hover:scale-105 transition-transform">
              <span class="material-symbols-outlined text-[24px]">${tool.icon}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 border rounded-full text-[11px] font-semibold ${tool.categoryBadgeBg}">${tool.categoryName}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 mb-1.5">
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${tool.name}</h3>
            <span class="px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold rounded">${tool.badge}</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">${tool.description}</p>
        </div>
        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span class="text-xs text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Use Tool <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </span>
          <span class="material-symbols-outlined text-[18px] text-emerald-500">check_circle</span>
        </div>
      </a>
    `;
  };

  /**
   * Related Tools Component
   */
  components.renderRelatedTools = function(currentToolId, customRootPrefix, limit) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();
    var tools = window.QUICKTOOLHUB_TOOLS || [];
    var count = limit || 3;

    // Filter out current tool and select related
    var related = tools.filter(function(t) { return t.id !== currentToolId; }).slice(0, count);

    var cardsHtml = related.map(function(t) {
      return components.renderToolCard(t, prefix);
    }).join('');

    return `
      <section class="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Related Tools</h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Other helpful utilities you might like</p>
          </div>
          <a href="${prefix}all-tools/index.html" class="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            View All Tools <span class="material-symbols-outlined text-[16px]">east</span>
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${cardsHtml}
        </div>
      </section>
    `;
  };

  /**
   * Search Modal Component (⌘K)
   */
  components.renderSearchModal = function(customRootPrefix) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();

    var html = `
      <div id="searchModalOverlay" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden items-start justify-center pt-16 sm:pt-24 px-4 transition-all">
        <div class="relative w-full max-w-2xl glass-card rounded-2xl p-4 sm:p-6 shadow-2xl border border-white dark:border-slate-700 overflow-hidden" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              <span class="material-symbols-outlined text-[20px]">search</span>
              <span>Search QuickToolHub</span>
            </div>
            <button type="button" onclick="window.QuickToolHub.closeSearchModal()" class="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div class="mt-4 relative">
            <input id="modalSearchInput" type="text" placeholder="Search by name, category, or keyword..." class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" autocomplete="off" />
            <span class="material-symbols-outlined text-[20px] text-slate-400 absolute left-3 top-3.5">search</span>
          </div>

          <div id="modalSearchResults" class="mt-4 max-h-[360px] overflow-y-auto space-y-2 pr-1">
            <!-- Dynamic search results will appear here -->
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Press <kbd class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">ESC</kbd> to close</span>
            <span>10 fast client-side tools</span>
          </div>
        </div>
      </div>
    `;

    var existing = document.getElementById('searchModalOverlay');
    if (existing) existing.remove();

    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div.firstElementChild);

    // Bind input handler
    var modalInput = document.getElementById('modalSearchInput');
    if (modalInput) {
      modalInput.addEventListener('input', function(e) {
        components.updateModalSearchResults(e.target.value, prefix);
      });
    }

    var overlay = document.getElementById('searchModalOverlay');
    if (overlay) {
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          window.QuickToolHub.closeSearchModal();
        }
      });
    }
  };

  /**
   * Search Modal Results Populator
   */
  components.updateModalSearchResults = function(query, customRootPrefix) {
    var prefix = customRootPrefix !== undefined ? customRootPrefix : getRootPrefix();
    var resultsContainer = document.getElementById('modalSearchResults');
    if (!resultsContainer) return;

    var tools = window.QUICKTOOLHUB_TOOLS || [];
    var q = (query || '').toLowerCase().trim();

    if (!q) {
      resultsContainer.innerHTML = `
        <div class="py-6 text-center text-xs text-slate-400">
          Type to search tools across all categories...
        </div>
      `;
      return;
    }

    var matches = tools.filter(function(tool) {
      return tool.name.toLowerCase().includes(q) ||
             tool.description.toLowerCase().includes(q) ||
             tool.categoryName.toLowerCase().includes(q) ||
             tool.keywords.some(function(k) { return k.toLowerCase().includes(q); });
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-8 text-center text-slate-500 dark:text-slate-400">
          <span class="material-symbols-outlined text-[36px] text-slate-300 dark:text-slate-600 mb-2">search_off</span>
          <p class="text-sm font-semibold">No tools found for "${query}"</p>
          <p class="text-xs text-slate-400 mt-1">Try keywords like "word", "image", "calculate", or "QR"</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(function(tool) {
      var url = prefix + tool.relativePath + 'index.html';
      return `
        <a href="${url}" class="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-tr ${tool.gradient} flex items-center justify-center text-white shrink-0 shadow-sm">
              <span class="material-symbols-outlined text-[20px]">${tool.icon}</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${tool.name}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${tool.categoryBadgeBg}">${tool.categoryName}</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">${tool.description}</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">arrow_forward</span>
        </a>
      `;
    }).join('');
  };

  // Global QuickToolHub namespace
  window.QuickToolHub = {
    components: components,
    toggleTheme: toggleTheme,
    toggleMobileMenu: function() {
      var drawer = document.getElementById('mobileNavDrawer');
      var icon = document.getElementById('mobileMenuIcon');
      if (drawer) {
        var isHidden = drawer.classList.toggle('hidden');
        if (icon) icon.textContent = isHidden ? 'menu' : 'close';
      }
    },
    openSearchModal: function() {
      var overlay = document.getElementById('searchModalOverlay');
      if (!overlay) {
        components.renderSearchModal();
        overlay = document.getElementById('searchModalOverlay');
      }
      if (overlay) {
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
        var input = document.getElementById('modalSearchInput');
        if (input) {
          input.value = '';
          input.focus();
          components.updateModalSearchResults('', getRootPrefix());
        }
      }
    },
    closeSearchModal: function() {
      var overlay = document.getElementById('searchModalOverlay');
      if (overlay) {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
      }
    }
  };

  // Keyboard shortcut listener (⌘K / Ctrl+K and ESC)
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      window.QuickToolHub.openSearchModal();
    }
    if (e.key === 'Escape') {
      window.QuickToolHub.closeSearchModal();
    }
  });

  // Initialize theme on load
  initTheme();
})(window);
