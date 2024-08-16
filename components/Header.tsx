// app/components/Header.tsx
import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import categories from "../data/categories.json";

import { Ionicons } from "@expo/vector-icons";
import settingsIcon from "../assets/setting.png";

interface HeaderProps {
  onSearch: (text: string) => void;
  onCategoryPress: (categoryId: number) => void;
}

export default function Header({ onSearch, onCategoryPress }: HeaderProps) {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => onCategoryPress(item.id)}
    >
      <View style={styles.iconContainer}>
        <Image source={{ uri: item.icon }} style={styles.icon} />
      </View>
      <Text style={styles.categoryName}>{item.Worker_Role}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => console.log("Hamburger menu pressed")}>
          <Ionicons name="menu" size={30} color="#3b5998" />
        </Pressable>
        <Text style={styles.title}>WorkerApp</Text>
        <Pressable onPress={() => console.log("Bell icon pressed")}>
          <Ionicons name="notifications-outline" size={30} color="#3b5998" />
        </Pressable>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />
      <View style={styles.searchSettingsContainer}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={24}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search workers..."
            style={styles.searchInput}
            onChangeText={onSearch}
          />
          <Ionicons
            name="mic-outline"
            size={24}
            color="#888"
            style={styles.micIcon}
          />
        </View>
        <Pressable onPress={() => console.log("Settings icon pressed")}>
          <View style={styles.iconWrapper}>
            <Image source={settingsIcon} style={styles.customIcon} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  searchSettingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  micIcon: {
    marginLeft: 10,
  },
  iconWrapper: {
    width: 40, // Adjust to your desired size
    height: 40, // Adjust to your desired size
    borderRadius: 10, // Slight border radius
    backgroundColor: "#f0f0f0", // Background color for the container
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  customIcon: {
    width: 24, // Adjust the icon size within the container
    height: 24,
  },
  categoryList: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3b5998",
  },
});
