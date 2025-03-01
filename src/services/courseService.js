import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Ajusta la URL según tu backend

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Puedes agregar funciones adicionales para crear cursos, subir materiales, evaluar participaciones, etc.
