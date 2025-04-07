import "../style/TaskList.css";
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import { GiCircle } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";

export const TaskList = () => {
  const { tasks,toggleDone } = useTaskContext();

  return (
    <div className="task-list">
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Beskrivning</th>
            <th>Förfallodatum</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <hr />
            </td>
          </tr>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <tr>
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
              </tr>
              <tr>
                <td colSpan="5">
                  <hr />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
