import "../style/TaskInputForm.css";
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

export const TaskInputForm = () => {
  
  const { addTask } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      done: false,
    };

     addTask(newTask);

    setTitle("");
    setDescription("");
    setDueDate("");
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>➕ Lägg till task</button>
      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <div className="modal-content">
          <h2>Lägg till ny task</h2>
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
            <div className="modal-buttons">
              <button type="submit">Spara</button>
              <button type="button" onClick={closeModal}>
                Avbryt
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
