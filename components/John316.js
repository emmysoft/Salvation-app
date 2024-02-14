import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const John316 = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-8 bg-white h-full px-4 py-8`}>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-center text-[#fc5457]')}>John 3:16</Text>
            <Text style={tw`text-xl text-[#fc5457] text-center`}>
                For God so loved the world, that he gave his only begotten Son,
                that whosoever believeth in him should not perish,
                but have everlasting life.
            </Text>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-[#fc5457] text-center')}>
                PS: "In order to make you know HE Loves you, GOD gave his most precious possession🤲."
            </Text>
            <TouchableOpacity style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2 border-2 border-[#fc5457] rounded-lg`} onPress={() => navigation.navigate("Second Scripture")}>
                <Text style={tw`text-xl text-center text-[#fc5457]`}>Next</Text>
                <Ionicons name="chevron-forward" size={24} color={"#fc5457"} />
            </TouchableOpacity>
        </View>
    )
}

export default John316