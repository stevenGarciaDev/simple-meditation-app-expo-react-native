import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import CustomButton from "@/components/CustomButton";

import beachImage from "@/assets/beach.png";
import meditatingUnderTree from "@/assets/meditate-under-tree.png";
import riverImage from "@/assets/river.png";
import treeImage from "@/assets/trees.png";
import waterfall from "@/assets/waterfall.png";
import yosemiteStars from "@/assets/yosemite-stars.png";
import { TimerContext } from "@/context/TimerContext";

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

    const { duration: secondsRemaining, setDuration } =
        useContext(TimerContext);

    const [isMeditating, setMeditating] = useState(false);
    // const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [audioSound, setSound] = useState<Audio.Sound>();
    const [isPlayingAudio, setPlayingAudio] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        // Exit early when we reach 0
        if (secondsRemaining === 0) {
            console.log("Meditation complete.");

            if (isPlayingAudio) audioSound?.unloadAsync();
            return;
        }

        if (isMeditating) {
            // Save the interval ID to clear it when the component unmounts
            timerId = setTimeout(() => {
                setDuration(secondsRemaining - 1);
            }, 1000);
        }

        // Clear timeout if the component is unmounted or the time left changes
        return () => {
            clearTimeout(timerId);
        };
    }, [secondsRemaining, isMeditating]);

    useEffect(() => {
        return () => {
            audioSound?.unloadAsync();
        };
    }, [audioSound]);

    const initializeSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/audio/ES_Jukebox_Jackpot.mp3")
        );
        setSound(sound);
        return sound;
    };

    const togglePlayPause = async () => {
        const sound = audioSound ? audioSound : await initializeSound();

        const status = await sound?.getStatusAsync();
        if (status?.isLoaded && !isPlayingAudio) {
            await sound?.playAsync();
            setPlayingAudio(true);
        } else {
            await sound?.pauseAsync();
            setPlayingAudio(false);
        }
    };

    async function toggleMeditationSessionStatus() {
        setMeditating(!isMeditating);

        if (!isMeditating) {
            await togglePlayPause();
        } else {
            await audioSound?.stopAsync();
        }
    }

    // Format the timeLeft to ensure two digits are displayed
    const formattedTimeMinutes = String(
        Math.floor(secondsRemaining / 60)
    ).padStart(2, "0");
    const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

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
                                {formattedTimeMinutes}.{formattedTimeSeconds}
                            </Text>
                        </View>
                    </View>

                    <View className="mb-5">
                        {/* <CustomButton
                            title={
                                isPlayingAudio ? `Pause Audio` : `Play Audio`
                            }
                            onPress={togglePlayPause}
                        /> */}
                        <CustomButton
                            title="Adjust duration"
                            onPress={() =>
                                router.push(
                                    "/(modal)/adjust-meditation-duration"
                                )
                            }
                        />
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
