import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Buku Waktu
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Beranda
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Tentang
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;