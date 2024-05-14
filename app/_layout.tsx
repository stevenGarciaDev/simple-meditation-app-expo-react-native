import { Link, SplashScreen, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// this will prevent the flash screen from auto hiding until loading all the assets is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="meditate/[id]"
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    );
}
