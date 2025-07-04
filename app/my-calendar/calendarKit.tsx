import {
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  PackedEvent,
  type EventItem,
} from "@howljs/calendar-kit";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { events as exampEvents } from "./events";

export default function CalendarKitPage() {
  const [events, setEvents] = useState<EventItem[]>(exampEvents);

  const handleDragEnd = (event: EventItem) => {
    setEvents((prev) => [...prev, event]);
  };
  const renderEvent = useCallback((event: PackedEvent) => {
    console.log("Rendering event:", event);
    return (
      <View style={{ width: "100%", height: "100%", padding: 4 }}>
        <Text style={{ color: "white", fontSize: 10 }}>{event.title}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <CalendarContainer
        events={[
          {
            id: "1",
            title: "Meeting with Team",
            start: { dateTime: "2025-07-04T11:00:00Z" }, // 11:00 AM UTC
            end: { dateTime: "2025-07-04T12:00:00Z" }, // 12:00 PM UTC
            color: "#4285F4",
          },
        ]}
        initialDate={"2025-07-04"}
        hideWeekDays={[6, 7]}
        scrollByDay={true}
        allowDragToCreate
        onDragEventEnd={handleDragEnd}
        defaultDuration={60}
        dragStep={30}
        useHaptic
      >
        <CalendarHeader />
        <CalendarBody renderEvent={renderEvent} />
      </CalendarContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
});
