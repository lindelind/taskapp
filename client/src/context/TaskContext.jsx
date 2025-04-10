import { createContext, useContext, useState, useEffect, use } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [notification, setNotification] = useState({ message: "", type: "" });

    const showNotification = (message, type = "success") => {
      setNotification({ message, type });
      setTimeout(() => setNotification({ message: "", type: "" }), 3000);
    };

  useEffect(() => {
    try {
      const storedTasks = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key));
        if (task) storedTasks.push(task);
      }
      setTasks(storedTasks);
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      showNotification("Kunde inte ladda tasks", "error");
    }
  }, []);

  const addTask = (newTask) => {
    try {
      localStorage.setItem(newTask.id, JSON.stringify(newTask));
      setTasks((prevTasks) => [...prevTasks, newTask]);
    showNotification("Task id: " + newTask.id + " tillagd!");
    } catch (error) {
      console.error("Error adding task to localStorage:", error);
      showNotification("Kunde inte lägga till task", "error");
    }
  };

  const fetchTasks = () => {
    try {
      const storedTasks = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key));
        if (task) storedTasks.push(task);
      }
      setTasks(storedTasks);
    } catch (error) {
      console.error("Error fetching tasks from localStorage:", error);
    }
  };

  const toggleDone = (taskId) => {
    try {
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
      showNotification("Task id: " + taskId + " status uppdaterad!");
    } catch (error) {
      console.error("Error toggling task status in localStorage:", error);
      showNotification("Kunde inte uppdatera task status på" + taskId, "error");
    }
  };

  const deleteTask = (taskId) => {
    try {
      localStorage.removeItem(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      showNotification("Task id: " + taskId + " borttagen!");
    } catch (error) {
      console.error("Error deleting task from localStorage:", error);
      showNotification("Kunde inte ta bort task: " + taskId, "error");
    }
  };

  const updateTask = (updatedTask) => {
    try {
      localStorage.setItem(updatedTask.id, JSON.stringify(updatedTask));
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
      showNotification("Task id: " + updatedTask.id + " uppdaterades!");
    } catch (error) {
      console.error("Error updating task in localStorage:", error);
      showNotification("Kunde inte uppdatera task", "error");
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, fetchTasks, toggleDone, deleteTask, updateTask, notification }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
