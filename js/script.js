// Event data with additional properties
const eventsData = [
    {
        id: 1,
        name: "Web Development Bootcamp",
        category: "Web Development",
        difficulty: "Beginner",
        date: "2026-09-15",
        time: "10:00 AM",
        location: "Tech Hub, Mumbai",
        description: "Learn HTML, CSS, and JavaScript from scratch. Perfect for beginners.",
        fullDescription: "This comprehensive bootcamp covers all fundamentals of web development. You'll learn to build responsive websites from scratch using modern technologies.",
        image: "🌐",
        attendees: 250,
        seats: 100,
        instructor: "John Smith",
        featured: true,
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        name: "AI & Machine Learning Workshop",
        category: "AI & ML",
        difficulty: "Intermediate",
        date: "2026-09-20",
        time: "2:00 PM",
        location: "Innovation Center, Bangalore",
        description: "Explore AI, ML algorithms, and neural networks with practical examples.",
        fullDescription: "Deep dive into machine learning algorithms, neural networks, and AI applications. Build real-world ML models and understand TensorFlow.",
        image: "🤖",
        attendees: 180,
        seats: 80,
        instructor: "Dr. Sarah Johnson",
        featured: true,
        tags: ["Python", "TensorFlow", "AI"]
    },
    {
        id: 3,
        name: "Mobile App Development Summit",
        category: "Mobile Development",
        difficulty: "Intermediate",
        date: "2026-09-25",
        time: "9:00 AM",
        location: "Convention Center, Delhi",
        description: "Create iOS and Android apps using Flutter and React Native.",
        fullDescription: "Learn to develop cross-platform mobile applications using Flutter and React Native. Build, test, and deploy your own apps.",
        image: "📱",
        attendees: 320,
        seats: 150,
        instructor: "Mike Wilson",
        featured: true,
        tags: ["Flutter", "React Native", "Mobile"]
    },
    {
        id: 4,
        name: "Cloud Computing Masterclass",
        category: "Cloud Computing",
        difficulty: "Advanced",
        date: "2026-10-05",
        time: "11:00 AM",
        location: "Cloud Lab, Hyderabad",
        description: "Master AWS, Azure, and Google Cloud Platform deployment strategies.",
        fullDescription: "Advanced course on cloud platforms. Learn AWS, Azure, GCP, DevOps, microservices, and containerization.",
        image: "☁️",
        attendees: 150,
        seats: 60,
        instructor: "Emma Brown",
        featured: false,
        tags: ["AWS", "Azure", "DevOps"]
    },
    {
        id: 5,
        name: "Cybersecurity Essentials",
        category: "Cybersecurity",
        difficulty: "Intermediate",
        date: "2026-10-10",
        time: "3:00 PM",
        location: "Security Institute, Chennai",
        description: "Learn ethical hacking, penetration testing, and security best practices.",
        fullDescription: "Master cybersecurity fundamentals, ethical hacking, penetration testing, and security compliance.",
        image: "🔒",
        attendees: 200,
        seats: 85,
        instructor: "Alex Turner",
        featured: false,
        tags: ["Security", "Hacking", "Compliance"]
    },
    {
        id: 6,
        name: "IoT & Embedded Systems Conference",
        category: "IoT",
        difficulty: "Advanced",
        date: "2026-10-15",
        time: "10:00 AM",
        location: "Research Center, Pune",
        description: "Build smart devices and IoT solutions with Arduino and Raspberry Pi.",
        fullDescription: "Comprehensive guide to building IoT applications using Arduino, Raspberry Pi, and IoT platforms.",
        image: "⚙️",
        attendees: 120,
        seats: 50,
        instructor: "David Lee",
        featured: false,
        tags: ["Arduino", "Raspberry Pi", "IoT"]
    },
    {
        id: 7,
        name: "Python for Data Science",
        category: "AI & ML",
        difficulty: "Beginner",
        date: "2026-10-20",
        time: "4:00 PM",
        location: "Data Hub, Bangalore",
        description: "Introduction to Python, Pandas, NumPy, and data visualization.",
        fullDescription: "Learn Python programming for data science. Master Pandas, NumPy, Matplotlib, and create data visualizations.",
        image: "📊",
        attendees: 290,
        seats: 120,
        instructor: "Lisa Anderson",
        featured: false,
        tags: ["Python", "Data Science", "Analytics"]
    },
    {
        id: 8,
        name: "Full Stack Development Camp",
        category: "Web Development",
        difficulty: "Advanced",
        date: "2026-10-25",
        time: "9:30 AM",
        location: "Dev Hub, Mumbai",
        description: "Build complete web applications using MERN stack.",
        fullDescription: "Master the MERN stack (MongoDB, Express, React, Node.js) to build full-stack web applications.",
        image: "💻",
        attendees: 210,
        seats: 95,
        instructor: "Robert Garcia",
        featured: false,
        tags: ["MERN", "Full Stack", "JavaScript"]
    },
    {
        id: 9,
        name: "Blockchain & Web3 Summit",
        category: "Cloud Computing",
        difficulty: "Advanced",
        date: "2026-11-01",
        time: "10:00 AM",
        location: "Crypto Hub, Mumbai",
        description: "Learn about blockchain technology, smart contracts, and DeFi.",
        fullDescription: "Explore blockchain, cryptocurrencies, smart contracts, DeFi protocols, and Web3 development.",
        image: "⛓️",
        attendees: 170,
        seats: 70,
        instructor: "Chris Martinez",
        featured: false,
        tags: ["Blockchain", "Web3", "Smart Contracts"]
    }
];

