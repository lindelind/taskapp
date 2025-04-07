import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

 
  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
