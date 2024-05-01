import Content from "@/components/Content";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
import treeImage from "@/assets/trees.png";
import meditatingUnderTree from "@/assets/meditate-under-tree.png";
import riverImage from "@/assets/river.png";
import beachImage from "@/assets/beach.png";
import yosemiteStars from "@/assets/yosemite-stars.png";
import waterfall from "@/assets/waterfall.png";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";

const images = [
    treeImage,
    riverImage,
    meditatingUnderTree,
    beachImage,
    yosemiteStars,
    waterfall,
];

const Page = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={["#161b2e", "#0a4d4a", "#766e67"]}
                style={styles.background}
            >
                <Content>
                    <View className="mb-6">
                        <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
                            Welcome Steven
                        </Text>
                        <Text className="text-indigo-100 text-xl font-medium">
                            Start your meditation practice today
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={MEDITATION_DATA}
                            contentContainerStyle={styles.list}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View className="h-48 my-3 rounded-md overflow-hidden">
                                    <ImageBackground
                                        source={images[item.id - 1]}
                                        resizeMode="cover"
                                        style={styles.backgroundImage}
                                    >
                                        <LinearGradient
                                            // Gradient from transparent to black
                                            colors={[
                                                "transparent",
                                                "rgba(0,0,0,0.8)",
                                            ]}
                                            style={styles.gradient}
                                        >
                                            <Text className="text-gray-100 text-3xl font-bold text-center">
                                                {item.title}
                                            </Text>
                                        </LinearGradient>
                                    </ImageBackground>
                                </View>
                            )}
                        />

                        {/* <View className="h-48 my-3 rounded-md overflow-hidden">
                            <ImageBackground
                                source={treeImage}
                                resizeMode="cover"
                                style={styles.backgroundImage}
                            >
                                <LinearGradient
                                    // Gradient from transparent to black
                                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                                    style={styles.gradient}
                                >
                                    <Text className="text-gray-100 text-3xl font-bold text-center">
                                        Guided Meditation
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                        <View className="h-48 my-3 rounded-md overflow-hidden">
                            <ImageBackground
                                source={riverImage}
                                resizeMode="cover"
                                style={styles.backgroundImage}
                            >
                                <LinearGradient
                                    // Gradient from transparent to black
                                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                                    style={styles.gradient}
                                >
                                    <Text className="text-gray-100 text-3xl font-bold text-center">
                                        Mindfulness
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                        <View className="h-48 my-3 rounded-md overflow-hidden">
                            <ImageBackground
                                source={meditatingUnderTree}
                                resizeMode="cover"
                                style={styles.backgroundImage}
                            >
                                <LinearGradient
                                    // Gradient from transparent to black
                                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                                    style={styles.gradient}
                                >
                                    <Text className="text-gray-100 text-3xl font-bold text-center">
                                        Mantra Meditation
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </View> */}
                    </View>
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
    backgroundImage: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    gradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        paddingBottom: 150,
    },
});

export default Page;
