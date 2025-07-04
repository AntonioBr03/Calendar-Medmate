import React, { useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import WeekView from "react-native-week-view";
import { reactWeekEvent } from "./events"; // Make sure events have `id`, `startDate`, `endDate`, and `description`

const EDIT_EVENT_CONFIG = {
  top: true,
  bottom: true,
  left: true,
  right: true,
};

// For editing (drag or resize)
const eventsReducer = (prevEvents: any[], action: any) => {
  if (action.type === "update") {
    const { event, newStartDate, newEndDate } = action;
    return prevEvents.map((e) =>
      e.id === event.id
        ? { ...e, startDate: newStartDate, endDate: newEndDate }
        : e
    );
  } else if (action.type === "add") {
    return [...prevEvents, action.event];
  }
  return prevEvents;
};

// For creating new events
const createDummyEvent = ({
  startDate,
  duration,
}: {
  startDate: Date;
  duration: number;
}) => {
  const endDate = new Date(startDate);
  endDate.setHours(startDate.getHours() + duration);
  return {
    id: Date.now(), // or generate a better ID if needed
    description: "New Event",
    color: "lightblue",
    startDate,
    endDate,
  };
};

const MyComponent = () => {
  const [events, dispatch] = useReducer(eventsReducer, reactWeekEvent);
  const [editingEventId, setEditingEventId] = useState<string | number>();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [pendingStartDate, setPendingStartDate] = useState<Date | null>(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");

  const handlePressEvent = (event: any) => {
    if (editingEventId != null) {
      setEditingEventId(undefined);
    } else {
      alert(`Event pressed: ${event.description}`);
    }
  };

  const handleLongPressEvent = (event: any) => {
    setEditingEventId((prev) => (prev === event.id ? undefined : event.id));
  };

  const handleEditEvent = (
    event: any,
    newStartDate: Date,
    newEndDate: Date
  ) => {
    dispatch({ event, newStartDate, newEndDate });
  };

  const handleDragEvent = (
    event: any,
    newStartDate: Date,
    newEndDate: Date
  ) => {
    dispatch({ event, newStartDate, newEndDate });
  };

  const handleCreateNewEvent = (_: any, _startHour: number, date: Date) => {
    const newEvent = createDummyEvent({ startDate: date, duration: 2 });
    dispatch({
      event: {},
      newStartDate: newEvent.startDate,
      newEndDate: newEvent.endDate,
    });
    // Insert it directly (merge manually into reducer)
    events.push(newEvent);
  };

  return (
    <>
      <View style={styles.container}>
        <WeekView
          events={events}
          selectedDate={new Date(2025, 7, 18)}
          numberOfDays={5}
          pageStartAt={{ weekday: 1, left: 0 }}
          formatDateHeader="ddd DD"
          hoursInDisplay={12}
          startHour={8}
          editingEvent={editingEventId}
          onEditEvent={handleEditEvent}
          onDragEvent={handleDragEvent}
          onEventPress={handlePressEvent}
          onEventLongPress={handleLongPressEvent}
          onGridClick={handleCreateNewEvent}
          onGridLongPress={handleCreateNewEvent}
          editEventConfig={EDIT_EVENT_CONFIG}
          headerStyle={styles.headerStyle}
          hourTextStyle={styles.hourTextStyle}
          eventContainerStyle={styles.eventContainerStyle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerStyle: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  hourTextStyle: {
    color: "#666",
    fontSize: 12,
  },
  eventContainerStyle: {
    borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default MyComponent;
