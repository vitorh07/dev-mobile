import { View, Text, StyleSheet } from 'react-native';

export default function Exercicio1() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu primeiro App Expo</Text>
            <Text style={styles.subtitle}>Construindo interfaces no React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#88ceeb',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
    },
});