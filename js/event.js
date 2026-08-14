let filteredEvents = [...eventsData];

// ==================== PAGE INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    displayEvents(filteredEvents);
    setupEventListeners();
    initializeFavorites();
});

// ==================== DISPLAY EVENTS ====================
function displayEvents(events) {
    const container = document.getElementById('eventsGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    if (events.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = 'No events found';
        return;
    }

    container.style.display = 'grid';
    noResults.style.display = 'none';
    resultsCount.textContent = `Showing ${events.length} event(s)`;

    container.innerHTML = events.map(event => `
        <div class="event-card" data-event-id="${event.id}">
            <div class="event-image">${event.image}</div>
            <div class="event-body">
                <span class="event-category">${event.category}</span>
                <span class="event-difficulty" style="display: inline-block; font-size: 0.7rem; margin-left: 0.5rem; background-color: var(--warning); color: white; padding: 0.2rem 0.6rem; border-radius: 50px;">
                    ${event.difficulty}
                </span>
                <h3 class="event-title">${event.name}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-users"></i>
                        <span>${event.attendees} attending</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-user-tie"></i>
                        <span>${event.instructor}</span>
                    </div>
                </div>
                <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${event.tags.map(tag => `<span style="background-color: var(--border); color: var(--text); padding: 0.25rem 0.6rem; border-radius: 20px; font-size: 0.75rem;">#${tag}</span>`).join('')}
                </div>
                <div class="event-actions">
                    <button class="btn btn-register" onclick="openRegistration(${event.id}, '${event.name}')">
                        <i class="fas fa-check-circle"></i> Register
                    </button>
                    <button class="btn btn-favorite" onclick="toggleFavorite(this, ${event.id})" title="Add to favorites">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Set favorite button states
    events.forEach(event => {
        const card = container.querySelector(`[data-event-id="${event.id}"]`);
        if (card) {
            const favBtn = card.querySelector('.btn-favorite');
            if (isFavorite(event.id)) {
                favBtn.classList.add('active');
                favBtn.innerHTML = '<i class="fas fa-heart"></i>';
            }
        }
    });
}

// ==================== EVENT LISTENERS SETUP ====================
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterEvents);

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', filterEvents);

    // Difficulty filter
    document.getElementById('difficultyFilter').addEventListener('change', filterEvents);

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);

    // Sort functionality
    document.getElementById('sortBy').addEventListener('change', (e) => {
        sortEvents(e.target.value);
    });
}

// ==================== FILTERING ====================
function filterEvents() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryCheckboxes = document.querySelectorAll('#categoryFilter input:checked');
    const difficultyCheckboxes = document.querySelectorAll('#difficultyFilter input:checked');

    const selectedCategories = Array.from(categoryCheckboxes)
        .map(cb => cb.value)
        .filter(v => v !== 'all');
    
    const selectedDifficulties = Array.from(difficultyCheckboxes)
        .map(cb => cb.value)
        .filter(v => v !== 'all');

    const isCategoryFilterActive = selectedCategories.length > 0 && 
        !document.querySelector('#categoryFilter input[value="all"]').checked;
    
    const isDifficultyFilterActive = selectedDifficulties.length > 0 && 
        !document.querySelector('#difficultyFilter input[value="all"]').checked;

    filteredEvents = eventsData.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(searchTerm) || 
                            event.description.toLowerCase().includes(searchTerm) ||
                            event.instructor.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !isCategoryFilterActive || selectedCategories.includes(event.category);
        const matchesDifficulty = !isDifficultyFilterActive || selectedDifficulties.includes(event.difficulty);

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    displayEvents(filteredEvents);
}

// ==================== SORTING ====================
function sortEvents(sortBy) {
    switch(sortBy) {
        case 'newest':
            filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date':
            filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'name':
            filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'attendees':
            filteredEvents.sort((a, b) => b.attendees - a.attendees);
            break;
    }
    displayEvents(filteredEvents);
}

// ==================== CLEAR FILTERS ====================
function clearAllFilters() {
    document.getElementById('searchInput').value = '';
    
    document.querySelectorAll('#categoryFilter input').forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    document.querySelectorAll('#difficultyFilter input').forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    filteredEvents = [...eventsData];
    displayEvents(filteredEvents);
    document.getElementById('sortBy').value = 'newest';
}

// ==================== INITIALIZE FAVORITES ====================
function initializeFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const container = document.getElementById('eventsGrid');
    
    favorites.forEach(eventId => {
        const card = container.querySelector(`[data-event-id="${eventId}"]`);
        if (card) {
            const favBtn = card.querySelector('.btn-favorite');
            favBtn.classList.add('active');
            favBtn.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
}