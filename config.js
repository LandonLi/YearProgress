/**
 * YearProgress Configuration
 * 
 * Define festivals and special dates here.
 * Format: "MM-DD": { icon: "ICON", name: "NAME" }
 * For Lunar New Year or other variable dates, simply add them for the current/upcoming years.
 */
window.YearProgressConfig = {
    festivals: {
        // Fixed Dates
        "01-01": { icon: "🎉", name: "New Year's Day" },
        "02-14": { icon: "🌹", name: "Valentine's Day" },
        "10-31": { icon: "🎃", name: "Halloween" },
        "12-24": { icon: "🍎", name: "Christmas Eve" },
        "12-25": { icon: "🎄", name: "Christmas" },
        "12-31": { icon: "🥂", name: "New Year's Eve" },

        // Variable Dates
        // 2026
        "02-17": { icon: "🐍", name: "Lunar New Year" },
        "09-25": { icon: "🥮", name: "Mid-Autumn Festival" }
    }
};
