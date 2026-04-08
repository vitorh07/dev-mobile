import axios from "axios";

import { ToDo } from "@/models/ToDo";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getToDos(): Promise<ToDo[]> {
  const response = await axios.get<ToDo[]>(TODOS_URL);
  return response.data;
}
