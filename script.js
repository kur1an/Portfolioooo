function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const homeContent = document.getElementById('home-content');

    sections.forEach(section => {
        section.classList.remove('active');
    });

    if (sectionId === 'home') {
        document.getElementById('home').classList.add('active');
        homeContent.innerHTML = '';
        ['about', 'skills', 'projects', 'contact'].forEach(id => {
            const section = document.getElementById(id);
            homeContent.innerHTML += section.innerHTML;
        });
    } else {
        document.getElementById(sectionId).classList.add('active');
    }
}

function showExperience(company) {
    const details = {
        skillcraft: {
            company: "SkillCraft Technology",
            role: "Cyber Security Intern",
            date: "June 2024",
            description: "Worked on cyber security tools and performed vulnerability assessments."
        },
        bharatintern: {
            company: "Bharat Intern",
            role: "Data Science Intern",
            date: "February 2024",
            description: "Analyzed datasets and built machine learning models for predictions."
        },
        codeway: {
            company: "Codeway Solutions",
            role: "Android Development Intern",
            date: "January 2024",
            description: "Developed Android applications with user-friendly interfaces and API integration."
        }
    };

    const experience = details[company];
    const container = document.getElementById('experience-details');
    container.innerHTML = `
        <h4>${experience.company}</h4>
        <p><strong>Role:</strong> ${experience.role}</p>
        <p><strong>Date:</strong> ${experience.date}</p>
        <p>${experience.description}</p>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.view-more-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.closest('.project-card').querySelector('.project-details');
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                details.style.display = 'none';
                this.textContent = 'View More Details';
            }
        });
    });
});


function showSection(sectionId) {
// Hide all main sections
document.querySelectorAll('.section').forEach(section => {
section.classList.remove('active');
});

// Show selected section
const targetSection = document.getElementById(sectionId);
if (targetSection) {
targetSection.classList.add('active');

// Special handling for About section and its subsections
if (sectionId === 'about') {
    document.getElementById('experience').classList.add('active');
    setTimeout(() => {
        document.getElementById('experience').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
}
}



document.getElementById('hire-form').addEventListener('submit', function(e) {
e.preventDefault();

const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
};

// Using FormSubmit.co for easy form handling
fetch('https://formsubmit.co/el/duxeji', {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Message sent successfully!');
    document.getElementById('hire-form').reset();
})
.catch(error => {
    console.error('Error:', error);
    alert('There was an error sending your message.');
});
});



// Handle subsection navigation
if (sectionId === 'experience' || sectionId === 'certifications') {
document.getElementById('about').classList.add('active');
document.getElementById(sectionId).classList.add('active');

// Smooth scroll to the subsection
setTimeout(() => {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}, 50);
}


}
