import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Navegue pelos exercícios</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex1")}>
        <Text style={styles.textoBotao}>Exercício 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex2")}>
        <Text style={styles.textoBotao}>Exercício 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex3")}>
        <Text style={styles.textoBotao}>Exercício 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex4")}>
        <Text style={styles.textoBotao}>Exercício 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex5")}>
        <Text style={styles.textoBotao}>Exercício 5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex6")}>
        <Text style={styles.textoBotao}>Exercício 6</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex7")}>
        <Text style={styles.textoBotao}>Exercício 7</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex8")}>
        <Text style={styles.textoBotao}>Exercício 8</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex9")}>
        <Text style={styles.textoBotao}>Exercício 9</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/exercicios/ex10")}>
        <Text style={styles.textoBotao}>Exercício 10</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "35%",
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
