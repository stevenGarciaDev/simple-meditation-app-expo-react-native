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
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default AffirmationsLayout;
