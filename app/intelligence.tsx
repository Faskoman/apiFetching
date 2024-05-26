import { View, Text } from "react-native";
import { DndData } from "./types";
import { Link } from "expo-router";
import { useQuery } from "react-query";


export default function HomeScreen() {
  const {data: DndData, isLoading} = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["DndData"],
  });

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Link href={"/"}>Home</Link>
      <Text>Index: {DndData?.index}</Text>
      <Text>Name: {DndData?.name}</Text>
      <Text>Full Name: {DndData?.full_name}</Text>
      <Text>Description:</Text>
      {DndData?.desc.map((desc, index) => (
        <Text key={index}>{desc}</Text>
      ))}
      <Text>Skills: </Text>
      {DndData?.skills.map((skill) => (
        <Text key={skill.index}>{skill.name}</Text>
      ))}
    </View>
  );
}

async function fetchData() {
  try {
    const response = await fetch(
      "https://www.dnd5eapi.co/api/ability-scores/int"
    );
    const rawData: DndData = await response.json();
    return rawData;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}