import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsParcitipant ({ route: { params } }) {
    const { details } = params;
    return (
        <View>
            <Text style={styles.text}>Imię: {details.Driver.givenName}</Text>
            <Text style={styles.text}>Nazwisko: {details.Driver.familyName}</Text>
            <Text style={styles.text}>Narodowość: {details.Driver.nationality}</Text>
            <Text style={styles.text}>Data urodzenia: {details.Driver.dateOfBirth}</Text>
            <Text style={styles.text}>Marka samochodu: {details.Constructor.name}</Text>
            <Text style={styles.text}>Link do informacji: {details.Driver.url}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: 15
    }
  });