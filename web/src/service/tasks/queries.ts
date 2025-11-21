import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {tasksQueryKey} from "./querykey";
import {createTask, getTasks, updateTask} from "./api";
import type {Task, UpdateTaskRequest} from "@/types/task";

export const useTasks = () => {
  return useQuery({
    queryKey: tasksQueryKey.list(),
    queryFn: () => getTasks(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task: Omit<Task, "id">) => createTask(task),
    onSuccess: (_, variables) => {
      queryClient.setQueryData(tasksQueryKey.list(), (old: Task[] | undefined) => [...(old || []), variables]);
    },
    onError: (error) => {
      console.error("Error creating task:", error);
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({id, task}: {id: string; task: UpdateTaskRequest}) => updateTask(id, task),
    onSuccess: (_, variables) => {
      queryClient.setQueryData(tasksQueryKey.list(), (old: Task[] | undefined) => old?.map((task) => (task.id === variables.id ? {...task, ...variables.task} : task)));
    },
    onError: (error) => {
      console.error("Error updating task:", error);
    },
  });
};
