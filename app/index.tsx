import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { DndData } from "./types";

export default function HomeScreen() {
  const [data, setData] = useState<DndData | null>(null);

  async function fetchData(stat: string) {
    try {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/ability-scores/${stat}`
      );
      const rawData: DndData = await response.json();
      setData(rawData);
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }

  if (!data) {
    return (
      <View style={styles.pageContainer}>
        <Pressable onPress={() => setData(null)}>
          <Text>Home</Text>
        </Pressable>
        <Pressable onPress={() => fetchData("cha")}>
          <Text>Charisma</Text>
        </Pressable>
        <Pressable onPress={() => fetchData("str")}>
          <Text>Strength</Text>
        </Pressable>
        <Pressable onPress={() => fetchData("int")}>
          <Text>Intelligence</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.pageContainer}>
      <Pressable onPress={() => setData(null)}>
        <Text>Home</Text>
      </Pressable>
      {data && (
        <View>
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: 5,
  },
});