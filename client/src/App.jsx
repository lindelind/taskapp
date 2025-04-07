import { TaskInputForm } from "./components/TaskInputForm";
import "./style/App.css"
import { TaskList } from "./components/TaskList";

export const App = () => {
  return (
    <div>
      <h1>Task App</h1>
      <TaskInputForm />
      <TaskList/>
    </div>
  );
}
