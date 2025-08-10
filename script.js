const airports = {
    // Colombia
    'SKBO': {
        name: 'Bogotá - El Dorado',
        coords: [4.7016, -74.1469],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 185, flightTime: 1.2 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 220, flightTime: 1.3 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 325, flightTime: 1.5 },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 340, flightTime: 1.6 },
            { code: 'MIA', name: 'Miami International', distance: 1140, flightTime: 3.5 },
            { code: 'MAD', name: 'Madrid - Barajas', distance: 4580, flightTime: 9.2 }
        ]
    },
    // Listo
    'SKRG': {
        name: 'Medellín - José María Córdova',
        coords: [6.1645, -75.4234],
        destinations: [
            { code: 'JFK', name: 'John F. Kennedy International', distance: 2151, flightTime: 5 },
            { code: 'MCO', name: 'Orlando International', distance: 1378, flightTime: 3.3 },
            { code: 'MIA', name: 'Miami International', distance: 1245, flightTime: 3 },
            { code: 'PUJ', name: 'Punta Cana International', distance: 868, flightTime: 2.10 },
            { code: 'MEX', name: 'Mexico City - Benito Juárez', distance: 1694, flightTime: 3.5 },
            { code: 'CUN', name: 'Cancún International', distance: 1186, flightTime: 3 },
            { code: 'EZE', name: 'Buenos Aires - Ezeiza (Ministro Pistarini)', distance: 2767, flightTime: 6.2 },
            { code: 'GRU', name: 'São Paulo - Guarulhos', distance: 2569, flightTime: 5.5 },
            { code: 'AXM', name: 'Armenia - El Edén', distance: 118, flightTime: 0.3 },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 159, flightTime: 0.35},
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 159, flightTime: 0.3 },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 296, flightTime: 1 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 257, flightTime: 0.50 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 209, flightTime: 0.4 },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 158, flightTime: 0.40 },
            { code: 'PSO', name: 'Pasto - Antonio Nariño', distance: 319, flightTime: 1 },
            { code: 'RCH', name: 'Riohacha - Almirante Padilla', distance: 374, flightTime: 1.15 },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 313, flightTime: 1 },
            { code: 'ADZ', name: 'San Andrés - Gustavo Rojas Pinilla', distance: 563, flightTime: 1.3 },
            { code: 'VUP', name: 'Valledupar - Alfonso López Pumarejo', distance: 292, flightTime: 0.57 },
            { code: 'VVC', name: 'Villavicencio - Vanguardia', distance: 203, flightTime: 0.45 },
            { code: 'LIM', name: 'Lima - Jorge Chávez', distance: 1113, flightTime: 2.47 },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 164, flightTime: 0.35 },
        ]
    },
    'SKCL': {
        name: 'Cali - Alfonso Bonilla Aragón',
        coords: [3.5432, -76.3816],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 220, flightTime: 1.3 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 155, flightTime: 1.0 },
            { code: 'UIO', name: 'Quito - Mariscal Sucre', distance: 280, flightTime: 1.5 },
            { code: 'LIM', name: 'Lima - Jorge Chávez', distance: 750, flightTime: 2.8 },
            { code: 'MIA', name: 'Miami International', distance: 1240, flightTime: 4.0 } 
        ]
    },
    'SKCG': {
        name: 'Cartagena - Rafael Núñez',
        coords: [10.4424, -75.5130],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 325, flightTime: 1.5 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 245, flightTime: 1.3 },
            { code: 'PTY', name: 'Panamá - Tocumen', distance: 285, flightTime: 1.4 },
            { code: 'MIA', name: 'Miami International', distance: 965, flightTime: 3.2 },
            { code: 'CUN', name: 'Cancún International', distance: 780, flightTime: 2.8 } 
        ]
    },
    'SKBQ': {
        name: 'Barranquilla - Ernesto Cortissoz',
        coords: [10.8896, -74.7808],
        destinations: [
           { code: 'BOG', name: 'Bogotá - El Dorado', distance: 340, flightTime: 1.6 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 65, flightTime: 0.5 },
            { code: 'MIA', name: 'Miami International', distance: 980, flightTime: 3.3 },
            { code: 'PTY', name: 'Panamá - Tocumen', distance: 295, flightTime: 1.5 } 
        ]
    },
    
    'SKAR': {
        name: 'Armenia - El Edén',
        coords: [4.4528, -75.7661],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 105, flightTime: 0.2 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 185, flightTime: 0.4 } 
        ]
    },
    'SKBG': {
        name: 'Bucaramanga - Palonegro',
        coords: [7.1265, -73.1848],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 146, flightTime: 0.3 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 280, flightTime: 0.6 } 
        ]
    },
    'SKPE': {
        name: 'Pereira - Matecaña',
        coords: [4.8127, -75.7395],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 83, flightTime: 0.2 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 195, flightTime: 0.4 }
        ]
    },
    'SKPS': {
        name: 'Pasto - Antonio Nariño',
        coords: [1.3963, -77.2915],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 307, flightTime: 0.7 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 450, flightTime: 1.0 }
        ]
    },
    'SKRH': {
        name: 'Riohacha - Almirante Padilla',
        coords: [11.5262, -72.9259],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 354, flightTime: 0.8 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 165, flightTime: 0.4 }
        ]
    },
    //Listo
    'SKSM': {
        name: 'Santa Marta - Simón Bolívar',
        coords: [11.1196, -74.2306],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 340, flightTime: 1 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 580, flightTime: 1.2 },
            { code: 'PUJ', name: 'Punta Cana International', distance: 565, flightTime: 1.35 },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 260, flightTime: 0.5 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 506, flightTime: 1.2 },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 420, flightTime: 1.1 }
        ]
    },
    'SKSP': {
        name: 'San Andrés - Gustavo Rojas Pinilla',
        coords: [12.5836, -81.7117],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 536, flightTime: 1.3 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 650, flightTime: 1.5 }
        ]
    },
    'SKVP': {
        name: 'Valledupar - Alfonso López Pumarejo',
        coords: [10.4350, -73.2495],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 287, flightTime: 0.7 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 520, flightTime: 1.2 }
        ]
    },
    'SKVV': {
        name: 'Villavicencio - Vanguardia',
        coords: [4.1681, -73.6138],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 162, flightTime: 0.4 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 85, flightTime: 0.2 }
        ]
    },
    'SKMR': {
        name: 'Montería - Los Garzones',
        coords: [8.8235, -75.8259],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 161, flightTime: 0.4 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 380, flightTime: 0.9 }
        ]
    },
    
    // Destinos internacionales mencionados en MDE
    
    'MDPC': {
        name: 'Punta Cana International',
        coords: [18.5674, -68.3634],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 852, flightTime: 2.0 },
            { code: 'MIA', name: 'Miami International', distance: 635, flightTime: 1.5 }
        ]
    },

    //Mexico
    'MMMX': {
        name: 'Mexico City - Benito Juárez',
        coords: [19.4363, -99.0721],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1594, flightTime: 3.8 },
            { code: 'CUN', name: 'Cancún International', distance: 785, flightTime: 1.9 }
        ]
    },
    'MMUN': {
        name: 'Cancún International',
        coords: [21.0367, -86.8770],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1114, flightTime: 2.7 },
            { code: 'MEX', name: 'Mexico City - Benito Juárez', distance: 785, flightTime: 1.9 },
            { code: 'MIA', name: 'Miami International', distance: 520, flightTime: 1.2 }
        ]
    },

    // Otros destinos internacionales
    'SAEZ': {
        name: 'Buenos Aires - Ezeiza (Ministro Pistarini)',
        coords: [-34.8222, -58.5358],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2640, flightTime: 6.3 },
            { code: 'GRU', name: 'São Paulo - Guarulhos', distance: 1065, flightTime: 2.5 }
        ]
    },
    'SBGR': {
        name: 'São Paulo - Guarulhos',
        coords: [-23.4356, -46.4731],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2458, flightTime: 5.9 },
            { code: 'EZE', name: 'Buenos Aires - Ezeiza (Ministro Pistarini)', distance: 1065, flightTime: 2.5 }
        ]
    },
    'SPJC': {
        name: 'Lima - Jorge Chávez',
        coords: [-12.0219, -77.1143],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1097, flightTime: 2.6 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 750, flightTime: 2.8 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1165, flightTime: 2.8 }
        ]
    },

    // Estados Unidos
    'KMIA': {
        name: 'Miami International',
        coords: [25.7932, -80.2906],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1140, flightTime: 3.5 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1180, flightTime: 3.8 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 1240, flightTime: 4.0 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 965, flightTime: 3.2 },
            { code: 'JFK', name: 'New York - JFK', distance: 1090, flightTime: 2.5 },
            { code: 'LAX', name: 'Los Angeles International', distance: 2342, flightTime: 5.2 }
        ]
    },
    'KMCO': {
        name: 'Orlando International',
        coords: [28.4294, -81.3089],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1378, flightTime: 3.3 },
            { code: 'MIA', name: 'Miami International', distance: 220, flightTime: 0.5 }
        ]
    },
    'KJFK': {
        name: 'New York - John F. Kennedy',
        coords: [40.6413, -73.7781] ,
        destinations: [
            { code: 'MIA', name: 'Miami International', distance: 1090, flightTime: 2.5 },
            { code: 'LAX', name: 'Los Angeles International', distance: 2475, flightTime: 5.5 },
            { code: 'LHR', name: 'London - Heathrow', distance: 3470, flightTime: 7.0 },
            { code: 'CDG', name: 'Paris - Charles de Gaulle', distance: 3635, flightTime: 7.5 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 2490, flightTime: 6.0 }
        ]
    },
    'KLAX': {
        name: 'Los Angeles International',
        coords: [33.9425, -118.4081],
        destinations: [
            { code: 'JFK', name: 'New York - JFK', distance: 2475, flightTime: 5.5 },
            { code: 'MIA', name: 'Miami International', distance: 2342, flightTime: 5.2 },
            { code: 'NRT', name: 'Tokyo - Narita', distance: 5478, flightTime: 11.0 },
            { code: 'LHR', name: 'London - Heathrow', distance: 5440, flightTime: 11.2 },
            { code: 'SYD', name: 'Sydney - Kingsford Smith', distance: 7488, flightTime: 14.5 }
        ]
    },
    
    // Europa
    'EGLL': {
        name: 'London - Heathrow',
        coords: [51.4700, -0.4543],
        destinations: [
            { code: 'CDG', name: 'Paris - Charles de Gaulle', distance: 214, flightTime: 1.2 },
            { code: 'FRA', name: 'Frankfurt am Main', distance: 391, flightTime: 1.5 },
            { code: 'JFK', name: 'New York - JFK', distance: 3470, flightTime: 7.0 },
            { code: 'LAX', name: 'Los Angeles International', distance: 5440, flightTime: 11.2 },
            { code: 'DXB', name: 'Dubai International', distance: 3414, flightTime: 7.0 }
        ]
    },
    'LFPG': {
        name: 'Paris - Charles de Gaulle',
        coords: [49.0128, 2.5500],
        destinations: [
            { code: 'LHR', name: 'London - Heathrow', distance: 214, flightTime: 1.2 },
            { code: 'FRA', name: 'Frankfurt am Main', distance: 284, flightTime: 1.3 },
            { code: 'MAD', name: 'Madrid - Barajas', distance: 659, flightTime: 2.0 },
            { code: 'JFK', name: 'New York - JFK', distance: 3635, flightTime: 7.5 },
            { code: 'NRT', name: 'Tokyo - Narita', distance: 6194, flightTime: 12.0 }
        ]
    },
    'LEMD': {
        name: 'Madrid - Barajas',
        coords: [40.4839, -3.5680],
        destinations: [
            { code: 'CDG', name: 'Paris - Charles de Gaulle', distance: 659, flightTime: 2.0 },
            { code: 'LHR', name: 'London - Heathrow', distance: 773, flightTime: 2.2 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 4580, flightTime: 9.2 },
            { code: 'LIM', name: 'Lima - Jorge Chávez', distance: 6240, flightTime: 12.0 },
            { code: 'FCO', name: 'Rome - Fiumicino', distance: 745, flightTime: 2.3 }
        ]
    },
    
    // Centroamérica
    'MPTO': {
        name: 'Panamá - Tocumen',
        coords: [9.0714, -79.3834],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 415, flightTime: 1.8 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 285, flightTime: 1.4 },
            { code: 'SJO', name: 'San José - Juan Santamaría', distance: 180, flightTime: 1.0 },
            { code: 'MIA', name: 'Miami International', distance: 1045, flightTime: 3.0 },
            { code: 'GUA', name: 'Guatemala City', distance: 520, flightTime: 2.2 }
        ]
    },
    
    // Ecuador
    'SEQM': {
        name: 'Quito - Mariscal Sucre',
        coords: [-0.1292, -78.3573],
        destinations: [
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 280, flightTime: 1.5 }
        ]
    },
    
    // Asia
    'RJAA': {
        name: 'Tokyo - Narita',
        coords: [35.7720, 140.3929],
        destinations: [
            { code: 'ICN', name: 'Seoul - Incheon', distance: 759, flightTime: 2.0 },
            { code: 'PVG', name: 'Shanghai - Pudong', distance: 1090, flightTime: 2.8 },
            { code: 'SIN', name: 'Singapore - Changi', distance: 3317, flightTime: 7.0 },
            { code: 'LAX', name: 'Los Angeles International', distance: 5478, flightTime: 11.0 },
            { code: 'CDG', name: 'Paris - Charles de Gaulle', distance: 6194, flightTime: 12.0 }
        ]
    },
    
    // Medio Oriente
    'OMDB': {
        name: 'Dubai International',
        coords: [25.2532, 55.3657],
        destinations: [
            { code: 'DOH', name: 'Doha - Hamad International', distance: 230, flightTime: 1.2 },
            { code: 'LHR', name: 'London - Heathrow', distance: 3414, flightTime: 7.0 },
            { code: 'BOM', name: 'Mumbai - Chhatrapati Shivaji', distance: 1196, flightTime: 2.8 },
            { code: 'SIN', name: 'Singapore - Changi', distance: 3279, flightTime: 7.2 },
            { code: 'JFK', name: 'New York - JFK', distance: 6838, flightTime: 12.5 }
        ]
    }
};

