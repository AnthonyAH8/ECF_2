import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PokemonHome({ navigation }) {

    // const colorScheme = useColorScheme('')
    const [pokemonList, setPokemonList] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState('')
    const [filterType, setFilterType] = useState(null);

    const filter = (type) => {
        setFilterType(type);
    };

    const filteredPokemon = pokemonList.filter(pokemon => {
        const filteredName = pokemon.name.fr.toLowerCase().includes(pokemonSearch.toLowerCase());
        const filteredType = !filterType || pokemon.types.some(t => t.name === filterType);
        return filteredName && filteredType;
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://tyradex.vercel.app/api/v1/gen/1');
                setPokemonList(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [])

    return (
        <View style={styles.container}>
            {/* <Text>useColorScheme(): {colorScheme}</Text> */}
            <View style={styles.typesList}>
                <TouchableHighlight onPress={() => filter('Feu')}>
                    <Text style={{ backgroundColor: '#EE8130', borderRadius: 5, color: 'white', padding: 5 }}>Feu</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Eau')}>
                    <Text style={{ backgroundColor: '#6390F0', borderRadius: 5, color: 'white', padding: 5 }}>Eau</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Dragon')}>
                    <Text style={{ backgroundColor: '#6F35FC', borderRadius: 5, color: 'white', padding: 5 }}>Dragon</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Plante')}>
                    <Text style={{ backgroundColor: '#7AC74C', borderRadius: 5, color: 'white', padding: 5 }}>Plante</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Normal')}>
                    <Text style={{ backgroundColor: '#A8A77A', borderRadius: 5, color: 'white', padding: 5 }}>Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Acier')}>
                    <Text style={{ backgroundColor: '#B7B7CE', borderRadius: 5, color: 'white', padding: 5 }}>Acier</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Électrik')}>
                    <Text style={{ backgroundColor: '#F7D02C', borderRadius: 5, color: 'white', padding: 5 }}>Electrik</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Spectre')}>
                    <Text style={{ backgroundColor: '#800080', borderRadius: 5, color: 'white', padding: 5 }}>Spectre</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Glace')}>
                    <Text style={{ backgroundColor: '#96D9D6', borderRadius: 5, color: 'white', padding: 5 }}>Glace</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Combat')}>
                    <Text style={{ backgroundColor: '#C22E28', borderRadius: 5, color: 'white', padding: 5 }}>Combat</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Poison')}>
                    <Text style={{ backgroundColor: '#A33EA1', borderRadius: 5, color: 'white', padding: 5 }}>Poison</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Sol')}>
                    <Text style={{ backgroundColor: '#E2BF65', borderRadius: 5, color: 'white', padding: 5 }}>Sol</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Vol')}>
                    <Text style={{ backgroundColor: '#A98FF3', borderRadius: 5, color: 'white', padding: 5 }}>Vol</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Psy')}>
                    <Text style={{ backgroundColor: '#F95587', borderRadius: 5, color: 'white', padding: 5 }}>Psy</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Insecte')}>
                    <Text style={{ backgroundColor: '#A6B91A', borderRadius: 5, color: 'white', padding: 5 }}>Insecte</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Ténèbres')}>
                    <Text style={{ backgroundColor: '#735797', borderRadius: 5, color: 'white', padding: 5 }}>Ténèbres</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Fée')}>
                    <Text style={{ backgroundColor: '#D685AD', borderRadius: 5, color: 'white', padding: 5 }}>Fée</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => filter('Roche')}>
                    <Text style={{ backgroundColor: '#B7B7CE', borderRadius: 5, color: 'white', padding: 5 }}>Roche</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={() => filter(null)}>
                    <Text style={{ backgroundColor: '#D3D3D322', borderRadius: 5, color: 'black', padding: 5, marginVertical: 20 }}>Retour à la liste</Text>
                </TouchableHighlight>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/200px-International_Pok%C3%A9mon_logo.svg.png' }}
                style={{ width: 300, height: 110 }}
            />
            <Text style={styles.title}>Liste des pokemons</Text>
            <TextInput
                style={styles.input}
                placeholder='Entrer un nom de pokémon'
                placeholderTextColor='#3C5AA6'
                value={pokemonSearch}
                onChangeText={(e) => setPokemonSearch(e)}
            />
            <FlatList
                data={filteredPokemon}
                underlayColor="#3C5AA6"
                numColumns={3}
                // keyExtractor={(item) => item.id}
                renderItem={(itemData) => {
                    return (
                        <TouchableHighlight onPress={() => navigation.navigate('PokemonDetails', { pokemon: itemData.item })}>
                            <View style={styles.card}>
                                <Image
                                    source={{ uri: itemData.item.sprites.regular }}
                                    style={styles.image}
                                />
                                <Text style={styles.name}>{itemData.item.name.fr}</Text>
                                <Text style={styles.name}>{itemData.item.pokedex_id}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        backgroundColor: '#D3D3D311',
    },
    card: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#3C5AA6'
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        color: '#3C5AA6',
        textTransform: 'capitalize'
    },
    image: {
        width: 100,
        height: 100,
    },
    name: {
        textAlign: 'center',
        marginVertical: 5,
        color: '#3C5AA6',
        fontWeight: '600'
    },
    input: {
        borderWidth: 1,
        width: '96%',
        borderColor: '#3C5AA6',
        borderRadius: 5,
        marginVertical: 10,
        color: '#3C5AA6'
    },
    typesList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8
    },
})

