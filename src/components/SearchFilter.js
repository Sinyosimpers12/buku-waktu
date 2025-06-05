import { TextField, MenuItem, Box } from '@mui/material';

const SearchFilter = ({ searchTerm, setSearchTerm, filterYear, setFilterYear }) => {
  const years = ['Semua', '2023', '2024', '2025'];
  
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <TextField
        label="Cari Judul/Isi"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
      />
      <TextField
        select
        label="Tahun"
        value={filterYear}
        onChange={(e) => setFilterYear(e.target.value)}
        sx={{ minWidth: 120 }}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

// Tambahkan export default
export default SearchFilter;