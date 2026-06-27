// View Switching Logic with Animations
function switchView(viewId) {
    // Prevent switching if already active
    if (document.getElementById(`nav-${viewId}`).classList.contains('active')) return;

    // Update active nav item styles
    document.querySelectorAll('.nav-item:not(.search-btn)').forEach(nav => {
        nav.classList.remove('active');
    });
    document.getElementById(`nav-${viewId}`).classList.add('active');

    // Handle View Transitions
    const activeView = document.querySelector('.view.active');
    const nextView = document.getElementById(`view-${viewId}`);

    if (activeView) {
        activeView.style.opacity = '0';
        activeView.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            activeView.classList.remove('active');
            
            nextView.classList.add('active');
            // Trigger reflow
            void nextView.offsetWidth;
            
            nextView.style.opacity = '1';
            nextView.style.transform = 'translateY(0)';
        }, 300); // match css transition
    } else {
        nextView.classList.add('active');
        nextView.style.opacity = '1';
        nextView.style.transform = 'translateY(0)';
    }
}

// Accordion Logic for Settings & Projects
function toggleAccordion(settingId, element) {
    const details = document.getElementById(`details-${settingId}`);
    
    // Close others
    document.querySelectorAll('.settings-details').forEach(el => {
        if (el.id !== `details-${settingId}`) {
            el.style.maxHeight = null;
            el.parentElement.classList.remove('open');
        }
    });

    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        element.classList.remove('open');
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        element.classList.add('open');
    }
}

// Global Search Functionality
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Build an index of searchable items from the DOM
let searchIndex = [];

function buildSearchIndex() {
    searchIndex = [];
    
    // Index Setup (Peripherals)
    document.querySelectorAll('#view-setup .spec-card').forEach(card => {
        const label = card.querySelector('.spec-label').innerText;
        const value = card.querySelector('.spec-value').innerText;
        searchIndex.push({
            title: label,
            context: value,
            view: 'setup'
        });
    });

    // Index Settings
    document.querySelectorAll('.settings-item').forEach(item => {
        const title = item.querySelector('h3').innerText;
        const listItems = item.querySelectorAll('li');
        
        listItems.forEach(li => {
            if(!li.classList.contains('list-title')) {
                searchIndex.push({
                    title: title + ' Settings',
                    context: li.innerText,
                    view: 'settings'
                });
            }
        });
    });
}

function openSearch() {
    buildSearchIndex(); // rebuild just in case
    searchModal.classList.add('active');
    searchInput.focus();
    searchInput.value = '';
    searchResults.innerHTML = '';
}

function closeSearch() {
    searchModal.classList.remove('active');
    searchInput.blur();
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.trim() === '') return;

    const results = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.context.toLowerCase().includes(query)
    ).slice(0, 10); // Limit to top 10

    if(results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item"><span class="search-result-context">No results found</span></div>';
        return;
    }

    results.forEach(result => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <span class="search-result-title">${result.title}</span>
            <span class="search-result-context">${result.context}</span>
        `;
        div.onclick = () => {
            closeSearch();
            switchView(result.view);
        };
        searchResults.appendChild(div);
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + K or Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    // ESC to close search
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearch();
    }
});

// Close modal when clicking outside
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        closeSearch();
    }
});
