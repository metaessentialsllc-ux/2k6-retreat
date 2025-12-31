/**
 * 2k6 Retreat - Trip Data & Generator
 */

const retreatData = [
    {
        day: "Friday, Oct 20",
        events: [
            { time: "4:00 PM", title: "Arrival & Check-in", location: "The Blue Ridge Cabin", icon: "🚗" },
            { time: "7:00 PM", title: "Welcome Dinner", location: "Main Deck", icon: "🍴" },
            { time: "9:00 PM", title: "Fire Pit & S'mores", location: "Backyard", icon: "🔥" }
        ]
    },
    {
        day: "Saturday, Oct 21",
        events: [
            { time: "9:00 AM", title: "Breakfast Bar", location: "Kitchen", icon: "☕" },
            { time: "11:00 AM", title: "Group Hike", location: "Bear Trail Trailhead", icon: "🥾" },
            { time: "2:00 PM", title: "Afternoon Leisure", location: "Games & Relaxation", icon: "🧘" },
            { time: "7:00 PM", title: "Anniversary Gala", location: "Great Hall", icon: "✨" }
        ]
    }
];

// Function to render the agenda into the HTML
function renderAgenda() {
    const container = document.getElementById('agenda-view');
    if (!container) return;

    let html = `<h2 class="text-3xl font-extrabold mb-8 text-slate-800">Trip Agenda</h2>`;

    retreatData.forEach(day => {
        html += `
            <div class="mb-10">
                <h3 class="text-lg font-bold text-indigo-600 mb-4 sticky top-16 bg-slate-50 py-2">${day.day}</h3>
                <div class="space-y-6 border-l-2 border-slate-200 ml-3">
        `;

        day.events.forEach(event => {
            html += `
                <div class="relative pl-8">
                    <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-500"></div>
                    
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <div class="flex justify-between items-start">
                            <span class="text-xs font-bold uppercase tracking-widest text-slate-400">${event.time}</span>
                            <span class="text-lg">${event.icon}</span>
                        </div>
                        <h4 class="text-md font-bold text-slate-800 mt-1">${event.title}</h4>
                        <p class="text-sm text-slate-500 flex items-center mt-1">
                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            ${event.location}
                        </p>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

// Run the render function when the script loads
document.addEventListener('DOMContentLoaded', renderAgenda);
