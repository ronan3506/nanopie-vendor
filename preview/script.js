// Simple interactivity for the static dashboard preview
document.addEventListener('DOMContentLoaded', () => {
    console.log('Premium Dashboard Preview Loaded');

    // Add click feedback for action cards
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.querySelector('h3').textContent;
            console.log(`Action clicked: ${title}`);
            
            // Simple visual feedback
            card.style.transform = 'scale(0.96)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Handle bottom nav active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Animate hero progress bar on load
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const targetWidth = progressFill.style.width;
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.transition = 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
            progressFill.style.width = targetWidth;
        }, 300);
    }
});
