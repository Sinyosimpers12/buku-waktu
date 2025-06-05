import React, { useState, useEffect } from 'react';
import { getCerita } from '../api/ceritaApi';
import CeritaList from '../components/CeritaList';
import AddCeritaForm from '../components/AddCeritaForm';
import SearchFilter from '../components/SearchFilter';
import { 
  Box, 
  Typography, 
  Container,
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  Modal,
  Fade,
  Backdrop,
  CircularProgress,
  Avatar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/MenuBook';

// Tema kustom yang lebih aesthetic
const theme = createTheme({
  palette: {
    primary: {
      main: '#5e35b1',
    },
    secondary: {
      main: '#ff7043',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: '#5e35b1',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '600px' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none',
};

const Home = () => {
  const [cerita, setCerita] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('Semua');
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const loadCerita = async () => {
      try {
        const data = await getCerita();
        setCerita(data);
      } catch (error) {
        console.error('Gagal memuat cerita:', error);
      } finally {
        setLoading(false);
      }
    };
    loadCerita();
  }, []);

  const filteredCerita = cerita.filter(item => {
    const matchesSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.isi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'Semua' || 
                        new Date(item.tanggal).getFullYear().toString() === filterYear;
    return matchesSearch && matchesYear;
  });

  const handleAddCerita = (newCerita) => {
    setCerita([newCerita, ...cerita]);
    setOpenModal(false);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ 
          minHeight: '100vh',
        }}>
          {/* Header Section */}
          <Paper elevation={0} sx={{ 
            p: 4, 
            mb: 4,
            borderRadius: 3,
            backgroundColor: 'background.paper',
            backgroundImage: 'linear-gradient(to right, rgba(94, 53, 177, 0.1), rgba(255, 112, 67, 0.1))',
            borderLeft: '6px solid',
            borderColor: 'primary.main',
          }}>
            <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
              <Avatar sx={{ 
                bgcolor: 'primary.main', 
                width: 60, 
                height: 60,
                mr: 2
              }}>
                <BookIcon fontSize="large" />
              </Avatar>
              <Typography 
                variant="h4" 
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                Buku Waktu
              </Typography>
            </Box>
            
            <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={3}>
              Catat momen berharga dalam hidupmu
            </Typography>
            
            <Box display="flex" justifyContent="center" mb={2}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpenModal}
                sx={{
                  borderRadius: 20,
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                Tambah Cerita Baru
              </Button>
            </Box>
            
            <Box sx={{ mt: 3 }}>
              <SearchFilter 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterYear={filterYear}
                setFilterYear={setFilterYear}
              />
            </Box>
          </Paper>
          
          {/* Modal untuk Add Cerita Form */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openModal}>
              <Box sx={modalStyle}>
                <Typography variant="h6" mb={3} color="primary.main">
                  Tambah Cerita Baru
                </Typography>
                <AddCeritaForm onAdd={handleAddCerita} onCancel={handleCloseModal} />
              </Box>
            </Fade>
          </Modal>
          
          {/* Content Section */}
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="300px">
              <CircularProgress color="secondary" size={60} />
            </Box>
          ) : (
            <Paper elevation={0} sx={{ 
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}>
              <CeritaList cerita={filteredCerita} />
            </Paper>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;