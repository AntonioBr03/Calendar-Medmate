import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Button title="Nothing" onPress={() => {}} />
      <Button
        title="big Calendar"
        onPress={() => router.push("/my-calendar/dailyCalendar")}
      />
      <Button
        title="calendar Kit"
        onPress={() => router.push("/my-calendar/calendarKit")}
      />
      <Button
        title="Full Calendar"
        onPress={() => router.push("/my-calendar/fullCalendar")}
      />
      <Button
        title="Full Calendar .2"
        onPress={() => router.push("/my-calendar/anotherCalendar")}
      />
    </View>
  );
}
