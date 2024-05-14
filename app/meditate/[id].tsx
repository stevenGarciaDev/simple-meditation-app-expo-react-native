import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

import beachImage from "@/assets/beach.png";
import meditatingUnderTree from "@/assets/meditate-under-tree.png";
import riverImage from "@/assets/river.png";
import treeImage from "@/assets/trees.png";
import waterfall from "@/assets/waterfall.png";
import yosemiteStars from "@/assets/yosemite-stars.png";
import CustomButton from "@/components/CustomButton";

const images = [
    treeImage,
    riverImage,
    meditatingUnderTree,
    beachImage,
    yosemiteStars,
    waterfall,
];

const Page = () => {
    const { id } = useLocalSearchParams();

    const [isMeditating, setMeditating] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [sound, setSound] = useState<Audio.Sound>();

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        // Exit early when we reach 0
        if (secondsRemaining === 0) {
            console.log("Meditation complete.");
            return;
        }

        if (isMeditating) {
            // Save the interval ID to clear it when the component unmounts
            timerId = setTimeout(() => {
                setSecondsRemaining(secondsRemaining - 1);
            }, 1000);
        }

        // Clear timeout if the component is unmounted or the time left changes
        return () => {
            clearTimeout(timerId);
            console.log("unload");
            sound?.unloadAsync();
        };
    }, [secondsRemaining, isMeditating]);

    useEffect(() => {
        return () => {
            sound?.unloadAsync();
        };
    }, [sound]);

    async function playSound() {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/audio/ES_Jukebox_Jackpot.mp3")
        );
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
        console.log("playAsync");
    }

    async function toggleMeditationSessionStatus() {
        setMeditating(!isMeditating);

        if (!isMeditating) {
            console.log("playSound");
            await playSound();
        } else {
            await sound?.stopAsync();
        }
    }

    // Format the timeLeft to ensure two digits are displayed
    const formattedTime = String(secondsRemaining).padStart(2, "0");

    return (
        <View className="flex-1">
            <ImageBackground
                source={images[Number(id) - 1]}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Pressable
                        onPress={() => router.back()}
                        className="absolute top-16 left-6 z-10"
                    >
                        <AntDesign name="leftcircleo" size={50} color="white" />
                    </Pressable>

                    <View className="flex-1 justify-center">
                        <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
                            <Text
                                className="text-4xl text-blue-800 font-rmono"
                                // style={{ fontFamily: "Roboto-Mono" }}
                            >
                                00.{formattedTime}
                            </Text>
                        </View>
                    </View>

                    <View className="mb-5">
                        <CustomButton title="Play Audio" onPress={playSound} />
                        <CustomButton
                            title={isMeditating ? "Stop" : "Start"}
                            onPress={toggleMeditationSessionStatus}
                            containerStyles="mt-4"
                        />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default Page;
