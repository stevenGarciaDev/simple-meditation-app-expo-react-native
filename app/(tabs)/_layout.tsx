import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "(tabs)",
};

const Page = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
            }}
        >
            <Tabs.Screen
                name="meditate"
                options={{
                    tabBarLabel: "Meditate",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="yoga"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="relax"
                options={{
                    tabBarLabel: "Relax",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="flower-tulip"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Page;
