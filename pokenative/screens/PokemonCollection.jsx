import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PokemonCollection({ navigation, route }) {
    const { pokemon } = route.params;

    return (
        <FlatList
            data={pokemon}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.pokedex_id}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({});