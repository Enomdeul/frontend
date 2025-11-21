import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {tasksQueryKey} from "./querykey";
import {createTask, getTasks} from "./api";
import type {Task} from "@/types/task";

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
