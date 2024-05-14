import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import { GalleryPreviewData } from "@/constants/models/Product";
import AppGradient from "@/components/AppGradient";

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationData.find(
                (a) => a.id === Number(itemId)
            );

            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                return;
            }
        }
    }, []);

    return (
        <View className="flex-1">
            <ImageBackground
                source={affirmation?.image}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Text>AffirmationPractice</Text>
                    <Text>{affirmation?.name}</Text>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default AffirmationPractice;
