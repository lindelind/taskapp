import "../style/TaskList.css";
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import { GiCircle } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

export const TaskList = () => {
  const { tasks, toggleDone, deleteTask } = useTaskContext();

  return (
    <div className="task-list">
      <table className="task-table">
        <thead>
          <tr>
            <th>Att göra</th>
            <th>Beskrivning</th>
            <th>Förfallodatum</th>
            <th>Status</th>
            <th>Åtgärder</th>
          </tr>
        </thead>
        <tbody>
            <br />
          <tr>
            <td colSpan="5">
              <hr className="row-separator" />
            </td>
          </tr>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <tr className={task.done ? "task-item done" : "task-item"}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>
                  <div
                    className="status-toggle-btn"
                    onClick={() => toggleDone(task.id)}
                  >
                    {task.done ? (
                      <CiCircleCheck color="green" />
                    ) : (
                      <GiCircle color="red" />
                    )}
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
