import React, { useState } from "react";
import { addCerita } from "../api/ceritaApi";
import { TextField, Button, Box } from "@mui/material";

const AddCeritaForm = ({ onAdd }) => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCerita(judul, isi, tanggal);
    onAdd();
    setJudul("");
    setIsi("");
    setTanggal("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Isi Cerita"
        value={isi}
        onChange={(e) => setIsi(e.target.value)}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Tanggal"
        type="date"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Simpan Cerita
      </Button>
    </Box>
  );
};

export default AddCeritaForm;