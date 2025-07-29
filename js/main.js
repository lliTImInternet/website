document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation for gradient overlay
    window.addEventListener('scroll', function() {
        const overlay = document.querySelector('.gradient-overlay');
        const scrollPosition = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        const socialSection = document.querySelector('.social-section');
        const socialPosition = socialSection.getBoundingClientRect().top;
        const socialScreenPosition = window.innerHeight / 1.3;

        
        // Adjust overlay height based on scroll position
        if (scrollPosition < heroHeight) {
            const newHeight = 40 - (scrollPosition / heroHeight * 20);
            overlay.style.height = `${newHeight}%`;
        }

        // Project animation on scroll
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (projectPosition < screenPosition) {
                project.classList.add('visible');
            }
        });

        if (socialPosition < socialScreenPosition) {
            socialSection.classList.add('visible');
        }
    });

    // Trigger initial check in case projects are already visible
    window.dispatchEvent(new Event('scroll'));
});