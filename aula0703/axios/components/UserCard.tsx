import { StyleSheet, Text, View } from "react-native";

import { User } from "@/models/User";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>👤 Usuário #{user.id}</Text>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.body}>@{user.username}</Text>
      <Text style={styles.meta}>📧 {user.email}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📞 Contato</Text>
        <Text style={styles.meta}>  {user.phone}</Text>
        <Text style={styles.meta}>  🌐 {user.website}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📍 Endereço</Text>
        <Text style={styles.meta}>  Rua: {user.address.street}</Text>
        <Text style={styles.meta}>  Apto: {user.address.suite}</Text>
        <Text style={styles.meta}>  Cidade: {user.address.city}</Text>
        <Text style={styles.meta}>  CEP: {user.address.zipcode}</Text>
        <Text style={styles.meta}>  🗺️ Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏭 Empresa</Text>
        <Text style={styles.meta}>  Nome: {user.company.name}</Text>
        <Text style={styles.meta}>  Frase: "{user.company.catchPhrase}"</Text>
        <Text style={styles.meta}>  Slogan: {user.company.bs}</Text>
      </View>
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
    marginBottom: 4,
  },
  section: {
    marginTop: 12,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: "#e2e8f0",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f766e",
    marginBottom: 8,
  },
});
