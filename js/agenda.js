/**
 * 2k6 Retreat - Trip Itinerary Data
 */

const retreatData = [
    {
        day: "Friday, Jan 16",
        events: [
            { time: "5:00 PM", title: "Arrival & Cabin Check-in", location: "Main Cabin", icon: "🚗" },
            { time: "7:00 PM", title: "Welcome Reception", location: "Main House", icon: "🍴" }
        ]
    },
    {
        day: "Saturday, Jan 17",
        events: [
            { time: "7:00 AM", title: "Coffee and Conversations", location: "Kitchen", icon: "☕" },
            { time: "11:30 AM", title: "Breakfast", location: "Trailhead", icon: "🍳" },
            { time: "1:30 PM", title: "Reflection & Journaling", location: "Town Square", icon: "📖" },
            { time: "7:30 PM", title: "Dinner (Warm and Fuzzy)", location: "The Lodge", icon: "✨" }
        ]
    },
    {
        day: "Sunday, Jan 18",
        events: [
            { time: "10:00 AM", title: "Coffee and Motivation", location: "Main Cabin", icon: "🥞" },
            { time: "12:00 PM", title: "Bonding/Sisterhood Activity", location: "Cabin Lounge", icon: "💕" },
            { time: "2:00 PM", title: "Community Service (Coat Drive)", location: "Donation Point", icon: "🧥" },
            { time: "7:00 PM", title: "Dinner and Dancing", location: "The Lodge", icon: "💃" }
        ]
    },
    {
        day: "Monday, Jan 19",
        events: [
            { time: "7:00 AM", title: "Coffee and Continental", location: "Main Cabin", icon: "🥐" },
            { time: "10:00 AM", title: "Check Out", location: "Safe Travels!", icon: "🏡" }
        ]
    }
];

function renderAgenda() {
    const container = document.getElementById('agenda-view');
    if (!container) {
        console.error("Target #agenda-view not found in HTML");
        return;
    }

    let html = `<h2 class="text-3xl font-extrabold mb-8 text-slate-800 tracking-tight">Trip Agenda</h2>`;

    retreatData.forEach(day => {
        html += `
            <div class="mb-10 relative">
                <h3 class="text-sm font-black text-indigo-600 uppercase tracking-widest mb-6 sticky top-[72px] bg-slate-50/90 backdrop-blur-sm py-2 z-10">${day.day}</h3>
                <div class="space-y-8 ml-3 border-l-2 border-slate-200">
        `;

        day.events.forEach(event => {
            html += `
                <div class="relative pl-8">
                    <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 shadow-sm"></div>
                    <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 active:scale-[0.98] transition-transform">
                        <div class="flex justify-between items-start mb-1">
                            <span class="text-[10px] font-black uppercase tracking-tighter text-slate-400">${event.time}</span>
                            <span class="text-xl">${event.icon}</span>
                        </div>
                        <h4 class="text-md font-bold text-slate-800 leading-tight">${event.title}</h4>
                        <p class="text-xs text-slate-500 mt-1 font-medium flex items-center">
                            <span class="mr-1 opacity-50 text-[10px]">📍</span> ${event.location}
                        </p>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

// Robust Init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAgenda);
} else {
    renderAgenda();
}
