/**
 * 2k6 Retreat - Main App Logic
 */

// 1. Navigation Logic
function navigate(pageId) {
    // Haptic feedback for mobile
    if (window.navigator.vibrate) window.navigator.vibrate(10);

    // Hide all sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(s => s.classList.add('hidden'));
    
    // Show active section
    const activeSection = document.getElementById(`${pageId}-view`);
    if (activeSection) {
        activeSection.classList.remove('hidden');
        
        // RE-RENDER FIX: If we go to agenda, make sure it's drawn
        if (pageId === 'agenda' && typeof renderAgenda === 'function') {
            renderAgenda();
        }
    }

    // Update Nav Button Colors
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('text-indigo-600');
        btn.classList.add('text-slate-400');
    });

    // Highlight the button that was just clicked
    const activeBtn = document.querySelector(`button[onclick="navigate('${pageId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('text-indigo-600');
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
}

// 2. Map Handlers
function openMap(type) {
    const address = encodeURIComponent("123 Bear Peak Overlook, Blue Ridge, GA 30513");
    const url = type === 'apple' 
        ? `https://maps.apple.com/?q=${address}` 
        : `https://www.google.com/maps/search/?api=1&query=${address}`;
    
    window.location.href = url;
}

// 3. Service Worker Setup
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('App ready for offline use.'))
            .catch(err => console.error('PWA Setup Failed:', err));
    });
}

// Start on Home page
document.addEventListener('DOMContentLoaded', () => navigate('home'));
