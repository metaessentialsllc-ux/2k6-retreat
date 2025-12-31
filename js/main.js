/**
 * 2k6 Retreat - Main Application Logic
 */

// 1. Navigation Logic
function navigate(pageId) {
    // 1a. Trigger a tiny haptic vibration (10ms) for that "app" feel
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }

    // 1b. Hide all content sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // 1c. Show the selected section
    const activeSection = document.getElementById(`${pageId}-view`);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // 1d. Update Navigation UI (Active State)
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(btn => {
        // Reset all buttons to gray
        btn.classList.remove('text-indigo-600');
        btn.classList.add('text-slate-400');
    });

    // Highlight the active button
    const activeBtn = document.querySelector(`button[onclick="navigate('${pageId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('text-indigo-600');
    }

    // 1e. Scroll to top when switching pages
    window.scrollTo(0, 0);
}

// 2. Service Worker Registration (Enables Offline Mode)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered!', reg))
            .catch(err => console.error('Service Worker failed:', err));
    });
}

// 3. Initialize App
document.addEventListener('DOMContentLoaded', () => {
    console.log('2k6 Retreat App Ready');
    // Start on the home screen
    navigate('home');
});
