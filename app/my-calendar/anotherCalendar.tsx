import React, { useReducer, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import WeekView, { WeekViewEvent } from "react-native-week-view";
import { reactWeekEvent } from "./events";

const EDIT_EVENT_CONFIG = {
  top: true,
  bottom: true,
  left: true,
  right: true,
};

const eventsReducer = (
  prevEvents: WeekViewEvent[],
  action:
    | {
        type: "update";
        event: WeekViewEvent;
        newStartDate: Date;
        newEndDate: Date;
      }
    | { type: "add"; event: WeekViewEvent }
) => {
  switch (action.type) {
    case "update":
      return prevEvents.map((e) =>
        e.id === action.event.id
          ? { ...e, startDate: action.newStartDate, endDate: action.newEndDate }
          : e
      );
    case "add":
      return [...prevEvents, action.event];
    default:
      return prevEvents;
  }
};

const MyOtherCompnent = () => {
  const [events, dispatch] = useReducer(eventsReducer, reactWeekEvent);
  const [editingEventId, setEditingEventId] = useState<number | undefined>(
    undefined
  );

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [pendingStartDate, setPendingStartDate] = useState<Date | undefined>(
    undefined
  );

  const handlePressEvent = (event: WeekViewEvent) => {
    if (editingEventId !== null) {
      setEditingEventId(undefined);
    } else {
      alert(`Event pressed: ${event.title}`);
    }
  };

  const handleLongPressEvent = (event: WeekViewEvent) => {
    setEditingEventId((prev) => (prev === event.id ? undefined : event.id));
  };

  const handleEditEvent = (
    event: WeekViewEvent,
    newStartDate: Date,
    newEndDate: Date
  ) => {
    dispatch({ type: "update", event, newStartDate, newEndDate });
  };

  const handleCreateEvent = (_: any, _hour: number, date: Date) => {
    setPendingStartDate(date);
    setShowCreateModal(true);
  };

  const handleAddEvent = () => {
    if (!pendingStartDate) return;

    const endDate = new Date(pendingStartDate);
    endDate.setHours(endDate.getHours() + 1);

    const newEvent: WeekViewEvent = {
      id: Date.now(),
      startDate: pendingStartDate,
      endDate,
      title: newEventTitle,
      description: newEventDescription,
      color: "#4f46e5",
      eventKind: "block",
      resolveOverlap: "stack",
      stackKey: String(Date.now()),
    };

    dispatch({ type: "add", event: newEvent });

    setShowCreateModal(false);
    setPendingStartDate(undefined);
    setNewEventTitle("");
    setNewEventDescription("");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <WeekView
          events={events}
          selectedDate={new Date(2025, 6, 18)}
          numberOfDays={5}
          pageStartAt={{ weekday: 1, left: 0 }}
          formatDateHeader="ddd DD"
          hoursInDisplay={12}
          startHour={8}
          editingEvent={editingEventId}
          onEditEvent={handleEditEvent}
          onDragEvent={handleEditEvent}
          onEventPress={handlePressEvent}
          onEventLongPress={handleLongPressEvent}
          onGridClick={handleCreateEvent}
          onGridLongPress={handleCreateEvent}
          editEventConfig={EDIT_EVENT_CONFIG}
          headerStyle={styles.headerStyle}
          hourTextStyle={styles.hourTextStyle}
          eventContainerStyle={styles.eventContainerStyle}
        />
      </View>

      <Modal
        visible={showCreateModal}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setShowCreateModal(false)}
      >
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "rgba(255,0,0,0.2)" },
          ]}
          onLayout={(e) => {
            console.log("Modal wrapper layout:", e.nativeEvent.layout);
          }}
        >
          <View
            style={[
              StyleSheet.absoluteFillObject,
              {
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 3,
                borderColor: "blue",
              },
            ]}
            onLayout={(e) =>
              console.log("Blue wrapper layout:", e.nativeEvent.layout)
            }
          >
            <View
              style={[
                styles.modalContent,
                { borderWidth: 3, borderColor: "green" },
              ]}
              onLayout={(e) => {
                console.log("Modal content layout:", e.nativeEvent.layout);
              }}
            >
              <Text style={styles.modalTitle}>New Event</Text>
              <TextInput
                style={styles.input}
                placeholder="Title"
                value={newEventTitle}
                onChangeText={setNewEventTitle}
              />
              <TextInput
                style={styles.input}
                placeholder="Description"
                value={newEventDescription}
                onChangeText={setNewEventDescription}
              />
              <View style={styles.modalButtons}>
                <Button
                  title="Cancel"
                  onPress={() => setShowCreateModal(false)}
                />
                <Button title="Add" onPress={handleAddEvent} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    width: "100%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MyOtherCompnent;
