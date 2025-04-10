import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/TaskContext";

export const TaskEditForm = ({ task, closeModal }) => {
  const { updateTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setFile(task.file || null);
      setFileName(task.fileName || "");
      setDueDate(task.dueDate ? task.dueDate.split("T")[0] : "");
      setDueTime(
        task.dueDate
          ? new Date(task.dueDate).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : ""
      );
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      title,
      description,
      dueDate: dueDate && dueTime ? `${dueDate}T${dueTime}` : dueDate || null,
    };

    updateTask(updatedTask);
    closeModal();
  };

  return (
    <div className="modal open">
      <div className="modal-content">
        <h2>Redigera {title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tasknamn"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Beskrivning"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
          />
          <div className="modal-buttons">
            <button className="save-btn" type="submit">
              Spara
            </button>
            <button type="button" onClick={closeModal}>
              Avbryt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
