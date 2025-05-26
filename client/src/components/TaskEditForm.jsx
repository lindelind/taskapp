// import React, { useState, useEffect } from "react";
// import { useTaskContext } from "../context/TaskContext";

// export const TaskEditForm = ({ task, closeModal }) => {
//   const { updateTask } = useTaskContext();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [dueTime, setDueTime] = useState("");
//   const [id, setId] = useState("");

//   useEffect(() => {
//     if (task) {
//       setId(task.id);
//       setTitle(task.title || "");
//       setDescription(task.description || "");
//       setDueDate(task.dueDate ? task.dueDate.split("T")[0] : "");
//       setDueTime(
//         task.dueDate
//           ? new Date(task.dueDate).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             })
//           : ""
//       );
//     }
//   }, [task]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const updatedTask = {
//       ...task,
//       title,
//       description,
//       dueDate: dueDate && dueTime ? `${dueDate}T${dueTime}` : dueDate || null,
//     };

//     updateTask(updatedTask);
//     closeModal();
//   };

//   return (
//     <div className="modal open">
//       <div className="modal-content">
//         <h2>Redigera {title}</h2>
//         <i>ID: {id}</i>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Tasknamn"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Beskrivning"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//           />
//           <input
//             type="time"
//             value={dueTime}
//             onChange={(e) => setDueTime(e.target.value)}
//           />
//           <div className="modal-buttons">
//             <button className="save-btn" type="submit">
//               Spara
//             </button>
//             <button type="button" onClick={closeModal}>
//               Avbryt
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import { Close as CloseIcon, Save as SaveIcon } from "@mui/icons-material";
import { useTaskContext } from "../context/TaskContext";

export const TaskEditForm = ({ task, closeModal }) => {
  const { updateTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title || "");
      setDescription(task.description || "");
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
    <Modal open onClose={closeModal}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          p: 4,
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          my: "10vh",
          boxShadow: 24,
          position: "relative",
        }}
      >
        {/* Stängknapp */}
        <IconButton
          onClick={closeModal}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={2}>
          Redigera Task
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          mb={3}
          display="block"
        >
          ID: {id}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Tasknamn"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Beskrivning"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              label="Datum"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <TextField
              label="Tid"
              type="time"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
            />
          </Box>

          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}
          >
            <Button onClick={closeModal} variant="outlined">
              Avbryt
            </Button>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
              color="primary"
            >
              Spara
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