let map;
let selectedAirportCode = null;
let currentFilter = 'default'; // 'default', 'distance-asc', 'distance-desc', 'time-asc', 'time-desc'

function initializeMap() {
    // Initialize Leaflet map
    map = L.map('map', {
    minZoom: 1.5,
    maxZoom: 10,
    maxBounds: [
        [-60, -180], // Sudoeste (latitud mínima, longitud mínima)
        [85, 180]    // Noreste (latitud máxima, longitud máxima)
    ],
    maxBoundsViscosity: 1.0 // Hace que el límite sea "duro"
}).setView([20, 0], 2);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let totalRoutes = 0;

    // Add airport markers
    Object.entries(airports).forEach(([code, airport]) => {
        // Create custom marker
        const marker = L.marker(airport.coords, {
            icon: L.divIcon({
                html: `<div class="airport-marker" data-code="${code}"></div>`,
                className: 'custom-div-icon',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            })
        }).addTo(map);

        // Add popup
        //marker.bindPopup(`<b>${code}</b><br>${airport.name}`);

        // Add click event
        marker.on('click', () => showDestinations(code));

        totalRoutes += airport.destinations.length;
    });

    // Update stats
    document.getElementById('airportCount').textContent = Object.keys(airports).length;
    document.getElementById('routeCount').textContent = totalRoutes;

    // Add click event to airport markers
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('airport-marker')) {
            const code = e.target.getAttribute('data-code');
            showDestinations(code);
        }
    });
}

