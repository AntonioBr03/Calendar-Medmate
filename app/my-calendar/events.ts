import type { EventItem } from "@howljs/calendar-kit";

const today = new Date().toISOString().split("T")[0]; // e.g., "2025-07-04"

export const events: EventItem[] = [
  {
    id: "1",
    title: "Morning Standup",
    start: { dateTime: `${today}T09:00:00Z` },
    end: { dateTime: `${today}T09:30:00Z` },
    color: "#4285F4",
  },
  {
    id: "2",
    title: "Team Sync",
    start: { dateTime: `${today}T10:00:00Z` },
    end: { dateTime: `${today}T11:00:00Z` },
    color: "#34A853",
  },
  {
    id: "3",
    title: "Lunch Break",
    start: { dateTime: `${today}T12:00:00Z` },
    end: { dateTime: `${today}T13:00:00Z` },
    color: "#FBBC05",
  },
  {
    id: "4",
    title: "1:1 Meeting",
    start: { dateTime: `${today}T14:00:00Z` },
    end: { dateTime: `${today}T14:30:00Z` },
    color: "#EA4335",
  },
];
