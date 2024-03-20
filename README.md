# ECF2

L'objectif de l'ECF est de créer une application Front-End en utilisant une API REST ( Pokémon ), afin de récupérer les données de l'API avec des requêtes **AXIOS**.

L'application mobile se divisait en 3 écrans (screens):

- Le premier écran correspond à l'affichage de la liste des pokémon avec leur image, leur numéro de pokédex ainsi que leurs noms. L'utilisateur peut alors cliquer sur un second écran qui permet d'accéder à la description du pokémon et pourra rechercher un pokémon par son nom ou une liste de pokémon selon le type.

- Le deuxième écran correspond à l'affichage du pokémon. Dans ce second écran sera affichée la description du pokémon avec les différents types du pokémon, sa description, ses caractéristiques de bases (PV, attaque, défense, attaque et défense spéciales, vitesse), ses évolutions s'il y en a, ainsi que la possibilité pour l'utilisateur de mettre un pokémon dans son pokédex qui sera en troisième écran aveec le bouton ***"ajouter au pokédex"***.

- Le troisième écran sera consacré au pokédex de l'utilisateur. Seront stockés les pokémons qu'il aura mis dans sa liste. Il pourra enlever un pokémon de son pokédex avec un bouton ***"Supprimer de sa liste"***.

## API Rest

L'API utilisée pour ce projet est : [API Pokémon](https://tyradex.vercel.app/) avec sa documentation : [Doc API](https://tyradex.vercel.app/docs).

## Technologies

- React Native
- React Navigation
- Redux
- GitHub
- FIGMA 

## Initiation projet

Tout d'abord, il faut initialiser un nouveau projet:
- **npx react-native@latest init**

Ensuite, il faut installer les différentes dépendances nécessaires pour le projet:

```java
npm install @react-navigation/native
npm install react-native-screensreact-native-safe-area-context
npm i @react-navigation/native-stack
npm install axios
```

Avant de lancer l'application, il faut définir les différents élèments afin de pouvoir naviguer sur les différents écrans de l'application mobile. Cela se passe dans le fichier **App.jsx**.  
Une constante devra être crée afin de mettre en place la navigation: 

```js
   const Stack = createNativeStackNavigator()
```

```javascript
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen/>
            <Stack.Screen/>
            <Stack.Screen/>
        </Stack.Navigator>
    </NavigationContainer>
```

Dans ce projet est utilisé le navigation **Stack**, le Stack Navigator permet à une application de passer d'un écran à l'autre, chaque nouvel écran étant placé au sommet d'une pile. 
En **Stack**, la navigation se fait en haut de l'écran, au contraire du **Bottom Tab** où la navigation se fait en bas.


## Lancement du projet

```javascript
npx react-native run-android 
```                                                              
