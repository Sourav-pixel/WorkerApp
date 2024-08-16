// app/components/WorkerGrid.tsx
import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";
import { Worker } from "../app/(tabs)/categories";

interface WorkerGridProps {
  workers: Worker[];
}

export default function WorkerGrid({ workers }: WorkerGridProps) {
  const renderWorker = ({ item }: { item: Worker }) => (
    <View style={styles.workerCard}>
      <Image source={{ uri: item.profileImage }} style={styles.workerImage} />
      <Text>{item.name}</Text>
      <CountryFlag isoCode={item.country} size={20} />
    </View>
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderWorker}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      contentContainerStyle={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 20,
  },
  workerCard: {
    alignItems: "center",
    margin: 12,
  },
  workerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
});
