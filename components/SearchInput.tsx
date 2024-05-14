import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const SearchInput = () => {
    const [query, setQuery] = useState("");

    return (
        <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
            <TextInput
                className="text-base mt-0.5 text-white flex-1"
                value={query}
                placeholder="Search a video topic"
                placeholderTextColor="#CDCDE0"
                onChangeText={(e: any) => setQuery(e)}
            />
        </View>
    );
};

export default SearchInput;
