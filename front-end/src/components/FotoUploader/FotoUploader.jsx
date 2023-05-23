import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { CloudUpload, Refresh } from "@mui/icons-material";

export const FotoUploader = () => {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpdate = () => {
    setOpenConfirmation(true);
  };

  const handleConfirmationClose = (continueUpdating) => {
    setOpenConfirmation(false);
    if (continueUpdating) {
      setSelectedPhoto("");
    }
  };

  return (
    <Box>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {selectedPhoto ? (
            <Button
            sx={{
                width:"100%"
            }}
              onClick={handleUpdate}
            >
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50px",
                  boxShadow: "0 0 15px #14037e",
                }}
                image={selectedPhoto}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              />
            </Button>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                border: "2px dashed #aaa",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <Typography variant="h7" align="center">
                Arraste para esta área ou clique para selecionar uma foto de
                Perfil
              </Typography>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button variant="contained" component="label">
                Selecionar
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </Button>
            </Box>
          )}
        </Box>
      </CardContent>

      <Dialog
        open={openConfirmation}
        onClose={() => handleConfirmationClose(false)}
      >
        <DialogTitle>Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ao atualizar a imagem, a imagem atual será substituída. Deseja
            continuar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmationClose(false)}>
            Cancelar
          </Button>
          <Button
            onClick={() => handleConfirmationClose(true)}
            color="primary"
            autoFocus
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
