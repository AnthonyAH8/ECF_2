import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';


export default function PokemonDetails({ navigation, route }) {

    const { pokemon } = route.params;
    const [pokemonAdd, setPokemonAdd] = useState(null);
    
    const addPokemon = async () => {
        try {
            await AsyncStorage.setItem('pokemonAdd', JSON.stringify(pokemon));
            setPokemonAdd(pokemon);
            console.log('Pokémon ajouté');
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        const handlePokemonAdd = async () => {
            try {
                const pokemonStatus = await AsyncStorage.getItem('pokemonAdd');
                if (pokemonStatus !== null) {
                    setPokemonAdd(JSON.parse(pokemonStatus));
                }
            } catch (error) {
                console.log(error);
            }
        };
        handlePokemonAdd();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({ title: pokemon.name.fr });
    }, [pokemon]);
    

    return (
        <View style={styles.container}>
            <Image source={{ uri: pokemon.sprites.regular }}
                style={styles.image} />
            <View style={styles.action}>
                <TouchableHighlight onPress={addPokemon}>
                    <View style={styles.add}>
                        <Text style={{ color: 'white' }}>Ajouter {pokemon.name.fr} au Pokédex</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('PokemonCollection')}>
                    <View style={styles.add}>
                        <Text style={{ color: 'white' }}>Pokédex</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={styles.title}>{pokemon.name.fr} n°{pokemon.pokedex_id}</Text>
            <View style={styles.main}>
                <View style={styles.infos}>
                    <Text style={styles.subtitle}>Informations:</Text>
                    <Text><Text style={styles.detail}>Nom: </Text> {pokemon.name.fr}</Text>
                    <Text><Text style={styles.detail}>ID Pokédex: </Text> {pokemon.pokedex_id}</Text>
                    <Text><Text style={styles.detail}>Taille: </Text> {pokemon.height}</Text>
                    <Text><Text style={styles.detail}>Poids: </Text> {pokemon.weight}</Text>
                    <Text><Text style={styles.detail}>Catégorie: </Text>{pokemon.category}</Text>
                    <View style={styles.types}><Text style={styles.detail}>Type(s): </Text>{pokemon.types.map(p => (<Text> {p.name} <Image source={{ uri: p.image }}
                            style={{ width: 20, height: 20 }} /></Text>))}
                    </View>
                    <Text><Text style={styles.detail}>Talents(s): </Text>{pokemon.talents.map(p => (<Text> {p.name}</Text>))}</Text>
                </View>
                <View style={styles.infos}>
                    <Text style={styles.subtitle}>Statistiques: </Text>
                    <Text><Text style={styles.detail}>PV: </Text> {pokemon.stats.hp}</Text>
                    <Progress.Bar 
                    progress={pokemon.stats.hp / 255} 
                    width={150}
                    borderColor='#3C5AA68A'
                    color='#FFCC00BB'
                    />
                    <Text><Text style={styles.detail}>Attaque: </Text> {pokemon.stats.atk}</Text>
                    <Progress.Bar 
                    progress={pokemon.stats.atk / 255} 
                    width={150}
                    borderColor='#3C5AA68A'
                    color='#FFCC00BB'/>
                    <Text><Text style={styles.detail}>Défense: </Text> {pokemon.stats.def}</Text>
                    <Progress.Bar 
                    progress={pokemon.stats.def / 255}
                    width={150}
                    borderColor='#3C5AA68A'
                    color='#FFCC00BB'/>
                    <Text><Text style={styles.detail}>Attaque spéciale: </Text> {pokemon.stats.spe_atk}</Text>
                    <Progress.Bar 
                    progress={pokemon.stats.spe_atk / 255} 
                    width={150}
                    borderColor='#3C5AA68A'
                    color='#FFCC00BB'/>
                    <Text><Text style={styles.detail}>Défense spéciale: </Text> {pokemon.stats.spe_def}</Text>
                    <Progress.Bar 
                    progress={pokemon.stats.spe_def / 255} 
                    width={150}
                    borderColor='#3C5AA68A'
                    color='#FFCC00BB'/>
                    <Text><Text style={styles.detail}>Vitesse: </Text> {pokemon.stats.vit}</Text>
                    <Progress.Bar 
                    progress={pokemon.stats.vit / 255} 
                    width={150}
                    borderColor='#3C5AA68A'
                    color='#FFCC00BB'/>
                    <Text><Text style={styles.detail}>Niveau 100: </Text> {pokemon.level_100} HP</Text>
                </View>
            </View>
            <View>
                { pokemon.evolution?.next && pokemon.evolution?.next.map(p => (
                    <View style={styles.evolution}>
                        <Text><Text style={styles.detail}>Evolution: </Text>{p.name} ({p.condition})</Text>
                    </View>
                ))}
            </View>
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
        backgroundColor: '#D3D3D311',
        flexDirection: 'column'
    },
    image: {
        width: 400,
        height: 400,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FFCC00BB',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        alignItems: 'center',
        color: '#3C5AA68A',
        textTransform: 'uppercase'
    },
    main: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        width: '100%',

    },
    infos: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 3,
        width: '50%',

    },
    subtitle: {
        color: '#3C5AA6',
        fontWeight: '600',
        margin: 20
    },
    detail: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 2,
        color: '#3C5AA6',
    },
    evolution: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    add: {
        marginTop: 5,
        backgroundColor: '#3C5AA6',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    types: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'left',
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    }
})