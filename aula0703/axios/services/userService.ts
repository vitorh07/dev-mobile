import axios from "axios";

import { User } from "@/models/User";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(USERS_URL);
  return response.data;
}
