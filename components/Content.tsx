import React from "react";
import { View, StyleSheet } from "react-native";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

const Content = ({ children }: any) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
        paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
    },
});

export default Content;
