import React from 'react';
import Button from '@mui/material/Button';

const Botao = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        mt: 3,
        marginBottom: '3%',
      }}
      variant="contained"
      style={{ color: 'white', backgroundColor: '#14037e' }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Botao;
