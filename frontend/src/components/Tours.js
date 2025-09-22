import React, { useState, useEffect } from "react";
import {
  fetchTours,
  fetchTourSchedules,
  createReservation,
} from "../apiTour.js";

function Tours() {
  const [tours, setTours] = useState([]);

  //function para extraer los datos de los tours
  useEffect(() => {
    const getTours = async () => {
      try {
        const toursData = await fetchTours();
        setTours(toursData);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    getTours();
  }, []);

  return (
    <div>
      <h2>Lista de Tours</h2>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Tours;
