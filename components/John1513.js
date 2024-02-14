import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const John1513 = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-8 bg-white h-full px-4 py-8`}>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-center text-[#fc5457]')}>John 15:13</Text>
            <Text style={tw`text-xl text-[#fc5457] text-center`}>
                Greater love hath no man than this, that a man lay down his life for his friends.
            </Text>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-[#fc5457] text-center')}>
                PS: "The greatest proof of love for anyone or anything is death. JESUS died for you and I 🥹"
            </Text>
            <TouchableOpacity style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2 border-2 border-[#fc5457] rounded-lg`} onPress={() => navigation.navigate("Third Scripture")}>
                <Text style={tw`text-xl text-center text-[#fc5457]`}>Next</Text>
                <Ionicons name="chevron-forward" size={24} color={"#fc5457"} />
            </TouchableOpacity>
        </View>
    )
}

export default John1513;