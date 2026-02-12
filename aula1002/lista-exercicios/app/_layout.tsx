import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Lista de Exercícios" }} />;
      <Stack.Screen name="exercicios/ex1" options={{ title: "Exercício 1" }} />;
      <Stack.Screen name="exercicios/ex2" options={{ title: "Exercício 2" }} />;
      <Stack.Screen name="exercicios/ex3" options={{ title: "Exercício 3" }} />;
      <Stack.Screen name="exercicios/ex4" options={{ title: "Exercício 4" }} />;
      <Stack.Screen name="exercicios/ex5" options={{ title: "Exercício 5" }} />;
      <Stack.Screen name="exercicios/ex6" options={{ title: "Exercício 6" }} />;
      <Stack.Screen name="exercicios/ex7" options={{ title: "Exercício 7" }} />;
      <Stack.Screen name="exercicios/ex8" options={{ title: "Exercício 8" }} />;
      <Stack.Screen name="exercicios/ex9" options={{ title: "Exercício 9" }} />;
      <Stack.Screen name="exercicios/ex10" options={{ title: "Exercício 10" }} />;
    </Stack>
  );
}