function sortDestinations(destinations, filter) {
    let sortedDestinations = [...destinations];
    
    switch(filter) {
        case 'distance-asc':
            sortedDestinations.sort((a, b) => a.distance - b.distance);
            break;
        case 'distance-desc':
            sortedDestinations.sort((a, b) => b.distance - a.distance);
            break;
        case 'time-asc':
            sortedDestinations.sort((a, b) => a.flightTime - b.flightTime);
            break;
        case 'time-desc':
            sortedDestinations.sort((a, b) => b.flightTime - a.flightTime);
            break;
        default:
            // Mantener orden original
            break;
    }
    
    return sortedDestinations;
}

function updateFilterButtons() {
    // Remover clase activa de todos los botones
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Añadir clase activa al botón correspondiente
    const activeBtn = document.querySelector(`[data-filter="${currentFilter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function applyFilter(filter) {
    currentFilter = filter;
    updateFilterButtons();
    
    if (selectedAirportCode) {
        renderDestinations(selectedAirportCode);
    }
}

function renderDestinations(airportCode) {
    const airport = airports[airportCode];
    const container = document.getElementById('destinationsContainer');
    container.innerHTML = '';

    const sortedDestinations = sortDestinations(airport.destinations, currentFilter);

    sortedDestinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-header">
                <div class="destination-name">${destination.name}</div>
                <div class="destination-code">${destination.code}</div>
            </div>
            <div class="destination-info">
                <div class="info-item">
                    <svg class="info-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>${destination.distance} NM</span>
                </div>
                <div class="info-item">
                    <svg class="info-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                    </svg>
                    <span>${destination.flightTime}h vuelo</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function showDestinations(airportCode) {
    const airport = airports[airportCode];
    selectedAirportCode = airportCode;
    
    document.getElementById('selectedAirport').textContent = `${airportCode} - ${airport.name}`;
    document.getElementById('modalTitle').textContent = `Destinos desde ${airportCode} - ${airport.name}`;

    // Renderizar destinos con filtro actual
    renderDestinations(airportCode);
    
    // Actualizar botones de filtro
    updateFilterButtons();

    document.getElementById('airportModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('airportModal').style.display = 'none';
    currentFilter = 'default'; // Reset filter when closing modal
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('airportModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add event listeners for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    
    // Add event listeners for filter buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn') || e.target.closest('.filter-btn')) {
            const btn = e.target.classList.contains('filter-btn') ? e.target : e.target.closest('.filter-btn');
            const filter = btn.getAttribute('data-filter');
            applyFilter(filter);
        }
    });
});