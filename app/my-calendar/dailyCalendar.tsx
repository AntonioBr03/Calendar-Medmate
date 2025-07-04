import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const events = [
  {
    title: "Morning Standup",
    start: new Date(today.setHours(9, 0)),
    end: new Date(today.setHours(9, 30)),
  },
  {
    title: "Team Sync",
    start: new Date(today.setHours(11, 0)),
    end: new Date(today.setHours(12, 0)),
  },
  {
    title: "Lunch Break",
    start: new Date(today.setHours(13, 0)),
    end: new Date(today.setHours(14, 0)),
  },
  {
    title: "1:1 Meeting",
    start: new Date(today.setHours(15, 30)),
    end: new Date(today.setHours(16, 0)),
  },
];

export default function DailyCalendar() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          Today s Schedule
        </Text>

        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            overflow: "hidden",
            elevation: 4,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
          }}
        >
          <Calendar
            events={events}
            height={600}
            mode="3days" // changed the mode to 3days so the info would be readable
            hideNowIndicator={false}
            scrollOffsetMinutes={480}
            showTime={false}
            hourRowHeight={100}
            eventCellStyle={(event) => ({
              backgroundColor: "#4f46e5",
              borderRadius: 6,
              padding: 4,
            })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
