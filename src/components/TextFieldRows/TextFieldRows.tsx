import { useTextFieldRows } from "./useTextFieldRows";
import { TextField } from "@mui/material";

export const TextFieldRows = () => {
  const { rows, onBlur, onChange, inputError } = useTextFieldRows();

  return (
    <TextField
      placeholder="Rows per page..."
      value={rows}
      onBlur={onBlur}
      onChange={onChange}
      error={!!inputError}
      helperText={inputError}
      sx={{ ml: "auto", my: 10, width: "30%" }}
    />
  );
};
