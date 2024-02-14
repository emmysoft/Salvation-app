import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Landing = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-4 bg-[#fc5457] h-full p-8`}>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-3xl text-center text-white')}>The True Val is JESUS!!! And Guess what?! HE LOVES YOU 💘 </Text>
            <TouchableOpacity
                style={tw`flex flex-row justify-center items-center border-2 border-[#fff] rounded-lg`}
                onPress={() => navigation.navigate("First Scripture")}
            >
                <Text style={tw`text-xl text-white text-center px-4 py-3`}>
                    See for yourself
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Landing;