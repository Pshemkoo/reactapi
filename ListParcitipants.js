import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableHighlight, Text, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';


export default function ListParcitipants ({ route: { params } }) {
    const [data, setData] = useState([]);
    const [driver, setDriver] = useState('');

    useEffect(() =>  {
        axios.get(`http://ergast.com/api/f1/${params.season}/${params.round}/results.json`)
            .then(function (response) {
                const result = response.data.MRData.RaceTable.Races.map(r => r.Results);
                setData(result[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    const handleParcitipant = (item) => {
        params.navigation.navigate('SzczegółyUczestnika', {
            details: item
        });
    };

    return (
        <View>
            <TextInput onChangeText={x => setDriver(x)}
                    style={styles.textInput}
                    value={driver}
            />
            <View style={styles.container1}>
                <Text style={styles.result}>Lp.</Text>
                <Text style={styles.result2}>Imie</Text>
                <Text style={styles.result3}>Nazwisko</Text>
            </View>
            <FlatList 
                data={data.filter(({Driver}) => Driver.familyName.includes(driver))}
                keyExtractor={item => item.number}
                renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => handleParcitipant(item)}>
                            <View style={styles.container2}>
                                <Text style={styles.result1}>{item.number}</Text>
                                <Text style={styles.result2}>{item.Driver.givenName}</Text>
                                <Text style={styles.result3}>{item.Driver.familyName}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15
    },
    container2: {
        flexDirection: 'row',
        margin: 10
    },
    result: {
        height: 40,
        width: 100,
        marginLeft: 15
    },
    result1: {
        height: 40,
        width: 100,
        marginLeft: 30
    },
    result2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 100,
        marginLeft: 20
    },
    result3: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 100,
        marginLeft: 25
    },
    textInput: {
        borderColor: '#333',
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 6,
        marginTop: 4,
        marginBottom: 8,
        marginLeft: 20,
        width: 300
      }
  });