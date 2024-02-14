import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const FirstJohn31 = () => {
    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-8 bg-white h-full px-4 py-8`}>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-center text-[#fc5457]')}>1st John 3:1</Text>
            <Text style={tw`text-xl text-[#fc5457] text-center`}>
                Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.
            </Text>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-[#fc5457] text-center')}>
                PS: "He Loves you and I so much He made us Brothers of His and Sons of His Father 🤭"
            </Text>
            <TouchableOpacity style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2 border-2 border-[#fc5457] rounded-lg`} onPress={() => navigation.navigate("Salvation Prayer")}>
                <Text style={tw`text-xl text-center text-[#fc5457]`}>Next</Text>
                <Ionicons name="chevron-forward" size={24} color={"#fc5457"} />
            </TouchableOpacity>
        </View>
    )
}

export default FirstJohn31