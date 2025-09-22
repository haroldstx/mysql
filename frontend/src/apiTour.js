//api para obtener los tours
import axios from "axios";

const API_URL = "http://localhost:5000/tours"; // Cambia esto si tu backend está en otra URL o puerto

export const fetchTours = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve los datos de los tours
  } catch (error) {
    console.error("Error fetching tours:", error);
    throw error;
  }
};

export const fetchTourSchedules = async (tourId) => {
  try {
    const response = await axios.get(`${API_URL}/${tourId}/schedules`);
    return response.data; // Devuelve los datos de los horarios del tour
  } catch (error) {
    console.error("Error fetching tour schedules:", error);
    throw error;
  }
};

export const createReservation = async (tourScheduleId, reservationData) => {
  try {
    const response = await axios.post(
      `${API_URL}/schedules/${tourScheduleId}/reservations`,
      reservationData
    );
    return response.data; // Devuelve los datos de la reservación creada
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
};
