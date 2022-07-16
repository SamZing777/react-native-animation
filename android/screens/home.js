import React, { 
    useState,
    useLayoutEffect,
    useRef
    } from "react";

import { useNavigation } from '@react-navigation/native';

import {
    HeartIcon
} from 'react-native-heroicons/solid';

import {
    UserIcon,
    QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';

import styles from "../styles/styles";

import {
    ScrollView,
    StatusBar,
    View,
    TouchableOpacity,
    Text,
    Animated,
    Easing
  } from 'react-native';

const Home = () =>{
    const[point, setPoint] = useState(0);

    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        });
    })

    const translation = useRef(
        new Animated.Value(0)
    ).current;

    const start = () =>{
        Animated.timing(translation, {
        toValue: -550,
        duration: 800,
        easing: Easing.back(),
        useNativeDriver: true
        }).start();
    }

    const reset = () =>{
        Animated.timing(translation, {
        toValue: -550,
        duration: 500,
        easing: Easing.back(),
        useNativeDriver: true
        }).reset();
    }

    const updatePoint = () =>{
        
        setTimeout(() => {
            start();
        }, 50
        )

        setTimeout(() => {
            setPoint(point + 100);
        }, 800
        )

        setTimeout(() => {
            reset();
        }, 800
        )

    }

    return(
        <ScrollView scrollEnabled={false}>
            <StatusBar backgroundColor={"white"} />
            <View style={styles.header}>
                <UserIcon size={35} color="gray"/>
                <View style={styles.column}>
                    <Text style={ styles.titleText }> {point} </Text>
                    <Text style={ styles.text }>points</Text>
                </View>
                <QuestionMarkCircleIcon size={35} color="gray" />
            </View>

            <View  style={styles.center}>
                <Animated.View style={[styles.coin, {
                    transform: [{  translateY: translation }]
                }]}>
                    <Text style={styles.coinText}>100</Text>
                </Animated.View>

                <TouchableOpacity onPress={updatePoint}
                    style={styles.touch}
                >
                    <HeartIcon size={100} color="#35a192" style={{ alignSelf: "center"}} />
                </TouchableOpacity>
            </View>           

        </ScrollView>
    )
}

export default Home;
