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
    </View>
  );
}
