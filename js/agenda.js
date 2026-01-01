/**
 * 2k6 Retreat - Trip Itinerary Data
 */

const retreatData = [
    {
        day: "Friday, Jan 16",
        events: [
            { time: "5:00 PM", title: "Arrival & Cabin Check-in", location: "Main Cabin", icon: "🚗" },
            { time: "7:00 PM", title: "Welcome Reception", location: "Main Cabin", icon: "🍴" }
        ]
    },
    {
        day: "Saturday, Jan 17",
        events: [
            { time: "7:00 AM", title: "Coffee and Conversations", location: "Kitchen", icon: "☕" },
            { time: "8:00-10:00 AM", title: "Breakfast", location: "Main Cabin", icon: "🍳" },
            { time: "10:30 -12:00PM", title: "Reflection & Journaling", location: "Main Cabin", icon: "📖" },
            { time: "12:00 PM", title: "Lunch", location: "Main Cabin", icon: "🍴" },
            { time: "2:00-7:00 PM", title: "Enjoy House & Family Check-in", location: "Retreat Complex", icon: "🏠" },
            { time: "7:30 PM", title: "Dinner (Warm and Fuzzy)", location: "Main House", icon: "✨" }
        ]
    },
    {
        day: "Sunday, Jan 18",
        events: [
            { time: "7:00-9:00 AM", title: "Coffee and Motivation", location: "Main Cabin", icon: "🥞" },
            { time: "10:00 AM", title: "Yoga Session", location: "Guest House", icon: "🧘‍♀️" },
            { time: "12:00 PM", title: "Lunch", location: "Main House", icon: "🍽️" },
            { time: "2:00 PM", title: "Bonding Activity (Wear Red Sweater)", location: "Main House Kitchen", icon: "💕" },
            { time: "4:00 PM", title: "Community Service (Coat Drive)", location: "Guest House", icon: "🧥" },
            { time: "7:00 PM", title: "Dinner and Dancing", location: "Main House", icon: "💃" }
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
    // Note: We target 'agenda-container' which lives inside 'agenda-view'
    const container = document.getElementById('agenda-container');
    if (!container) {
        console.error("Target #agenda-container not found in HTML");
        return;
    }

    let html = ""; // Container title is already in HTML

    retreatData.forEach(day => {
        html += `
            <div class="mb-10 relative">
                <h3 class="text-sm font-black text-red-700 uppercase tracking-widest mb-6 sticky top-[0px] bg-slate-50/95 backdrop-blur-sm py-2 z-10">${day.day}</h3>
                <div class="space-y-8 ml-3 border-l-2 border-slate-200">
        `;

        day.events.forEach(event => {
            html += `
                <div class="relative pl-8">
                    <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-red-700 shadow-sm"></div>
                    <div class="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 active:scale-[0.98] transition-transform">
                        <div class="flex justify-between items-start mb-1">
                            <span class="text-[10px] font-black uppercase tracking-tighter text-slate-400">${event.time}</span>
                            <span class="text-xl">${event.icon}</span>
                        </div>
                        <h4 class="text-md font-bold text-slate-800 leading-tight">${event.title}</h4>
                        <p class="text-xs text-slate-500 mt-1 font-medium flex items-center italic">
                            <span class="mr-1 opacity-50 text-[10px] not-italic">📍</span> ${event.location}
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
