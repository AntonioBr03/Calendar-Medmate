import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const baseDate = new Date(); // today
baseDate.setHours(0, 0, 0, 0); // reset time

function getDateWithTimeOffset(
  dayOffset: number,
  hour: number,
  minute: number = 0
) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + dayOffset);
  date.setHours(hour, minute, 0, 0);
  return date;
}

const events = [
  {
    title: "Monday Kickoff",
    start: getDateWithTimeOffset(1, 9, 0),
    end: getDateWithTimeOffset(1, 10, 30),
  },
  {
    title: "Dev Sync",
    start: getDateWithTimeOffset(1, 11, 0),
    end: getDateWithTimeOffset(1, 12, 0),
  },

  {
    title: "Design Review",
    start: getDateWithTimeOffset(2, 10, 30),
    end: getDateWithTimeOffset(2, 11, 30),
  },
  {
    title: "Client Meeting",
    start: getDateWithTimeOffset(2, 14, 0),
    end: getDateWithTimeOffset(2, 15, 0),
  },

  {
    title: "Code Review",
    start: getDateWithTimeOffset(3, 13, 0),
    end: getDateWithTimeOffset(3, 14, 0),
  },

  {
    title: "Backend Standup",
    start: getDateWithTimeOffset(4, 9, 30),
    end: getDateWithTimeOffset(4, 10, 0),
  },
  {
    title: "UI Testing",
    start: getDateWithTimeOffset(4, 15, 0),
    end: getDateWithTimeOffset(4, 16, 0),
  },

  {
    title: "Wrap-Up",
    start: getDateWithTimeOffset(5, 16, 0),
    end: getDateWithTimeOffset(5, 17, 0),
  },

  {
    title: "Side Project Hack",
    start: getDateWithTimeOffset(6, 11, 0),
    end: getDateWithTimeOffset(6, 13, 0),
  },

  {
    title: "Rest & Recharge",
    start: getDateWithTimeOffset(7, 10, 0),
    end: getDateWithTimeOffset(7, 11, 30),
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
            height={700}
            mode="3days"
            hideNowIndicator={false}
            scrollOffsetMinutes={480}
            showTime={false}
            hourRowHeight={60}
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
