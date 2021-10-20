import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface InputInterface {
  label: string;
  onChange: (e: string | any) => any;
}

const Input: React.FC<InputInterface> = ({ label, onChange }) => {
  return (
    <TextField
      id='outlined-basic'
      label={label}
      variant='standard'
      onChange={onChange}
    />
  );
};

export default Input;
