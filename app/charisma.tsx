import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { DndData } from "./types";

export default function HomeScreen() {
  const [data, setData] = useState<DndData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.dnd5eapi.co/api/ability-scores/cha"
        );
        const rawData: DndData = await response.json();
        setData(rawData);
      } catch (error) {
        throw new Error("Something went wrong!");
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Link href={"/"}>Home</Link>
      <Text>Index: {data.index}</Text>
      <Text>Name: {data.name}</Text>
      <Text>Full Name: {data.full_name}</Text>
      <Text>Description:</Text>
      {data.desc.map((desc, index) => (
        <Text key={index}>{desc}</Text>
      ))}
      <Text>Skills: </Text>
      {data.skills.map((skill) => (
        <Text key={skill.index}>{skill.name}</Text>
      ))}
    </View>
  );
}
