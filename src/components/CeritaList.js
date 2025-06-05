import React, { useState, useEffect } from "react";
import { getCerita, deleteCerita } from "../api/ceritaApi";
import { List, ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CeritaList = () => {
  const [cerita, setCerita] = useState([]);

  useEffect(() => {
    const fetchCerita = async () => {
      const data = await getCerita();
      setCerita(data);
    };
    fetchCerita();
  }, []);

  const handleDelete = async (id) => {
    await deleteCerita(id);
    setCerita(cerita.filter(item => item.id !== id));
  };

  return (
    <List>
      {cerita.map((item) => (
        <ListItem key={item.id} divider>
          <ListItemText
            primary={item.judul}
            secondary={
              <>
                <Typography variant="body2">{item.isi}</Typography>
                <Typography variant="caption">{item.tanggal}</Typography>
              </>
            }
          />
          <IconButton edge="end" onClick={() => handleDelete(item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CeritaList;