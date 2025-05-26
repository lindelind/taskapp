import "../style/TaskList.css";
import React, { useState } from "react";
import { GiCircle } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import ReusableTable from "./ReusableTable";
import NewTable from "./NewTable";
import { KeyboardArrowDown } from "@mui/icons-material";

export const TaskTable = ({ tasks, toggleDone, deleteTask, updateTask }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const columns = [
    { field: "title", headerName: "Task" },
    { field: "description", headerName: "Beskrivning" },
    {
      field: "dueDate",
      headerName: "Deadline",
      renderCell: (row) => {
        const isOverdue =
          row.dueDate && !row.done && new Date(row.dueDate) < new Date();
        return row.dueDate ? (
          <span style={isOverdue ? { color: "red" } : {}}>
            {`${new Date(row.dueDate).toLocaleDateString()} ${new Date(row.dueDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
          </span>
        ) : (
          ""
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (row) => {
        const isOverdue =
          row.dueDate && !row.done && new Date(row.dueDate) < new Date();

        let statusLabel = "Ej klar";
        let statusColor = "#f5b44c";
        if (row.done) {
          statusLabel = "Klar";
          statusColor = "#8dcf51";
        } else if (isOverdue) {
          statusLabel = "Förfallen";
          statusColor = "#d45757";
        }

        return (
          <div style={{ position: "relative" }}>
            <button
              style={{
                background: statusColor,
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "2px 12px 2px 8px",
                cursor: "pointer",
                fontSize: "0.95em",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
              }}
              onClick={() =>
                setOpenMenuId(openMenuId === row.id ? null : row.id)
              }
              data-status-btn-id={row.id} 
            >
              {statusLabel}
              <KeyboardArrowDown style={{ marginLeft: 4, fontSize: 20 }} />
            </button>
            {openMenuId === row.id && (
              <div
                style={{
                  position: "fixed",
                  left: (() => {
              
                    const btn = document.querySelector(
                      `[data-status-btn-id='${row.id}']`
                    );
                    if (btn) {
                      const rect = btn.getBoundingClientRect();
                      return rect.left + "px";
                    }
                    return 0;
                  })(),
                  top: (() => {
                    const btn = document.querySelector(
                      `[data-status-btn-id='${row.id}']`
                    );
                    if (btn) {
                      const rect = btn.getBoundingClientRect();
                      return rect.bottom + "px";
                    }
                    return 0;
                  })(),
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: 4,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  zIndex: 2000,
                  minWidth: 140,
                }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {row.done ? (
                    <li>
                      <button
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          color: "#f44336",
                          padding: "8px 12px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          toggleDone(row.id);
                          setOpenMenuId(null);
                        }}
                      >
                        Markera som ej klar
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          color: "#1976d2",
                          padding: "8px 12px",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          toggleDone(row.id);
                          setOpenMenuId(null);
                        }}
                      >
                        Markera som klar
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        );
      },
    },
    {
      field: "edit",
      headerName: "Åtgärder",
      renderCell: (row) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            width: "30px",
            marginLeft: "auto",
          }}
        >
          <div
            // className="delete-btn"
            onClick={() => deleteTask(row.id)}
            style={{ cursor: "pointer", color: "red", fontSize: "1.2em" }}
          >
            <AiFillDelete />
          </div>
          <div
            // className="edit-btn"
            onClick={() => updateTask(row)}
            style={{ cursor: "pointer", color: "blue", fontSize: "1.2em" }}
          >
            <MdOutlineEdit />
          </div>
        </div>
      ),
    },
  ];

  return <NewTable rows={tasks} columns={columns} />;
};
