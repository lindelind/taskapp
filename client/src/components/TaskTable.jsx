
import "../style/TaskList.css";
import React from "react";
import { GiCircle } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

export const TaskTable = ({ tasks, toggleDone, deleteTask, isDone, updateTask }) => (
  <table className={`task-table ${isDone ? "done-table" : ""}`}>
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
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <tr className={`task-item ${isDone ? "done" : ""}`}>
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
                {isDone ? (
                  <CiCircleCheck color="green" />
                ) : (
                  <GiCircle color="red" />
                )}
              </div>
            </td>
            <td className="action-buttons">
              <div className="delete-btn" onClick={() => deleteTask(task.id)}>
                <AiFillDelete />
              </div>
              <div className="edit-btn" onClick={() => updateTask(task)}>
                <MdOutlineEdit />
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
);