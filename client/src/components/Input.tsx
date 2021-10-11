import React from "react";
import TextField from "@mui/material/TextField";

interface InputInterface{
    label: string;
}

const Input: React.FC<InputInterface> = ({label}) => {
  return <TextField  id='outlined-basic' label={label} variant='outlined' />;
};

export default Input;
