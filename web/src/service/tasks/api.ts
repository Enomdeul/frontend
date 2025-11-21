import {axiosInstance} from "../axiosInstance";
import type {Task} from "@/types/task";

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get<Task[]>("");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = (task: Omit<Task, "id">) => axiosInstance.post<Task>("", task);

export const updateTask = (id: string, task: Task) => axiosInstance.put<Task>(`/tasks/${id}`, task);

export const deleteTask = (id: string) => axiosInstance.delete<Task>(`/tasks/${id}`);
