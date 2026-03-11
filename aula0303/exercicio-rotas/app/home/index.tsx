import React from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.title}>Dashboard</Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.box}>
                    <View style={styles.boxChild}></View>
                    <View style={styles.boxChild}></View>
                    <View style={styles.boxChild}></View>
                    <View style={styles.boxChild}></View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    header: {
        width: '100%',
        padding: 15,
        backgroundColor: '#ffffff',
        paddingTop: 20,
        zIndex: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    box:{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    boxChild: {
        width: '45%',
        height: 150,
        backgroundColor: '#007AFF',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});