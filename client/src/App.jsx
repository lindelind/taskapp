import { TaskInputForm } from "./components/TaskInputForm";
import "./style/App.css"
import { TaskList } from "./components/TaskList";
import { Notification } from "./components/Notification";
import { useTaskContext } from "./context/TaskContext";

export const App = () => {
  const { notification, closeNotification } = useTaskContext();
  return (
    <div>
      <h1>Task App</h1>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
      <TaskInputForm />
      <TaskList />
    </div>
  );
}
