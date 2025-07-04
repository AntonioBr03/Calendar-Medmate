import type { EventItem } from "@howljs/calendar-kit";
import { WeekViewEvent } from "react-native-week-view";
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

export const reactWeekEvent: WeekViewEvent[] = [
  // Monday
  {
    id: 1,
    startDate: new Date(2025, 7, 18, 9, 0),
    endDate: new Date(2025, 7, 18, 10, 30),
    color: "#2196F3",
    title: "team Meeting",
    description: "Team Meeting",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "monday",
  },
  {
    id: 2,
    startDate: new Date(2025, 7, 18, 13, 0),
    endDate: new Date(2025, 7, 18, 14, 0),
    color: "#4CAF50",
    title: "Design Review",
    description: "Design Review",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "monday",
  },

  // Tuesday
  {
    id: 3,
    startDate: new Date(2025, 7, 19, 10, 0),
    endDate: new Date(2025, 7, 19, 11, 30),
    color: "#FFC107",
    title: "Client Call",
    description: "Client Call",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "tuesday",
  },
  {
    id: 4,
    startDate: new Date(2025, 7, 19, 15, 0),
    endDate: new Date(2025, 7, 19, 16, 0),
    color: "#F44336",
    title: "Bug Fix Sprint",
    description: "Bug Fix Sprint",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "tuesday",
  },

  // Wednesday
  {
    id: 5,
    startDate: new Date(2025, 7, 20, 9, 0),
    endDate: new Date(2025, 7, 20, 11, 0),
    color: "blue",
    title: "another one",
    description: "another description for one",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "wednesday",
  },
  {
    id: 6,
    startDate: new Date(2025, 7, 20, 14, 0),
    endDate: new Date(2025, 7, 20, 15, 30),
    color: "#9C27B0",
    title: "Marketing Plan",
    description: "Marketing Plan",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "wednesday",
  },

  // Thursday
  {
    id: 7,
    startDate: new Date(2025, 7, 21, 10, 0),
    endDate: new Date(2025, 7, 21, 11, 0),
    color: "#00BCD4",
    title: "UX Workshop",
    description: "UX Workshop",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "thursday",
  },
  {
    id: 8,
    startDate: new Date(2025, 7, 21, 12, 0),
    endDate: new Date(2025, 7, 21, 13, 30),
    color: "#FF5722",
    title: "Lunch & Learn",
    description: "Lunch & Learn",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "thursday",
  },

  // Friday
  {
    id: 9,
    startDate: new Date(2025, 7, 22, 10, 0),
    endDate: new Date(2025, 7, 22, 11, 30),
    color: "red",
    title: "E2",
    description: "E2",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "friday",
  },
  {
    id: 10,
    startDate: new Date(2025, 7, 22, 14, 0),
    endDate: new Date(2025, 7, 22, 16, 0),
    color: "#795548",
    title: "Retrospective",
    description: "Retrospective",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "friday",
  },

  // Saturday
  {
    id: 11,
    startDate: new Date(2025, 7, 23, 9, 30),
    endDate: new Date(2025, 7, 23, 11, 0),
    color: "#607D8B",
    title: "Personal Project",
    description: "Personal Project",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "saturday",
  },

  // Sunday
  {
    id: 12,
    startDate: new Date(2025, 7, 24, 10, 0),
    endDate: new Date(2025, 7, 24, 11, 30),
    color: "green",
    title: "E2",
    description: "E2",
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "sunday",
  },
  {
    id: 13,
    startDate: new Date(2025, 7, 26),
    endDate: new Date(2025, 7, 28),
    color: "green",
    title: "E3",
    description: "E3",
    allDay: true,
    eventKind: "standard",
    resolveOverlap: "stack",
    stackKey: "",
  },
];
