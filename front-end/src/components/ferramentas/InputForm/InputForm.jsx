import React from "react";
import TextField from "@mui/material/TextField";

import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

const InputForm = ({ label, type }) => {
  return (
    <Box
      sx={{
        mt: 1,
        width: "45%",
        display: "flex",
        flexDirection: "column", "@media (max-width:600px)": {
          width: "100%",
        },
      }}
      
    >
      <InputLabel sx={{ color: "white", marginLeft: "2%" }}>{label}:</InputLabel>
      <TextField
        sx={{}}
        style={{   backgroundColor: "rgba(219, 214, 255, 0.941)"}}
        label=""
        variant="standard"
        type={type}
      />
    </Box>
  );
};

export default InputForm;
