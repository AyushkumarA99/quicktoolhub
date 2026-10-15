/**
 * QuickToolHub - Homepage Interactive Logic
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // 1. Render Header and Footer
    if (window.QuickToolHub && window.QuickToolHub.components) {
      window.QuickToolHub.components.renderHeader('home', './');
      window.QuickToolHub.components.renderFooter('./');
      window.QuickToolHub.components.renderSearchModal('./');
    }

    // 2. Render Popular Tools Bento Grid
    renderPopularTools();

    // 3. Setup Hero Search & Category Filter
    setupHeroSearch();

    // 4. Setup Live Workbench (Word Counter)
    setupLiveWorkbench();
  });

  /**
   * Render Popular Tools Bento Grid
   */
  function renderPopularTools(filteredList) {
    var container = document.getElementById('popular-tools-grid');
    if (!container) return;

    var tools = filteredList !== undefined ? filteredList : (window.QUICKTOOLHUB_TOOLS || []);

    if (tools.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center glass-card rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <span class="material-symbols-outlined text-[48px] text-slate-300 dark:text-slate-600 mb-3">search_off</span>
          <h3 class="text-base font-bold text-slate-900 dark:text-white">No tools found matching your search</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">Try typing a different keyword or select "All Categories" to view the full directory.</p>
          <button type="button" onclick="window.QuickToolHubResetSearch()" class="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = tools.map(function(tool) {
      return window.QuickToolHub.components.renderToolCard(tool, './');
    }).join('');
  }

  /**
   * Setup Hero Search & Category Dropdown
   */
  function setupHeroSearch() {
    var searchInput = document.getElementById('heroSearchInput');
    var categorySelect = document.getElementById('heroCategoryFilter');
    var searchForm = document.getElementById('heroSearchForm');
    var searchCountBadge = document.getElementById('searchCountBadge');

    function applyFilter() {
      var query = searchInput ? searchInput.value.toLowerCase().trim() : '';
      var selectedCat = categorySelect ? categorySelect.value : 'all';
      var allTools = window.QUICKTOOLHUB_TOOLS || [];

      var filtered = allTools.filter(function(tool) {
        var matchesCategory = (selectedCat === 'all' || tool.category === selectedCat);
        if (!matchesCategory) return false;

        if (!query) return true;

        return tool.name.toLowerCase().includes(query) ||
               tool.description.toLowerCase().includes(query) ||
               tool.categoryName.toLowerCase().includes(query) ||
               tool.keywords.some(function(k) { return k.toLowerCase().includes(query); });
      });

      renderPopularTools(filtered);

      if (searchCountBadge) {
        if (query || selectedCat !== 'all') {
          searchCountBadge.classList.remove('hidden');
          searchCountBadge.textContent = `${filtered.length} tool${filtered.length === 1 ? '' : 's'} found`;
        } else {
          searchCountBadge.classList.add('hidden');
        }
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyFilter);
    }
    if (categorySelect) {
      categorySelect.addEventListener('change', applyFilter);
    }
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        applyFilter();
        var toolsSec = document.getElementById('popular-tools-section');
        if (toolsSec) {
          toolsSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Global reset function
    window.QuickToolHubResetSearch = function() {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'all';
      applyFilter();
    };

    // Quick chip filter triggers
    window.QuickToolHubFilterByChip = function(toolName) {
      if (searchInput) searchInput.value = toolName;
      if (categorySelect) categorySelect.value = 'all';
      applyFilter();
      var toolsSec = document.getElementById('popular-tools-section');
      if (toolsSec) {
        toolsSec.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }

  /**
   * Setup Live Workbench (Word Counter)
   */
  function setupLiveWorkbench() {
    var textarea = document.getElementById('previewTextarea');
    var statWords = document.getElementById('statWords');
    var statCharsWithSpaces = document.getElementById('statCharsWithSpaces');
    var statCharsNoSpaces = document.getElementById('statCharsNoSpaces');
    var statSentences = document.getElementById('statSentences');
    var statReadingTime = document.getElementById('statReadingTime');
    var btnClear = document.getElementById('btnClearText');
    var btnCopy = document.getElementById('btnCopyText');
    var copyLabel = document.getElementById('copyButtonLabel');
    var btnUpper = document.getElementById('btnUppercase');
    var btnLower = document.getElementById('btnLowercase');
    var btnTitle = document.getElementById('btnTitleCase');

    function updateStats() {
      if (!textarea) return;
      var text = textarea.value;

      // Words
      var trimmed = text.trim();
      var words = trimmed === '' ? [] : trimmed.match(/\S+/g) || [];
      var wordCount = words.length;
      if (statWords) statWords.textContent = wordCount;

      // Characters with spaces
      if (statCharsWithSpaces) statCharsWithSpaces.textContent = text.length;

      // Characters without spaces
      var noSpacesCount = text.replace(/\s+/g, '').length;
      if (statCharsNoSpaces) statCharsNoSpaces.textContent = noSpacesCount;

      // Sentences
      var sentences = trimmed === '' ? 0 : (text.match(/[^.!?]+[.!?]+(\s|$)/g) || []).length || (trimmed.length > 0 ? 1 : 0);
      if (statSentences) statSentences.textContent = sentences;

      // Reading time (approx 200 words per minute)
      if (statReadingTime) {
        var minutes = Math.ceil(wordCount / 200);
        statReadingTime.textContent = wordCount <= 200 ? '< 1 min' : `${minutes} min`;
      }
    }

    if (textarea) {
      textarea.addEventListener('input', updateStats);
      // Run initial calculation
      updateStats();
    }

    if (btnClear) {
      btnClear.addEventListener('click', function() {
        if (textarea) {
          textarea.value = '';
          updateStats();
          textarea.focus();
        }
      });
    }

    if (btnUpper) {
      btnUpper.addEventListener('click', function() {
        if (textarea) {
          textarea.value = textarea.value.toUpperCase();
          updateStats();
        }
      });
    }

    if (btnLower) {
      btnLower.addEventListener('click', function() {
        if (textarea) {
          textarea.value = textarea.value.toLowerCase();
          updateStats();
        }
      });
    }

    if (btnTitle) {
      btnTitle.addEventListener('click', function() {
        if (textarea) {
          textarea.value = textarea.value.toLowerCase().replace(/\b(\w)/g, function(s) {
            return s.toUpperCase();
          });
          updateStats();
        }
      });
    }

    if (btnCopy) {
      btnCopy.addEventListener('click', function() {
        if (textarea) {
          navigator.clipboard.writeText(textarea.value).then(function() {
            if (copyLabel) copyLabel.textContent = 'Copied!';
            setTimeout(function() {
              if (copyLabel) copyLabel.textContent = 'Copy Text';
            }, 2000);
          }).catch(function() {
            textarea.select();
            document.execCommand('copy');
            if (copyLabel) copyLabel.textContent = 'Copied!';
            setTimeout(function() {
              if (copyLabel) copyLabel.textContent = 'Copy Text';
            }, 2000);
          });
        }
      });
    }
  }
})();
