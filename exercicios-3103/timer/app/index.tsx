import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated, TextInput } from 'react-native';

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('00:00:00');
  const animatedValue = new Animated.Value(1);

  // Converte hh:mm:ss para segundos
  const parseTime = (value: string): number => {
    const parts = value.split(':').map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return 0;
    const [h, m, s] = parts;
    return h * 3600 + m * 60 + s;
  };

  // Formata segundos para hh:mm:ss
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const [isCountdown, setIsCountdown] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (isCountdown) {
            if (prev <= 1) {
              clearInterval(interval!);
              setIsRunning(false);
              return 0;
            }
            return prev - 1;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval!);
  }, [isRunning, isCountdown]);

  useEffect(() => {
    if (isRunning) {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, { toValue: 1.2, duration: 500, useNativeDriver: true }),
          Animated.timing(animatedValue, { toValue: 1, duration: 500, useNativeDriver: true }),
        ])
      );
      animation.start();
      return () => animation.stop();
    } else {
      animatedValue.setValue(1);
    }
  }, [isRunning]);

  const handleStart = () => {
    const seconds = parseTime(input);
    if (seconds > 0) {
      setIsCountdown(true);
      setTime(seconds);
    } else {
      setIsCountdown(false);
      setTime(0);
    }
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setInput('00:00:00');
    setIsCountdown(false);
  };

  return (
    <View style={styles.container}>
      {!isRunning && time === 0 ? (
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="hh:mm:ss"
          placeholderTextColor="#888"
          keyboardType="numeric"
          maxLength={8}
        />
      ) : (
        <Animated.Text style={[styles.timer, { transform: [{ scale: animatedValue }] }]}>
          {formatTime(time)}
        </Animated.Text>
      )}

      <View style={styles.buttonContainer}>
        {!isRunning && time === 0 ? (
          <Button title="Iniciar" onPress={handleStart} />
        ) : (
          <Button title={isRunning ? 'Pausar' : 'Continuar'} onPress={() => setIsRunning(!isRunning)} />
        )}
        <Button title="Resetar" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  input: {
    fontSize: 40,
    color: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    width: 220,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default TimerApp;
