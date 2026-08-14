
function getAllRegistrations() {
    return JSON.parse(localStorage.getItem('registrations') || '[]');
}

/**
 * Save registrations to localStorage
 */
function saveRegistrations(registrations) {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}

/**
 * Get user's registrations
 */
function getUserRegistrations(email) {
    const registrations = getAllRegistrations();
    return registrations.filter(reg => reg.email === email);
}

/**
 * Check if user is registered for an event
 */
function isUserRegisteredForEvent(eventId, email) {
    const registrations = getUserRegistrations(email);
    return registrations.some(reg => reg.eventId === eventId);
}

/**
 * Get registration details for an event
 */
function getRegistrationDetails(eventId) {
    const registrations = getAllRegistrations();
    return registrations.find(reg => reg.eventId === eventId);
}

/**
 * Cancel registration
 */
function cancelRegistration(eventId, email) {
    let registrations = getAllRegistrations();
    registrations = registrations.filter(
        reg => !(reg.eventId === eventId && reg.email === email)
    );
    saveRegistrations(registrations);
    return true;
}

/**
 * Get registration statistics
 */
function getRegistrationStats() {
    const registrations = getAllRegistrations();
    return {
        totalRegistrations: registrations.length,
        uniqueUsers: new Set(registrations.map(r => r.email)).size,
        eventStats: getEventRegistrationStats()
    };
}

/**
 * Get registration count per event
 */
function getEventRegistrationStats() {
    const registrations = getAllRegistrations();
    const stats = {};
    
    registrations.forEach(reg => {
        stats[reg.eventId] = (stats[reg.eventId] || 0) + 1;
    });
    
    return stats;
}

/**
 * Export registrations to CSV
 */
function exportRegistrationsToCSV() {
    const registrations = getAllRegistrations();
    
    if (registrations.length === 0) {
        alert('No registrations to export');
        return;
    }

    let csv = 'Event ID,Event Name,Name,Email,Phone,College,Year,Experience,Message,Registered At\n';
    
    registrations.forEach(reg => {
        const event = eventsData.find(e => e.id === reg.eventId);
        csv += `${reg.eventId},"${event ? event.name : 'Unknown'}","${reg.fullName}","${reg.email}","${reg.phone}","${reg.college}","${reg.year}","${reg.experience}","${reg.message || ''}","${new Date(reg.registeredAt).toLocaleString()}"\n`;
    });

    downloadCSV(csv, 'TechNexus-Registrations.csv');
}

/**
 * Download CSV file
 */
function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize registration listeners if on events page
    if (document.getElementById('registrationForm')) {
        setupRegistrationListeners();
    }
});

function setupRegistrationListeners() {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', handleRegistrationSubmit);
    }
}

function handleRegistrationSubmit(e) {
    e.preventDefault();
    submitRegistration(e);
}