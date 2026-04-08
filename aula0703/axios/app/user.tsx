import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";


import { UserCard } from "@/components/UserCard";
import { User } from "@/models/User";
import { getUsers } from "@/services/userService";

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers ();
        setUsers(data);
      } catch {
        setError("Nao foi possivel carregar os usuarios.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0f766e" />
        <Text style={styles.helperText}>Carregando usuarios...</Text>
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
        data={users}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <UserCard user={item} />}
        ListHeaderComponent={<Text style={styles.header}>Lista de usuarios</Text>}
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
