import { TaskTable } from "./TaskTable";
import { useTaskContext } from "../context/TaskContext";
import { useState } from "react";
import { TaskEditForm } from "./TaskEditForm";
import "../style/TaskList.css";
import { Tabs, Tab, Box } from "@mui/material";
import { TaskInputForm } from "./TaskInputForm";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const TaskList = () => {
  const { tasks, toggleDone, deleteTask } = useTaskContext();
  const [selectedTask, setSelectedTask] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const todoTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
          mb: 0,
          borderRadius: "16px 16px 0 0",
          px: { xs: 1, sm: 3 },
          pt: 1,
          background: "#cfe4fa",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={(_, newValue) => setTabIndex(newValue)}
          aria-label="task tabs"
          sx={{
            flex: 1,
            minHeight: 48,
            ".MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
              color: "#607d8b",
              borderRadius: "10px 10px 0 0",
              minHeight: 48,
              px: 3,
              py: 1.5,
              gap: 1,
              transition: "background 0.2s, color 0.2s",
              "&.Mui-selected": {
                color: "#1976d2",
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            },
            ".MuiTabs-indicator": {
              height: 3,
              borderRadius: 2,
              backgroundColor: "#1976d2",
              bottom: 0,
            },
          }}
          TabIndicatorProps={{
            style: {
              height: 3,
              borderRadius: 2,
              backgroundColor: "#1976d2",
              bottom: 0,
            },
          }}
        >
          <Tab
            icon={<ListAltIcon sx={{ fontSize: 22, mr: 1 }} />}
            iconPosition="start"
            label="Att göra"
          />
          <Tab
            icon={<CheckCircleIcon sx={{ fontSize: 22, mr: 1 }} />}
            iconPosition="start"
            label="Klart"
          />
        </Tabs>
        <Box sx={{ ml: 2 }}>
          <TaskInputForm />
        </Box>
      </Box>
      {tabIndex === 0 && (
        <TaskTable
          tasks={todoTasks}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          updateTask={handleEditTask}
          isDone={false}
        />
      )}
      {tabIndex === 1 && (
        <TaskTable
          tasks={doneTasks}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          updateTask={handleEditTask}
          isDone={true}
        />
      )}
      {selectedTask && (
        <TaskEditForm task={selectedTask} closeModal={closeModal} />
      )}
    </>
  );
};
