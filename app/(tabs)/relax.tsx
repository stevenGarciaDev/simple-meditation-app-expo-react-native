import AppScreen from "@/components/AppScreen";
import Content from "@/components/Content";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Page = () => {
    return (
        <AppScreen>
            <LinearGradient
                // Background Linear Gradient
                colors={["#2e1f58", "#54426b", "#a790af"]}
                style={styles.background}
            >
                <Content>
                    <Text>Relax</Text>
                </Content>
            </LinearGradient>
        </AppScreen>
    );
};

const styles = StyleSheet.create({
    container: {},
    background: {
        flex: 1,
    },
});

export default Page;
