import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function HomeScreen() {
  
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/charisma"}>Charisma</Link>
      <Link href={"/strength"}>Strength</Link>
    </View>
  );
}
