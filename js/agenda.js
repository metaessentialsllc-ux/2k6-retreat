/**
 * 2k6 Retreat - Trip Itinerary Data
 */

const retreatData = [
    {
        day: "Friday, Jan 16",
        events: [
            { 
                time: "5:00 PM", 
                title: "Arrival & Cabin Check-in", 
                location: "Main Cabin", 
                icon: "🚗",
                details: "Welcome home! Pull up to the gate (Code: TBP) and head to the Main Cabin to find your room."
            },
            { 
                time: "7:00 PM", 
                title: "Welcome Reception", 
                location: "Main Cabin", 
                icon: "🍴",
                details: "R&B, hors d'oeuvres and cocktails. Come as you are...Let's kick off the weekend with some music and memories!"
            }
        ]
    },
    {
        day: "Saturday, Jan 17",
        events: [
            { 
                time: "7:00 AM", 
                title: "Coffee and Conversations", 
                location: "Kitchen", 
                icon: "☕",
                details: "Early birds! Grab a cup of Joe and enjoy the mountain sunrise on the deck."
            },
            { 
                time: "8:00-10:00 AM", 
                title: "Breakfast", 
                location: "Main Cabin", 
                icon: "🍳",
                details: "Full Southern breakfast spread. Bring your appetite!"
            },
            { 
                time: "10:30 -12:00PM", 
                title: "Reflection & Journaling", 
                location: "Main Cabin", 
                icon: "📖",
                details: "A quiet space for a guided session. We'll provide the journals—you bring the heart."
            },
            { 
                time: "12:00 PM", 
                title: "Lunch", 
                location: "Main Cabin", 
                icon: "🍴",
                details: "Light lunch: Gourmet salad bar and sandwiches."
            },
            { 
                time: "2:00-7:00 PM", 
                title: "Enjoy House & Family Check-in", 
                location: "Retreat Complex", 
                icon: "🏠",
                details: "Free time! Explore the trails, nap, or catch up with the sorors in the hot tub."
            },
            { 
                time: "7:30 PM", 
                title: "Dinner (Warm and Fuzzy)", 
                location: "Main House", 
                icon: "✨",
                details: "Dress code: Your favorite fuzzy onesie! Tonight is all about the 'Relax' part of our theme."
            }
        ]
    },
    {
        day: "Sunday, Jan 18",
        events: [
            { 
                time: "7:00-9:00 AM", 
                title: "Coffee and Motivation", 
                location: "Main Cabin", 
                icon: "🥞",
                details: "A light morning fuel-up before our yoga session."
            },
            { 
                time: "10:00 AM", 
                title: "Yoga Session", 
                location: "Guest House", 
                icon: "🧘‍♀️",
                details: "Release the tension. All levels welcome—mats are provided in your essentials list!"
            },
            { 
                time: "12:00 PM", 
                title: "Lunch", 
                location: "Main House", 
                icon: "🍽️",
                details: "Lunch will be served on the patio (weather permitting)."
            },
            { 
                time: "2:00 PM", 
                title: "Bonding Activity", 
                location: "Main House Kitchen", 
                icon: "💕",
                details: "Don't forget to wear your Red Sweater for the group photo during this session!"
            },
            { 
                time: "4:00 PM", 
                title: "Community Service (Coat Drive)", 
                location: "Guest House", 
                icon: "🧥",
                details: "Bring your donated coats to the Guest House common room for sorting and tagging."
            },
            { 
                time: "7:00 PM", 
                title: "Dinner and Dancing", 
                location: "Main House", 
                icon: "💃",
                details: "DEALER'S CHOICE: Wear that outfit you love but never get to wear. We're going out (in) with style!"
            }
        ]
    },
    {
        day: "Monday, Jan 19",
        events: [
            { 
                time: "7:00 AM", 
                title: "Coffee and Continental", 
                location: "Main Cabin", 
                icon: "🥐",
                details: "Quick bites and hugs before the road."
            },
            { 
                time: "10:00 AM", 
                title: "Check Out", 
                location: "Safe Travels!", 
                icon: "🏡",
                details: "Please ensure all trash is in bins. We'll see you at the next one!"
            }
        ]
    }
];

function renderAgenda() {
    const container = document.getElementById('agenda-container');
    if (!container) return;

    let html = "";

    retreatData.forEach((day, dayIndex) => {
        html += `
            <div class="mb-10 relative">
                <h3 class="text-sm font-black text-red-700 uppercase tracking-widest mb-6 sticky top-0 bg-slate-50/95 backdrop-blur-sm py-2 z-10">${day.day}</h3>
                <div class="space-y-8 ml-3 border-l-2 border-slate-200">
        `;

        day.events.forEach((event, eventIndex) => {
            // Unique ID for each card's detail section
            const detailId = `detail-${dayIndex}-${eventIndex}`;
            
            html += `
                <div class="relative pl-8">
                    <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-red-700 shadow-sm"></div>
                    
                    <div onclick="toggleDetails('${detailId}')" class="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 active:scale-[0.98] transition-all cursor-pointer">
                        <div class="flex justify-between items-start mb-1">
                            <span class="text-[10px] font-black uppercase tracking-tighter text-slate-400">${event.time}</span>
                            <span class="text-xl">${event.icon}</span>
                        </div>
                        <h4 class="text-md font-bold text-slate-800 leading-tight">${event.title}</h4>
                        <p class="text-xs text-slate-500 mt-1 font-medium flex items-center italic">
                            <span class="mr-1 opacity-50 text-[10px] not-italic">📍</span> ${event.location}
                        </p>

                        ${event.details ? `
                        <div id="${detailId}" class="hidden mt-4 pt-4 border-t border-slate-50 overflow-hidden">
                            <p class="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                ${event.details}
                            </p>
                        </div>
                        <div class="flex items-center mt-3 space-x-1 opacity-40">
                             <p class="text-[8px] text-red-700 font-bold uppercase tracking-widest">Tap for info</p>
                             <span class="text-[8px]">▼</span>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

// Global toggle function
window.toggleDetails = function(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('hidden');
        if (navigator.vibrate) navigator.vibrate(5);
    }
};

// Init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAgenda);
} else {
    renderAgenda();
}
