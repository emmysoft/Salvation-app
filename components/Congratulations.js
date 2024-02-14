import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Congratulations = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-12 bg-white p-8 h-full`}>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-4xl text-[#fc5457]')}>Congratulations!!!</Text>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-xl text-[#fc5457]')}>
                Now that you are saved, what next?
            </Text>
            <View style={tw`flex justify-start items-start gap-5`}>
                <Text>1. Get a bible </Text>
                <Text>2. Read it everyday, and everytime</Text>
                <Text>3. Pray at least 5 minutes to GOD everyday</Text>
                <Text>4. Pray in tongues (the language of GOD) </Text>
                <Text>5. Listen to gospel songs and Messages</Text>
                <Text>6. Join a Church, its workforce and attend their programs</Text>
            </View>
            <TouchableOpacity
                style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2 border-2 border-[#fc5457] rounded-lg`}
                onPress={() => navigation.navigate("Landing Salvation")}
            >
                <Text style={tw`text-xl text-center text-[#fc5457]`}>Home</Text>
                <Ionicons name="chevron-forward" size={24} color={"#fc5457"} />
            </TouchableOpacity>
        </View>
    )
}

export default Congratulations;