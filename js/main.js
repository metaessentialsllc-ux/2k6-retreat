/**
 * 2k6 Retreat - Master App Controller
 */

// 1. NAVIGATION LOGIC
function navigate(pageId) {
    // Haptic feedback for mobile devices
    if (window.navigator.vibrate) window.navigator.vibrate(10);

    // Hide all sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(s => s.classList.add('hidden'));
    
    // Show selected section
    const activeSection = document.getElementById(`${pageId}-view`);
    if (activeSection) {
        activeSection.classList.remove('hidden');
        
        // Ensure Agenda renders if navigating to it
        if (pageId === 'agenda' && typeof renderAgenda === 'function') {
            renderAgenda();
        }
    }

    // Reset all Nav Button colors to gray
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('text-red-700');
        btn.classList.add('text-slate-400');
    });

    // Highlight active button in DST Crimson
    const activeBtn = document.querySelector(`button[onclick*="navigate('${pageId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('text-red-700');
    }

    // Scroll to top of the new page
    window.scrollTo({ top: 0, behavior: 'instant' });
}

// 2. MAP LOGIC
function openMap(type) {
    const address = encodeURIComponent("808 High River Road, Ellijay, GA 30540");
    const url = type === 'apple' 
        ? `https://maps.apple.com/?q=${address}` 
        : `https://www.google.com/maps/search/?api=1&query=${address}`;
    
    window.open(url, '_blank');
}

// 3. COUNTDOWN TIMER LOGIC
function updateCountdown() {
    // Set to Friday, Jan 16, 2026 at 5:00 PM
    const retreatDate = new Date("January 16, 2026 17:00:00").getTime();
    const now = new Date().getTime();
    const gap = retreatDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const display = document.getElementById('countdown-timer');
    if (display) {
        if (gap < 0) {
            display.innerText = "The Summit is here!";
        } else {
            display.innerText = `${days}d ${hours}h until we gather`;
        }
    }
}

// 4. INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
    // Start on home
    navigate('home');
    
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
});

// 5. PWA SERVICE WORKER
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('PWA active'))
            .catch(err => console.error('PWA error', err));
    });
}
