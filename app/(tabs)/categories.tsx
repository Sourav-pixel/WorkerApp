// app/(tabs)/categories.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import WorkerGrid from "../../components/WorkerGrid";
import workersData from "../../data/workers.json";

export interface Worker {
  id: number;
  name: string;
  country: string;
  profileImage: string;
  categoryId: number;
}

export default function Categories() {
  const [filteredWorkers, setFilteredWorkers] = useState<Worker[]>(workersData);

  const handleSearch = (text: string) => {
    const filtered = workersData.filter((worker: Worker) =>
      worker.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredWorkers(filtered);
  };

  const handleCategoryPress = (categoryId: number) => {
    const filtered = workersData.filter(
      (worker: Worker) => worker.categoryId === categoryId
    );
    setFilteredWorkers(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} onCategoryPress={handleCategoryPress} />
      <WorkerGrid workers={filteredWorkers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
