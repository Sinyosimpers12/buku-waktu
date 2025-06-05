import React from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const About = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <BookIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
          <Typography variant="h4">Tentang Buku Waktu</Typography>
        </Box>
        
        <Typography paragraph>
          Buku Waktu adalah aplikasi untuk menyimpan kenangan, cerita, dan momen berharga dalam hidup Anda.
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Fitur Utama
        </Typography>
        <ul>
          <li><Typography>Catatan harian dengan tanggal</Typography></li>
          <li><Typography>Penyimpanan foto dan teks</Typography></li>
          <li><Typography>Kapsul waktu (time capsule)</Typography></li>
          <li><Typography>Pencarian dan filter</Typography></li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Kontak
        </Typography>
        <Typography paragraph>
          Email: <Link href="mailto:info@buku-waktu.com">info@buku-waktu.com</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;