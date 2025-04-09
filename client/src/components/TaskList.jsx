import {TaskTable} from "./TaskTable";
import { useTaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { tasks, toggleDone, deleteTask } = useTaskContext();
  const todoTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  const totalTasks = tasks.length;
  const completedTasks = doneTasks.length;

  return (
    <div className="task-list">
    
      <div>
        Du har slutfört {""}
        {completedTasks} av {totalTasks} tasks.
      </div>

      <h2>Att göra</h2>
      <TaskTable
        tasks={todoTasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
        isDone={false}
      />

      <h2>Klart</h2>
      <TaskTable
        tasks={doneTasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
        isDone={true}
      />
    </div>
  );
};