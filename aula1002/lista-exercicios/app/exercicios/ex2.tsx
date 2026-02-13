
import { View, Text, StyleSheet } from 'react-native';

export default function Exercicio2() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.nome}>Carlos Silva</Text>
                <Text style={styles.texto}>Desenvolvedor Mobile | React Native</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    box: {
        width: '25%',
        height: '40%',
        backgroundColor: '#ffffff',
        borderRadius: 18,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 20,
    },
    texto: {
        fontSize: 16,
        color: '#0e0e0e',
        textAlign: 'center',
        marginTop: 10,
    },  
});