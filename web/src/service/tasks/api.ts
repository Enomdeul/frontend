import {axiosInstance} from "../axiosInstance";
import type {Task, UpdateTaskRequest} from "@/types/task";

const TODO_API_URI = "/todo";

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get<Task[]>(TODO_API_URI);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = (task: Omit<Task, "id">) => axiosInstance.post<Task>(TODO_API_URI, task);

export const updateTask = (id: string, task: UpdateTaskRequest) =>
  axiosInstance.patch<Task>(`${TODO_API_URI}?id=eq.${id}`, task, {
    headers: {
      Prefer: "return=representation",
    },
  });

export const deleteTask = (id: string) => axiosInstance.delete<Task>(`${TODO_API_URI}?id=${Number(id)}`);
