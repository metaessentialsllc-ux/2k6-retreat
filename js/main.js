/**
 * 2k6 Retreat - Core Logic
 */

// 1. Navigation Logic
function navigate(pageId) {
    // Haptic feedback
    if (window.navigator.vibrate) window.navigator.vibrate(10);

    // Switch Sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach(s => s.classList.add('hidden'));
    
    const activeSection = document.getElementById(`${pageId}-view`);
    if (activeSection) activeSection.classList.remove('hidden');

    // Update Nav UI
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('text-indigo-600');
        btn.classList.add('text-slate-400');
    });

    // Find the clicked button and highlight it
    const activeBtn = document.querySelector(`button[onclick="navigate('${pageId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('text-indigo-600');
    }

    window.scrollTo(0, 0);
}

// 2. Map Logic

    function openMap(type) {
    // The real address for the cabin
    const address = encodeURIComponent("808 High River Road, Elijay, GA 30540");
    
    if (type === 'apple') {
        // Universal Link - Works best in PWAs
        window.open(`https://maps.apple.com/?q=${address}`, '_blank');
    } else {
        // Standard Google Maps Link
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    }
}


// 3. Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Offline mode ready.'))
            .catch(err => console.log('SW failed.', err));
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => navigate('home'));
