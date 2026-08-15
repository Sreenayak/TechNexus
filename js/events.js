// ==========================================
// EVENT DATA
// ==========================================

const events = [

    {
        id: 1,
        name: "CodeStorm Hackathon",
        date: "August 20, 2026",
        category: "Hackathon",
        icon: "💻",
        description:
            "Build innovative solutions and compete with talented developers."
    },

    {
        id: 2,
        name: "AI Future Summit",
        date: "August 23, 2026",
        category: "AI",
        icon: "🤖",
        description:
            "Explore artificial intelligence, machine learning and the future of AI."
    },

    {
        id: 3,
        name: "WebX Workshop",
        date: "August 27, 2026",
        category: "Web",
        icon: "🌐",
        description:
            "Learn modern web development and build powerful web applications."
    },

    {
        id: 4,
        name: "CyberShield Challenge",
        date: "September 2, 2026",
        category: "Cybersecurity",
        icon: "🔐",
        description:
            "Test your cybersecurity skills through practical security challenges."
    },

    {
        id: 5,
        name: "CloudNext Conference",
        date: "September 7, 2026",
        category: "Cloud",
        icon: "☁️",
        description:
            "Discover cloud technologies, DevOps and modern infrastructure."
    },

    {
        id: 6,
        name: "CodeQuest Competition",
        date: "September 12, 2026",
        category: "Coding",
        icon: "⌨️",
        description:
            "Solve challenging programming problems and compete with coders."
    },

    {
        id: 7,
        name: "GenAI Innovation Lab",
        date: "September 18, 2026",
        category: "AI",
        icon: "🧠",
        description:
            "Create innovative applications using generative AI technologies."
    },

    {
        id: 8,
        name: "DevConnect 2026",
        date: "September 25, 2026",
        category: "Web",
        icon: "👨‍💻",
        description:
            "Connect with developers and learn the latest web technologies."
    },

    {
        id: 9,
        name: "SecureCode Workshop",
        date: "October 1, 2026",
        category: "Cybersecurity",
        icon: "🛡️",
        description:
            "Learn secure coding practices and common application vulnerabilities."
    }

];


// ==========================================
// CREATE EVENT CARD
// ==========================================

function createEventCard(event) {

    return `

        <div class="event-card">

            <div class="event-image">

                <span class="event-icon">
                    ${event.icon}
                </span>

                <span class="event-category">
                    ${event.category}
                </span>

            </div>

            <div class="event-content">

                <div class="event-date">
                    📅 ${event.date}
                </div>

                <h3>
                    ${event.name}
                </h3>

                <p>
                    ${event.description}
                </p>

                <button
                    class="event-register"
                    onclick="openRegistration(${event.id})">

                    Register Now →

                </button>

            </div>

        </div>

    `;
}


// ==========================================
// LOAD FEATURED EVENTS
// ==========================================

function loadFeaturedEvents() {

    const container =
        document.getElementById("featuredEvents");

    if (!container) return;

    const featured =
        events.slice(0, 3);

    container.innerHTML =
        featured.map(createEventCard).join("");

}


// ==========================================
// LOAD ALL EVENTS
// ==========================================

function loadAllEvents(eventList = events) {

    const container =
        document.getElementById("eventsContainer");

    const noEvents =
        document.getElementById("noEvents");

    const resultsCount =
        document.getElementById("resultsCount");

    if (!container) return;

    if (eventList.length === 0) {

        container.innerHTML = "";

        noEvents.style.display = "block";

    } else {

        noEvents.style.display = "none";

        container.innerHTML =
            eventList.map(createEventCard).join("");

    }

    if (resultsCount) {

        resultsCount.textContent =
            `Showing ${eventList.length} event${eventList.length !== 1 ? "s" : ""}`;

    }

}


// ==========================================
// SEARCH & FILTER
// ==========================================

function filterEvents() {

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (!searchInput || !categoryFilter) return;

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const category =
        categoryFilter.value;


    const filtered =
        events.filter(event => {

            const matchesSearch =
                event.name
                    .toLowerCase()
                    .includes(search);

            const matchesCategory =
                category === "all" ||
                event.category === category;

            return matchesSearch &&
                   matchesCategory;

        });


    loadAllEvents(filtered);

}


// ==========================================
// REGISTER BUTTON
// ==========================================

function openRegistration(eventId) {

    const event =
        events.find(item => item.id === eventId);

    if (!event) return;

    const modal =
        document.getElementById("registrationModal");

    const selectedEvent =
        document.getElementById("selectedEvent");

    const eventName =
        document.getElementById("eventName");

    const eventSelection =
        document.getElementById("eventSelection");


    selectedEvent.textContent =
        event.name;

    eventName.value =
        event.name;


    if (eventSelection) {

        eventSelection.value =
            event.name;

    }


    modal.classList.add("show");

    document.body.classList.add("modal-open");

}


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    loadFeaturedEvents();

    loadAllEvents();

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterEvents
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterEvents
        );

    }

});