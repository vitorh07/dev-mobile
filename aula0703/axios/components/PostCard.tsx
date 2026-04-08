import { StyleSheet, Text, View } from "react-native";

import { Post } from "@/models/Post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>📝 Post #{post.id}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.meta}>👤 Usuario {post.userId}</Text>
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
