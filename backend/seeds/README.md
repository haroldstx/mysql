# Seeds

Este directorio contiene los archivos de seed para poblar la base de datos con datos iniciales.

## Estructura

- `toursSeeds.js` - Datos de tours
- `tourSchedulesSeeds.js` - Horarios de tours
- `reservationsSeeds.js` - Reservaciones
- `index.js` - Script principal que ejecuta todos los seeds

## Uso

### Ejecutar todos los seeds

```bash
npm run seed
```

O directamente:

```bash
node seeds/index.js
```

### Ejecutar seeds individuales

```bash
node -e "require('./seeds/toursSeeds')()"
node -e "require('./seeds/tourSchedulesSeeds')()"
node -e "require('./seeds/reservationsSeeds')()"
```

## Datos incluidos

### Tours

- City Walking Tour - $25.00 (capacidad: 20)
- Sunset Boat Cruise - $40.00 (capacidad: 30)
- Jungle Adventure - $75.00 (capacidad: 15)

### Horarios

- City Walking Tour: 25/09/2025 09:00 y 26/09/2025 14:00
- Sunset Boat Cruise: 25/09/2025 17:30
- Jungle Adventure: 27/09/2025 06:00 y 28/09/2025 06:00

### Reservaciones

- María Pérez - 2 asientos en City Walking Tour del 25/09/2025 09:00

## Notas

- Los seeds eliminan todos los datos existentes antes de insertar los nuevos
- Se ejecutan en orden: tours → horarios → reservaciones
- La base de datos debe estar disponible y configurada correctamente
