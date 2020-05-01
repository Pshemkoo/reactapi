import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function Form ({ navigation }) {
    const [season, setSeason] = useState(0);
    const [round, setRound] = useState(0);

    const handleParticipants = () => {
        navigation.navigate('ListaUczestników', {
            season: season,
            round: round,
            navigation: navigation
        });
    };

    const handleResults = () => {
        navigation.navigate('ListaWyników', {
            season: season,
            round: round,
            navigation: navigation
        });
    };

    const handlePitstops = () => {
        navigation.navigate('ListaPitstopów', {
            season: season,
            round: round,
            navigation: navigation
        });
    };

    return(
        <View style={styles.container}>
            <Text>Numer sezonu</Text>
            <TextInput keyboardType='numeric'
                onChangeText={x => setSeason(x)}
                value={season.toString()}
                style={styles.textInput}
            />
            <Text>Numer rundy</Text>
            <TextInput keyboardType='numeric'
                onChangeText={x => setRound(x)}
                value={round.toString()}
                style={styles.textInput}
            />
            <View style={[{ margin: 5}]}>
                <Button title="Wyświetl listę uczestników"
                style={styles.button}
                color="green"
                onPress={handleParticipants}
                />
            </View>
            <View style={[{ margin: 5}]}>
                <Button title="Wyświetl wynik wyścigu"
                style={styles.button}
                color="green"
                onPress={handleResults}
                />
            </View>
            <View style={[{ margin: 5}]}>
                <Button title="Wyświetl listę pitstopów"
                style={styles.button}
                color="green"
                onPress={handlePitstops}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bbb',
      margin: 15
    },
    textInput: {
      borderColor: '#333',
      borderRadius: 3,
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 6,
      marginTop: 4,
      marginBottom: 8,
      width: 300
    },
    button: {
      borderRadius: 3,
      marginTop: 14
    },
    calendar: {
      display: 'flex'
    }
  });