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

const ReusableTable = ({
  data = [],
  columns = [],
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 5,
  customCellStyles = {},
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    // <Paper elevation={2} sx={{ borderRadius: 2, overflow: "hidden" }}>
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col, idx) => (
                <TableCell
                  key={col.field}
                  sx={{ fontWeight: "bold", ...customCellStyles[col.field] }}
                  //   align={idx === columns.length - 1 ? "right" : "left"}
                  align={
                    col.align || (idx === columns.length - 1 ? "right" : "left")
                  }
                >
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  Inga data att visa
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIdx) => (
                <TableRow key={row.id || rowIdx}>
                  {columns.map((col, colIdx) => (
                    <TableCell
                      key={col.field}
                      sx={customCellStyles[col.field]}
                      align={
                        col.align ||
                        (colIdx === columns.length - 1 ? "right" : "left")
                      }
                    >
                      {col.renderCell ? col.renderCell(row) : row[col.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </>
    // </Paper>
  );
};

export default ReusableTable;
