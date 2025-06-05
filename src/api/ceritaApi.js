import axios from "axios";

const API_URL = "https://filosi-73b7e-default-rtdb.asia-southeast1.firebasedatabase.app/cerita.json";

export const getCerita = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data ? Object.entries(response.data).map(([id, data]) => ({ id, ...data })) : [];
  } catch (error) {
    console.error("Error fetching cerita:", error);
    return [];
  }
};

export const addCerita = async (judul, isi, tanggal) => {
  const newCerita = { judul, isi, tanggal, createdAt: new Date().toISOString() };
  await axios.post(API_URL, newCerita);
};

export const deleteCerita = async (id) => {
  await axios.delete(`https://filosi-73b7e-default-rtdb.asia-southeast1.firebasedatabase.app/cerita/${id}.json`);
};

export const updateCerita = async (id, updatedData) => {
  await axios.patch(
    `https://filosi-73b7e-default-rtdb.asia-southeast1.firebasedatabase.app/cerita/${id}.json`,
    updatedData
  );
};