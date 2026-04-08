import { StyleSheet, Text, View } from "react-native";

import { ToDo } from "@/models/ToDo";

type ToDoCardProps = {
  toDo: ToDo;
};

export function ToDoCard({ toDo }: ToDoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>✅ ToDo #{toDo.id}</Text>
      <Text style={styles.title}>{toDo.title}</Text>
      <Text style={styles.body}>📋 {toDo.completed ? "Concluído" : "Pendente"}</Text>
      <Text style={styles.meta}>👤 Usuario {toDo.userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  id: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0f766e",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 12,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: "#334155",
    marginBottom: 12,
  },
  meta: {
    fontSize: 12,
    color: "#64748b",
  },
});
