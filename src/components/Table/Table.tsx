import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  CircularProgress,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { QUERY_KEY_GET_TAGS, getTags } from "../../api/getTags";
import { StyledTableCell } from "./styles";
import { columns } from "./columns";
import { useTable } from "./useTable";
import { validateUrlParams } from "../../validation/validateUrlParams";

export const Table = () => {
  const { changeOrder, params } = useTable();

  const paramsError = validateUrlParams(params);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QUERY_KEY_GET_TAGS, params],
    queryFn: () => getTags(params),
    enabled: paramsError.length === 0,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{error.message}</Alert>;
  }

  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column}
                onClick={changeOrder}
                sx={{ cursor: "pointer" }}
              >
                {column}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items?.map(({ name, count }) => {
            return (
              <TableRow key={name + count}>
                <TableCell>{name}</TableCell>
                <TableCell>{count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
      {paramsError.map((error) => <Alert severity="warning" key={error}>{error}</Alert>)}
    </TableContainer>
  );
};
