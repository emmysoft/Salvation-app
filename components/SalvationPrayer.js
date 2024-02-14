import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SalvationPrayer = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-center items-center gap-5 bg-white h-full px-4`}>
            <Text style={tw`text-center text-base text-[#000]`}>Hebrews 12:22</Text>
            <Text style={tw`text-center text-base text-[#fc5457]`}>Say this Prayer of Salvation if you have not been saved or you want a rededication 👇🏾</Text>
            <Text style={tw`text-center text-xl text-[#fc5457]`}>
                LORD JESUS, I come before you today to confess my sins and ask you for forgiveness of my sins. I believe that you died on the Cross of Calvary, was buried in the tomb, and resurrected on the third day all for me. Thank you for doing that, Here I am to accept you and to surrender my life to you. Give me Grace to fulfill your will and fill me with your HOLY SPIRIT, that I may live according to your will on Earth as it is in Heaven. Thank you Heavenly Father for answered prayers in JESUS NAME I PRAY, AMEN
            </Text>
            <Text style={tw.style({ fontFamily: 'Dance' }, 'text-base text-center text-[#000]')}>
                If you just said that prayer, I CONGRATULATE YOU!!! WELCOME TO GOD'S KINGDOM OF LOVE ON THIS DAY OF LOVE!!!
            </Text>
            <TouchableOpacity style={tw`flex flex-row justify-center items-center gap-5 px-4 py-2 border-2 border-[#fc5457] rounded-lg`} onPress={() => navigation.navigate("Congratulations")}>
                <Text style={tw`text-xl text-center text-[#fc5457]`}>Next!!!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SalvationPrayer;