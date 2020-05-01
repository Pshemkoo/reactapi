import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsResult ({ route: { params } }) {
    const { details } = params;
    return (
        <View>
            <Text style={styles.text}>Imię: {details.Driver.givenName}</Text>
            <Text style={styles.text}>Nazwisko: {details.Driver.familyName}</Text>
            <Text style={styles.text}>Pozycja: {details.position}</Text>
            <Text style={styles.text}>Całkowity czas wyścigu: {details.Time.time} </Text>
            <Text style={styles.text}>------ Najszybsze okrążenie ------</Text>
            <Text style={styles.text}>Średnia prędkość: {details.FastestLap.AverageSpeed.speed}kph</Text>
            <Text style={styles.text}>Czas: {details.FastestLap.Time.time}</Text>
            <Text style={styles.text}>Okrążenie: {details.FastestLap.lap}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: 15
    }
  });