import { TaskInputForm } from "./components/TaskInputForm";
import "./style/App.css";
import { TaskList } from "./components/TaskList";
import { Notification } from "./components/Notification";
import { useTaskContext } from "./context/TaskContext";
import PageWrapper from "./components/PageWrapper";
import Dashboard from "./components/Dashboard";

export const App = () => {
  const { notification, closeNotification } = useTaskContext();


  return (
    // <div>
    <>
      <PageWrapper>
        <Dashboard />
      </PageWrapper>
      <PageWrapper>
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />

        {/* <TaskInputForm /> */}
        <TaskList />
      </PageWrapper>
    </>
    // </div>
  );
};
