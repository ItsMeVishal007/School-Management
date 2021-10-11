import React from "react";
import Button from "@mui/material/Button";

// 699268
interface ButtonInterface {
  btnType: string;
  label: string;
  onClick?: () => any;
}

const MainBtn: React.FunctionComponent<ButtonInterface> = ({
  btnType,
  label,
  onClick,
}) => {
  return (
    <Button
      variant={btnType === "Primary" ? "contained" : "outlined"}
      style={{ backgroundColor: "#699268", fontSize: "1.2rem" }}
      size='medium'
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default MainBtn;
