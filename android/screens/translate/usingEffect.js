import React, { useState, useEffect, useRef } from 'react';

import {
    SafeAreaView,
    Animated,
    Button,
    Easing
} from 'react-native';

import {
    ArrowUpIcon
} from 'react-native-heroicons/solid';

const UsingEffect = () =>{
    // const[value, setValue] = useState(-200);

    const translation = useRef(
        new Animated.Value(0)
    ).current;

    const start = () =>{
        Animated.timing(translation, {
        toValue: 200,
        duration: 1500,
        easing: Easing.back(),
        useNativeDriver: true
        }).start();
    }

    const reset = () =>{
        Animated.timing(translation, {
        toValue: 200,
        duration: 1500,
        easing: Easing.back(),
        useNativeDriver: true
        }).reset();
    }

    const move = () =>{
        setTimeout(() => {
            start();
        }, 500
        )

        setTimeout(() => {
            reset();
        }, 2500
        )
    }


    return(
        <SafeAreaView>
            <Animated.View style={{
                padding: 20,
                marginTop: 200,
                transform: [{  translateY: translation }]
            }} >

                <ArrowUpIcon size={20} color="gray" />

            </Animated.View>

            <Button title='Click' color={"gray"} onPress={move} />

        </SafeAreaView>
    )

}

export default UsingEffect;
