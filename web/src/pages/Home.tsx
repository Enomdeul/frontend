import {HomeHeader} from "../components/layout/HomeHeader";
import {TodoSection} from "../components/home/TodoSection";
import {FloatingActionButton} from "../components/home/FloatingActionButton";
import {useTasks} from "@/service/tasks/queries";
import type {Task} from "@/types/task";

export function Home() {
  // const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleToggle = (id: string, completed: boolean) => {
    // setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo)));
  };

  const {data: tasks} = useTasks();
  const todoItems = tasks?.filter((task) => !task.completed) || ([] as Task[]);
  const completedItems = tasks?.filter((task) => task.completed) || ([] as Task[]);

  return (
    <div className="min-h-screen border bg-[#F6F7F8] flex flex-col overflow-y-auto">
      <HomeHeader />
      <main className="flex flex-col gap-8 px-4 pb-[426px] flex-1">
        <TodoSection title="To-Do" todos={todoItems} onToggle={handleToggle} />
        <TodoSection title="Completed" todos={completedItems} onToggle={handleToggle} />
      </main>
      <FloatingActionButton />
    </div>
  );
}
