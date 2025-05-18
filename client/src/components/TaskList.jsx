import {TaskTable} from "./TaskTable";
import { useTaskContext } from "../context/TaskContext";
import { useState } from "react";
import { TaskEditForm } from "./TaskEditForm";
import "../style/TaskList.css";

export const TaskList = () => {
  const { tasks, toggleDone, deleteTask } = useTaskContext();
  const [selectedTask, setSelectedTask] = useState(null);
  const todoTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

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
        updateTask={handleEditTask}
        isDone={false}
      />

      <h2>Klart</h2>
      <TaskTable
        tasks={doneTasks}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
        updateTask={handleEditTask}
        isDone={true}
      />
      {selectedTask && (
        <TaskEditForm task={selectedTask} closeModal={closeModal} />
      )}
    </div>
  );
};