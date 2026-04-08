import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ToDoCard } from "@/components/ToDoCard";
import { ToDo } from "@/models/ToDo";
import { getToDos } from "@/services/todoService";

export default function Todo() {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const data = await getToDos();
        setToDos(data);
      } catch {
        setError("Não foi possível carregar os ToDos.");
      } finally {
        setLoading(false);
      }
    };

    fetchToDos();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0f766e" />
        <Text style={styles.helperText}>Carregando ToDos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <ToDoCard toDo={item} />}
        ListHeaderComponent={<Text style={styles.header}>Lista de ToDos</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
  },
  helperText: {
    marginTop: 12,
    fontSize: 16,
    color: "#334155",
  },
  errorText: {
    fontSize: 16,
    color: "#b91c1c",
    textAlign: "center",
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
});
