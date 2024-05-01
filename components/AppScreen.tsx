import React from "react";
import { View, StyleSheet } from "react-native";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

const AppScreen = ({ children }: any) => {
    return <View style={[styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppScreen;
