import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

export default function PokemonCollection({ navigation, route }) {
    const [pokemonCollection, setPokemonCollection] = useState([]);

    useEffect(() => {
        const loadCollection = async () => {
            try {
                const collection = await AsyncStorage.getItem('pokemonCollection');
                if (collection) {
                    setPokemonCollection(JSON.parse(collection));
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadCollection();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                ListEmptyComponent={<Text style={{fontSize: 24}}>Votre pokédex est vide !</Text>}
                data={pokemonCollection}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>Nom : {item.name}</Text>
                        <Text>Numéro dans le Pokédex : {item.pokedex_id}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#D3D3D311',
},
})
