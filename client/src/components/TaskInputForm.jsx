// import "../style/TaskInputForm.css";
// import { useState } from "react";
// import { useTaskContext } from "../context/TaskContext";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import { IconButton } from "@mui/material";

// export const TaskInputForm = () => {
  
//   const { addTask } = useTaskContext();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [dueTime, setDueTime] = useState("");

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const dueDateTime = `${dueDate}T${dueTime}`;

//     const newTask = {
//       id: Date.now().toString(),
//       title,
//       description,
//       dueDate: dueDateTime,
//       done: false,
//     };

//      addTask(newTask);

//     setTitle("");
//     setDescription("");
//     setDueDate("");
//     setDueTime("");
//     closeModal();
//   };

//   return (
//     <>
//       <IconButton
//         onClick={openModal}
//         sx={{
//           color: "#1976d2",

//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "scale(1.05)",
//           },
//         }}
//       >
//         <AddCircleIcon sx={{ fontSize: 32 }} />
//       </IconButton>

//       <div className={`modal ${isModalOpen ? "open" : ""}`}>
//         <div className="modal-content">
//           <h2>Lägg till ny task</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Tasknamn"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//             <textarea
//               placeholder="Beskrivning"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//             <input
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//               required
//             />
//             <input
//               type="time"
//               value={dueTime}
//               onChange={(e) => setDueTime(e.target.value)}
//               required
//             />
//             <div className="modal-buttons">
//               <button className="save-btn" type="submit">
//                 Spara
//               </button>
//               <button type="button" onClick={closeModal}>
//                 Avbryt
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };


import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

export const TaskInputForm = () => {
  const { addTask } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dueDateTime = `${dueDate}T${dueTime}`;

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: dueDateTime,
      done: false,
    };

    addTask(newTask);

    // Reset form
    setTitle("");
    setDescription("");
    setDueDate("");
    setDueTime("");
    closeModal();
  };

  return (
    <>
      <IconButton
        onClick={openModal}
        sx={{
          color: "#1976d2",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <AddCircleIcon sx={{ fontSize: 36 }} />
      </IconButton>

      <Modal open={isModalOpen} onClose={closeModal}>
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
          {/* Close button */}
          <IconButton
            onClick={closeModal}
            sx={{ position: "absolute", top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" fontWeight={600} mb={2}>
            Lägg till ny Task
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
                required
              />
              <TextField
                label="Tid"
                type="time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                required
              />
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
              }}
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
    </>
  );
};
