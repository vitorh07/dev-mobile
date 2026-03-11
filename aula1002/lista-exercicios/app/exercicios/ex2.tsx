import { View, Text, StyleSheet, Image } from 'react-native';

export default function Exercicio2() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/300?img=8' }}
                    style={styles.avatar}
                />
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
        width: '80%',            
        maxWidth: 400,          
        backgroundColor: '#ffffff',
        borderRadius: 18,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
        paddingVertical: 20,
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
    avatar: {
        width: '30%',            
        aspectRatio: 1,          
        borderRadius: 999,       
        marginBottom: 15,
    },
});