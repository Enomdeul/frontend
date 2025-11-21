export interface Task {
  id: string;
  task_name: string;
  notes?: string;
  completed: boolean;
}

export interface UpdateTaskRequest {
  task_name?: string;
  notes?: string;
  completed?: boolean;
}
