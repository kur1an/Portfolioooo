// Show Section Function
function showSection(sectionId) {
    // Hide all main sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Special handling for Home section
        if (sectionId === 'home') {
            const homeContent = document.getElementById('home-content');
            homeContent.innerHTML = '';
            ['about', 'skills', 'projects', 'contact'].forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    homeContent.innerHTML += section.innerHTML;
                }
            });
        }

        // Special handling for About section and subsections
        if (sectionId === 'about') {
            const experience = document.getElementById('experience');
            if (experience) {
                experience.classList.add('active');
                setTimeout(() => {
                    experience.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
            }
        }

        // Handle subsection navigation
        if (sectionId === 'experience' || sectionId === 'certifications') {
            document.getElementById('about').classList.add('active');
            document.getElementById(sectionId).classList.add('active');

            setTimeout(() => {
                document.getElementById(sectionId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 50);
        }
    }
}

// Show Experience Function
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

// DOM Ready Events
document.addEventListener('DOMContentLoaded', function () {
    // Toggle project details
    const buttons = document.querySelectorAll('.view-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
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


 
    

    // Handle form submission
    const hireForm = document.getElementById('hire-form');
    if (hireForm) {
        hireForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

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
                    hireForm.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error sending your message.');
                });
        });
    }
});
