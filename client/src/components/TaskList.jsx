import "../style/TaskList.css";
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import { GiCircle } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

export const TaskList = () => {
  const { tasks, toggleDone, deleteTask } = useTaskContext();
  const todoTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  return (
    <div className="task-list">
      <h2>Att göra</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Beskrivning</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <hr className="row-separator" />
            </td>
          </tr>
          {todoTasks.map((task) => (
            <React.Fragment key={task.id}>
              <tr className="task-item">
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  {new Date(task.dueDate).toLocaleDateString()}{" "}
                  {new Date(task.dueDate).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td>
                  <div
                    className="status-toggle-btn"
                    onClick={() => toggleDone(task.id)}
                  >
                    <GiCircle color="red" />
                  </div>
                </td>
                <td>
                  <div
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    <AiFillDelete />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="5">
                  <hr className="row-separator" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <h2>Klart</h2>
      <table className="task-table done-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Beskrivning</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <hr className="row-separator" />
            </td>
          </tr>
          {doneTasks.map((task) => (
            <React.Fragment key={task.id}>
              <tr className="task-item done">
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  {new Date(task.dueDate).toLocaleDateString()}{" "}
                  {new Date(task.dueDate).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td>
                  <div
                    className="status-toggle-btn"
                    onClick={() => toggleDone(task.id)}
                  >
                    <CiCircleCheck color="green" />
                  </div>
                </td>
                <td>
                  <div
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}>
                    <AiFillDelete />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="5">
                  <hr className="row-separator" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
