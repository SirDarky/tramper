import React, { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
import FotoYobom from "../../pages/img/Yobom-logo.jpg";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Email, Message, WhatsApp } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Empresas = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        mb: 5,
        mt: 5,
        display: "flex",
        width: "90%",
      }} style={{backgroundColor: "#eaeaea",boxShadow:"0 0 11px rgb(169, 169, 169)" }}
    >
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={FotoYobom}
        alt="Yobom"
      />
      <Box sx={{ width: "100%" }}>
        <CardHeader
          title="Yobom"
          subheader="Brasil-Amazonas-Manaus"
        />
        <Box sx={{ ml: 2, mr: 2 }}>
          <Typography>A procura de Funcionarios bom</Typography>
          <Typography> vem logo</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button>
              <Message sx={{ mr: 5, fontSize: 30 }} />
            </Button>
            <Button>
              <Email sx={{ mr: 5, fontSize: 30 }} />
            </Button>
            <Button>
              <WhatsApp sx={{ mr: 5, fontSize: 30 }} color="success"/>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Empresas;
