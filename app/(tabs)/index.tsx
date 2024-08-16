// app/(tabs)/index.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Categories from "./categories";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Chat":
              iconName = focused ? "chatbubble" : "chatbubble-outline";
              break;
            case "Call":
              iconName = focused ? "call" : "call-outline";
              break;
            case "Scan":
              iconName = focused ? "qr-code" : "qr-code-outline";
              break;
            case "Wishlist":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "VIP":
              iconName = focused ? "star" : "star-outline";
              break;
            default:
              iconName = "ellipse";
              break;
          }

          return (
            <View style={styles.tabIcon}>
              <Icon name={iconName} size={size} color={color} />
              <Text
                style={[styles.tabText, { color: focused ? "#FF5733" : color }]}
              >
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF5733",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Chat" component={Categories} />
      <Tab.Screen name="Call" component={Categories} />
      <Tab.Screen name="Scan" component={Categories} />
      <Tab.Screen name="Wishlist" component={Categories} />
      <Tab.Screen name="VIP" component={Categories} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
  },
});
