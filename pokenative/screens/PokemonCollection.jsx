import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function PokemonCollection({ navigation, route }) {
    const addPokemon = route.params?.addPokemonKey
    const [pokemonCollection, setPokemonCollection] = useState([]);

    useEffect(() => {
        if (addPokemon) {
            addPokemon();
        }
    }, [addPokemon]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('pokemon');
            setPokemonCollection(JSON.parse(value));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <FlatList
                data={pokemonCollection}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.pokedex_id}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