// ==================== THEME MANAGEMENT ====================
const themeToggle = document.getElementById('themeToggle');

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark-mode') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
    
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ==================== MOBILE MENU ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ==================== FEATURED EVENTS DISPLAY ====================
function displayFeaturedEvents() {
    const container = document.getElementById('featuredEventsContainer');
    if (!container) return;

    const featuredEvents = eventsData.filter(event => event.featured);
    
    container.innerHTML = featuredEvents.map(event => createEventCard(event)).join('');
}

function createEventCard(event) {
    return `
        <div class="event-card">
            <div class="event-image">${event.image}</div>
            <div class="event-body">
                <span class="event-category">${event.category}</span>
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
                        <i class="fas fa-users"></i>
                        <span>${event.attendees} attending</span>
                    </div>
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
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ==================== FAVORITES ====================
function toggleFavorite(button, eventId) {
    button.classList.toggle('active');
    
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (button.classList.contains('active')) {
        if (!favorites.includes(eventId)) {
            favorites.push(eventId);
        }
        button.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        favorites = favorites.filter(id => id !== eventId);
        button.innerHTML = '<i class="far fa-heart"></i>';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(eventId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(eventId);
}

// ==================== REGISTRATION ====================
function openRegistration(eventId, eventName) {
    const modal = document.getElementById('eventModal');
    const event = eventsData.find(e => e.id === eventId);
    
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const isRegistered = registrations.some(r => r.eventId === eventId);

    const modalBody = document.getElementById('modalBody');
    
    if (isRegistered) {
        const reg = registrations.find(r => r.eventId === eventId);
        modalBody.innerHTML = `
            <h2><i class="fas fa-check-circle" style="color: var(--accent);"></i> Already Registered!</h2>
            <div style="background-color: var(--border); padding: 1rem; border-radius: var(--radius); margin: 1rem 0;">
                <p><strong>Event:</strong> ${eventName}</p>
                <p><strong>Date:</strong> ${formatDate(event.date)}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Registered On:</strong> ${new Date(reg.registeredAt).toLocaleDateString()}</p>
            </div>
            <button class="btn btn-primary" onclick="closeModal()" style="width: 100%;">Close</button>
        `;
    } else {
        modalBody.innerHTML = getRegistrationFormHTML(event);
    }

    modal.style.display = 'block';
}

function getRegistrationFormHTML(event) {
    return `
        <h2>Register for ${event.name}</h2>
        <form class="registration-form" id="registrationForm">
            <input type="hidden" id="eventId" value="${event.id}">
            
            <div class="form-group">
                <label for="fullName">Full Name <span style="color: var(--danger);">*</span></label>
                <input type="text" id="fullName" placeholder="Enter your full name" required>
                <span class="form-error">Please enter your full name</span>
            </div>

            <div class="form-group">
                <label for="email">Email Address <span style="color: var(--danger);">*</span></label>
                <input type="email" id="email" placeholder="Enter your email" required>
                <span class="form-error">Please enter a valid email</span>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number <span style="color: var(--danger);">*</span></label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required>
                <span class="form-error">Please enter a valid phone number</span>
            </div>

            <div class="form-group">
                <label for="college">College/University <span style="color: var(--danger);">*</span></label>
                <input type="text" id="college" placeholder="Enter your college name" required>
                <span class="form-error">Please enter your college name</span>
            </div>

            <div class="form-group">
                <label for="year">Year of Study <span style="color: var(--danger);">*</span></label>
                <select id="year" required>
                    <option value="">-- Select Year --</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Other">Other</option>
                </select>
                <span class="form-error">Please select your year</span>
            </div>

            <div class="form-group">
                <label for="experience">Experience Level <span style="color: var(--danger);">*</span></label>
                <select id="experience" required>
                    <option value="">-- Select Level --</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                <span class="form-error">Please select your experience level</span>
            </div>

            <div class="form-group">
                <label for="message">Additional Message</label>
                <textarea id="message" placeholder="Tell us anything else we should know..."></textarea>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn form-submit">
                    <i class="fas fa-paper-plane"></i> Confirm Registration
                </button>
                <button type="button" class="btn form-cancel" onclick="closeModal()">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        </form>
    `;
}

function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
}

function submitRegistration(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const eventId = parseInt(document.getElementById('eventId').value);
    const registration = {
        eventId,
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        college: document.getElementById('college').value,
        year: document.getElementById('year').value,
        experience: document.getElementById('experience').value,
        message: document.getElementById('message').value,
        registeredAt: new Date().toISOString()
    };

    let registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push(registration);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    showSuccessMessage();
    setTimeout(() => {
        closeModal();
    }, 2500);
}

function validateForm() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        
        if (!input.value) {
            formGroup.classList.add('error');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            formGroup.classList.add('error');
            isValid = false;
        } else if (input.type === 'tel' && !isValidPhone(input.value)) {
            formGroup.classList.add('error');
            isValid = false;
        } else {
            formGroup.classList.remove('error');
        }
    });

    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\D/g, ''));
}

function showSuccessMessage() {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--accent); margin-bottom: 1rem;"></i>
            <h2 style="color: var(--accent);">Registration Successful! ✓</h2>
            <p style="margin: 1rem 0;">Thank you for registering. You will receive a confirmation email shortly.</p>
            <p style="font-size: 0.9rem; color: rgba(99, 102, 241, 0.7);">Check your email for event details and updates.</p>
        </div>
    `;
}

// ==================== MODAL MANAGEMENT ====================
const modal = document.getElementById('eventModal');
const closeBtn = document.querySelector('.close');

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    displayFeaturedEvents();
    
    // Register form submission
    if (document.getElementById('registrationForm')) {
        document.getElementById('registrationForm').addEventListener('submit', submitRegistration);
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// Animate counters when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'eventCount') {
            animateCounter(entry.target, 15);
            observer.unobserve(entry.target);
        }
    });
});

const eventCountElement = document.getElementById('eventCount');
if (eventCountElement) {
    observer.observe(eventCountElement);
}