import React from "react";
import Typography from "@mui/material/Typography";

interface iText {
  text: string | number;
  hType: string;
}

const setHtype = (text: string) => {
  if (text === "h1") return "h1";
  if (text === "h2") return "h2";
  if (text === "h3") return "h3";
  if (text === "h4") return "h4";
  if (text === "h5") return "h5";
  if (text === "h6") return "h6";
  return "body1";
};

const Text: React.FC<iText> = ({ text, hType }) => {
  return (
    <Typography variant={setHtype(hType)} component='div'>
      {text}
    </Typography>
  );
};

export default Text;
