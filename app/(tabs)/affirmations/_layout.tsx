import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AffirmationsLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[itemId]"
                options={{
                    headerShown: true,
                    headerBackTitle: "Back",
                    headerTitle: "Affirmations",
                }}
            />
        </Stack>
    );
};

export default AffirmationsLayout;
