import Content from "@/components/Content";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Page = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={["#1b2f32", "#0a4d4a", "#766e67"]}
                style={styles.background}
            >
                <Content>
                    <Text>Profile</Text>
                </Content>
            </LinearGradient>
            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
});

export default Page;
