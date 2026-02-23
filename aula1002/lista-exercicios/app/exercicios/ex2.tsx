import { View, Text, StyleSheet, Image } from 'react-native';

export default function Exercicio2() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={{
                        uri: 'https://yt3.googleusercontent.com/-_svtX8lvgU1y99-7_U2vfsZN96slULOehNKGumhzlvy18cE_DCq7XS6br_oPb-MQezXPGTC=s900-c-k-c0x00ffffff-no-rj'
                    }}
                    style={styles.roundImage}
                />

                <Text style={styles.nome}>Carlos Silva</Text>
                <Text style={styles.texto}>
                    Desenvolvedor Mobile | React Native
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },

    box: {
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 18,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',

        // Android
        elevation: 5,

        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },

    roundImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 8,
    },

    texto: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
});