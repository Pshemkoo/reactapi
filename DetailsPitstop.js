import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsPitstop ({ route: { params } }) {
    const { details } = params;
    return (
        <View>
            <Text style={styles.text}>Nazwisko: {details.driverId}</Text>
            <Text style={styles.text}>Okrążenie: {details.lap}</Text>
            <Text style={styles.text}>Godzina: {details.time}</Text>
            <Text style={styles.text}>Czas trwania: {details.duration}</Text>
            <Text style={styles.text}>Który pitstop z kolei: {details.stop}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: 15
    }
  });