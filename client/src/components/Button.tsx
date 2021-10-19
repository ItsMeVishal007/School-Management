import React from 'react';
import Button from '@mui/material/Button';

// 699268
interface ButtonInterface {
  btnType: string;
  label: string;
  onClick?: () => any;
  style?: any;
}

const MainBtn: React.FunctionComponent<ButtonInterface> = ({
  btnType,
  label,
  onClick,
  style
}) => {
  return (
    <Button
      variant={btnType === 'Primary' ? 'contained' : 'outlined'}
      style={{
        backgroundColor: btnType === 'Primary' ? '#34495e' : '#f5f6fa00',
        fontSize: '1rem',
        color:'white',
        ...style
      }}
      size="medium"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default MainBtn;
