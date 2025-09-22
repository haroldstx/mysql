function ToursCard({ tour }) {
  //recibe un tipo tour con los datos del tour
  return (
    <div className="tours-card">
      <h3>{tour.name}</h3>
      <p>{tour.description}</p>
      {/* Aquí puedes agregar más detalles del tour */}
    </div>
  );
}
export default ToursCard;
