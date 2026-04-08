import axios from "axios";

import { Post } from "@/models/Post";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(POSTS_URL);
  return response.data;
}
