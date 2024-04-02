import React, { useCallback, useState } from "react";
import { useTable } from "../Table/useTable";
import { isGivenValueANumber } from "../../validation/isGivenValueANumber";

export const useTextFieldRows = () => {
  const { params, newRowsNumber } = useTable();
  const [rows, setRows] = useState<string>(params.pagesize);
  const [inputError, setInputError] = useState("");

  const validateInputValue = useCallback((str: string) => {
    const trimmedString = str.trim();

    if (!trimmedString) {
      setInputError("This field is required");
      return false;
    }

    if (trimmedString[0] === "0") {
      setInputError("The number cannot start with `0` ");
      return false;
    }

    if (Number(trimmedString) < 0 || Number(trimmedString) > 30) {
      setInputError("Please type the number between 1-30");
      return false;
    }

    if (!isGivenValueANumber(trimmedString)) {
      setInputError("Given value is not a number");
      return false;
    }

    setInputError("");
    return trimmedString;
  }, []);


  const onBlur = useCallback(() => {
    const newValue = validateInputValue(rows);

    if (newValue) {
      newRowsNumber(newValue);
    }
  }, [newRowsNumber, rows, validateInputValue]);


  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setRows(newValue);
  }, []);


  return {
    onBlur,
    onChange,
    validateInputValue,
    inputError,
    rows
  };
};
