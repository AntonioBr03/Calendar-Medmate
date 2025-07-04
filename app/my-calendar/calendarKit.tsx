import {
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  type EventItem,
  type PackedEvent,
} from "@howljs/calendar-kit";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CalendarKitExample() {
  const events: EventItem[] = [
    {
      id: "1",
      title: "Test Event",
      start: { dateTime: "2025-07-15T12:00:00.000Z", timeZone: "UTC" },
      end: { dateTime: "2025-07-15T13:00:00.000Z", timeZone: "UTC" },
      color: "#4285F4",
    },
    {
      id: "2",
      title: "Monthly Review",
      start: { dateTime: "2025-07-10", timeZone: "UTC" },
      end: { dateTime: "2025-07-11", timeZone: "UTC" },
      color: "#34A853",
      recurrenceRule: "RRULE:FREQ=MONTHLY;BYDAY=1MO",
    },
  ];

  React.useEffect(() => {
    console.log("Events loaded:", events);
  }, []);

  const renderEvent = useCallback((event: PackedEvent) => {
    console.log("Rendering event:", event.title);
    return (
      <View style={[styles.event, { backgroundColor: event.color }]}>
        <Text style={styles.eventText}>{event.title}</Text>
      </View>
    );
  }, []);

  const handleCreation = (start: any) => {
    console.log("started creation at:", start);
  };
  const handleEndCreation = (event: any) => {
    console.log("New event:", event);
  };

  return (
    <View style={styles.container}>
      <CalendarContainer
        allowDragToCreate={true}
        events={events}
        initialDate="2025-07-15"
        onPressEvent={(event) => {
          console.log("Event pressed:", event);
        }}
      >
        <CalendarHeader />
        <CalendarBody renderEvent={renderEvent} />
      </CalendarContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  event: {
    borderRadius: 6,
    padding: 8,
    minHeight: 30,
    minWidth: 50,
    marginVertical: 2,
  },
  eventText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
