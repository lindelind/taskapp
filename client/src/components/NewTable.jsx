import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";

const rowHeight =20; 

const NewTable = ({
  rows = [],
  columns = [],
  rowsPerPageOptions = [10, 25, 50, 100],
  defaultRowsPerPage = 10,
  customCellStyles = {},
  standardCellStyle = {
    padding: "10px",
    Left: "20px",
    fontSize: 14,
    height: `${rowHeight}px`,
    minHeight: `${rowHeight}px`,
    maxHeight: `${rowHeight}px`,
    borderBottom: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    color: "grey",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  standardHeaderStyle = {
    fontWeight: 600,
  },
  labelRowsPerPage = "Rader per sida",
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <TableContainer component={Paper} style={{ minHeight: 100 }}>
        <Table>
          <TableHead>
            <TableRow
              style={{
                height: `${rowHeight}px`,
                minHeight: `${rowHeight}px`,
                maxHeight: `${rowHeight}px`,
              }}
            >
              {columns.map((col, index) => (
                <TableCell
                  key={col.field || index}
                  style={{
                    ...standardCellStyle,
                    ...standardHeaderStyle,
                    ...(index == 0 ? { paddingLeft: "30px" } : {}),
                    ...(col.field === "edit" ||
                    col.field === "delete" ||
                    col.field === "status"
                      ? {
                          textAlign: "center",
                          width: "50px",
                          minWidth: "50px",
                          maxWidth: "50px",
                          paddingRight: "30px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }
                      : {}),
                    ...(col.field === "hide"
                      ? {
                          textAlign: "right",
                          width: "70px",
                          minWidth: "70px",
                          maxWidth: "70px",
                          paddingRight: "30px",
                        }
                      : {}),
                    ...(col.field === "wholesale"
                      ? {
                          textAlign: "right",
                          width: "300px",
                          minWidth: "300px",
                          maxWidth: "300px",
                          Right: "30px",
                        }
                      : {}),
                    ...customCellStyles[col.field],
                  }}
                >
                  {col.headerName || col.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow
                style={{
                  height: `${rowHeight}px`,
                  minHeight: `${rowHeight}px`,
                  maxHeight: `${rowHeight}px`,
                }}
              >
                <TableCell
                  colSpan={columns.length}
                  align="center"
                  style={{ ...standardCellStyle }}
                >
                  Inga data att visa
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, idx) => (
                <TableRow
                  key={row.id || idx}
                  style={{
                    height: `${rowHeight}px`,
                    minHeight: `${rowHeight}px`,
                    maxHeight: `${rowHeight}px`,
                  }}
                >
                  {columns.map((col, index) => (
                    <TableCell
                      key={col.field || index}
                      style={{
                        ...standardCellStyle,
                        ...(index == 0 ? { paddingLeft: "30px" } : {}),
                        ...(col.field === "edit" ||
                        col.field === "delete" ||
                        col.field === "status"
                          ? {
                              textAlign: "center",
                              width: "50px",
                              minWidth: "50px",
                              maxWidth: "50px",
                              paddingRight: "50px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }
                          : {}),
                        ...(col.field === "hide"
                          ? {
                              textAlign: "right",
                              width: "70px",
                              minWidth: "70px",
                              maxWidth: "70px",
                              paddingRight: "30px",
                            }
                          : {}),
                        ...(col.field === "wholesale"
                          ? {
                              textAlign: "right",
                              width: "300px",
                              minWidth: "300px",
                              maxWidth: "300px",
                              Right: "30px",
                            }
                          : {}),
                        ...customCellStyles[col.field],
                      }}
                    >
                      {col.renderCell ? col.renderCell(row) : row[col.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(_, newPage) => setPage(newPage)}
          onChangeRowsPerPage={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          labelRowsPerPage={labelRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default NewTable;
