import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const task = JSON.parse(localStorage.getItem(key));
      if (task) storedTasks.push(task);
    }
    setTasks(storedTasks);
  }, []);
     

  const addTask = (newTask) => {
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

   const fetchTasks = () => {
     const storedTasks = [];
     for (let i = 0; i < localStorage.length; i++) {
       const key = localStorage.key(i);
       const task = JSON.parse(localStorage.getItem(key));
       if (task) storedTasks.push(task);
     }
     setTasks(storedTasks);
   };

 const toggleDone = (taskId) => {
   setTasks((prevTasks) => {
     const updatedTasks = prevTasks.map((task) =>
       task.id === taskId ? { ...task, done: !task.done } : task
     );
     const updatedTask = updatedTasks.find((task) => task.id === taskId);
     if (updatedTask) {
       localStorage.setItem(taskId, JSON.stringify(updatedTask));
     }

     return updatedTasks;
   });
 };

 const deleteTask = (taskId) => {
   localStorage.removeItem(taskId);
   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
 };
  return (
    <TaskContext.Provider value={{ tasks, addTask, fetchTasks, toggleDone, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
