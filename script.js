const airports = {
    // Nacionales

    'SKBO': {
        name: 'Bogotá - El Dorado', //listo
        coords: [4.7016, -74.1469],
        destinations: [
            
            { code: 'ADZ', name: 'San Andrés - Gustavo Rojas Pinilla', distance: 688, flightTime: 1.45 },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 407, flightTime: 1 },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 163, flightTime: 0.35 },
            { code: 'CDG', name: 'Paris - Charles de Gaulle Airport', distance: 4736, flightTime: 9.4 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 177, flightTime: 0.35 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 415, flightTime: 1 },
            { code: 'CUC', name: 'Cúcuta - Camilo Daza', distance: 220, flightTime: 0.43 },
            { code: 'EZE', name: 'Buenos Aires - Ezeiza International', distance: 2605, flightTime: 5.4 },
            { code: 'LET', name: 'Leticia - Alfredo Vásquez Cobo', distance: 628, flightTime: 1.35 },
            { code: 'LHR', name: 'Londres - Heathrow Airport', distance: 4633, flightTime: 9.30 },
            { code: 'LIM', name: 'Lima - Jorge Chavez Airport', distance: 1049, flightTime: 2.30 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 144, flightTime: 0.29 },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 306, flightTime: 0.5 },
            { code: 'RCH', name: 'Riohacha - Almirante Padilla', distance: 435, flightTime: 1.10 },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 396, flightTime: 1.06 },
            { code: 'UIO', name: 'Pereira - Matecaña', distance: 150, flightTime: 0.26 },

        //News destinations        
            { code: 'BCN', name: 'Barcelona - El Prat', distance: 4711, flightTime: 9.35, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 575, flightTime: 1.35, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'GRU', name: 'São Paulo - Guarulhos International', distance: 2429, flightTime: 4.57, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'JFK', name: 'New York - John F. Kennedy International', distance: 2268, flightTime: 5.03, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'LAX', name: 'Los Angeles International', distance: 3123, flightTime: 7.14, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MAD', name: 'Madrid - Barajas', distance: 4480, flightTime: 9.05, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MCO', name: 'Orlando International', distance: 1516, flightTime: 4.75, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MEX', name: 'México - Benito Juárez International', distance: 1782, flightTime: 4, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MIA', name: 'Miami International', distance: 1367, flightTime: 3.10, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MUN', name: 'Cancún International', distance: 1298, flightTime: 3.02, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'NVA', name: 'Neiva - Benito Salas', distance: 198, flightTime: 0.30, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño International', distance: 764, flightTime: 2.04, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 428, flightTime: 1.10, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'SDQ', name: 'Santo Domingo - Las Américas International', distance: 886, flightTime: 2.12, showFromDateUTC: '2025-09-01T00:00:00Z' },
        ]},
    
    'SKRG': {
        name: 'Medellín - José María Córdova',
        coords: [6.1645, -75.4234],
        destinations: [
            { code: 'ADZ', name: 'San Andrés - Gustavo Rojas Pinilla', distance: 563, flightTime: 1.3 },
            { code: 'AXM', name: 'Armenia - El Edén', distance: 118, flightTime: 0.3 },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 296, flightTime: 1 },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 159, flightTime: 0.35 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 159, flightTime: 0.3 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 209, flightTime: 0.4 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 257, flightTime: 0.5 },
            { code: 'CUC', name: 'Cucuta - Camilo Daza', distance: 210, flightTime: 0.45 },
            { code: 'CUN', name: 'Cancún International', distance: 1186, flightTime: 3 },
            { code: 'EZE', name: 'Buenos Aires - Ezeiza International', distance: 2767, flightTime: 6.2 },
            { code: 'GRU', name: 'São Paulo - Guarulhos', distance: 2569, flightTime: 5.5 },
            { code: 'JFK', name: 'John F. Kennedy International', distance: 2151, flightTime: 5 },
            { code: 'LIM', name: 'Lima - Jorge Chávez', distance: 1113, flightTime: 2.47 },
            { code: 'MAD', name: 'Madrid - Barajas', distance: 4411, flightTime: 9 },
            { code: 'MCO', name: 'Orlando International', distance: 1378, flightTime: 3.3 },
            { code: 'MEX', name: 'Mexico City - Benito Juárez', distance: 1694, flightTime: 3.5 },
            { code: 'MIA', name: 'Miami International', distance: 1245, flightTime: 3 },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 164, flightTime: 0.35 },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 158, flightTime: 0.40 },
            { code: 'PSO', name: 'Pasto - Antonio Nariño', distance: 319, flightTime: 1 },
            { code: 'PUJ', name: 'Punta Cana International', distance: 868, flightTime: 2.10 },
            { code: 'RCH', name: 'Riohacha - Almirante Padilla', distance: 374, flightTime: 1.15 },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 313, flightTime: 1 },
            { code: 'VUP', name: 'Valledupar - Alfonso López Pumarejo', distance: 292, flightTime: 0.57 },
            { code: 'VVC', name: 'Villavicencio - Vanguardia', distance: 203, flightTime: 0.45 },

        // New destinations            
            { code: 'BCN', name: 'Barcelona - El Prat', distance: 7200, flightTime: 14, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 2100, flightTime: 4.5, showFromDateUTC: '2025-09-01T00:00:00Z' },            
            { code: 'LAX', name: 'Los Angeles International', distance: 5650, flightTime: 11, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 2000, flightTime: 4, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 1850, flightTime: 4, showFromDateUTC: '2025-09-01T00:00:00Z' },
        ]},

    'SKCL': {
        name: 'Cali - Alfonso Bonilla Aragón',
        coords: [3.5432, -76.3816],
        destinations: [
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 459, flightTime: 1.1 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 227, flightTime: 0.37 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 1073, flightTime: 1.05 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 168, flightTime: 0.35 },
            { code: 'MEX', name: 'México - Benito Juárez International', distance: 1751, flightTime: 4 },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 334, flightTime: 1 },
            { code: 'ADZ', name: 'San Andrés - Gustavo Rojas Pinilla', distance: 643, flightTime: 1.41 },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 477, flightTime: 1.16 },

        // New destinations
            { code: 'EZE', name: 'Buenos Aires - Ezeiza International', distance: 2558, flightTime: 6.01, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BCN', name: 'Barcelona - El Prat', distance: 4836, flightTime: 10.26, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 718, flightTime: 1.55, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CUN', name: 'Cancún International', distance: 1273, flightTime: 3.02, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'GRU', name: 'São Paulo - Guarulhos International', distance: 2497, flightTime: 5.37, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'JFK', name: 'New York - John F. Kennedy International', distance: 4023, flightTime: 5.18, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'LAX', name: 'Los Angeles International', distance: 3124, flightTime: 7.15, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MAD', name: 'Madrid - Barajas', distance: 4608, flightTime: 10, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MCO', name: 'Orlando International', distance: 1541, flightTime: 3.35, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MIA', name: 'Miami International', distance: 1393, flightTime: 3.19, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'LIM', name: 'Lima - Jorge Chávez', distance: 978, flightTime: 2.25, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PUJ', name: 'Punta Cana International', distance: 868, flightTime: 2.36, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño International', distance: 872, flightTime: 2.15, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 403, flightTime: 2.1, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SKCG': {
        name: 'Cartagena - Rafael Núñez',
        coords: [10.4424, -75.5130],
        destinations: [
            { code: 'ADZ', name: 'San Andrés - Gustavo Rojas Pinilla', distance: 413, flightTime: 1.07 },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 270, flightTime: 0.57 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 413, flightTime: 1.05 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 465, flightTime: 1.13 },
            { code: 'CUC', name: 'Cúcuta - Camilo Daza', distance: 294, flightTime: 1 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 320, flightTime: 1 },
            { code: 'MEX', name: 'México - Benito Juárez International', distance: 1594, flightTime: 3.37 },
            { code: 'NVA', name: 'Neiva - Benito Salas', distance: 461, flightTime: 1.15 },
            { code: 'PSO', name: 'Pasto - Antonio Nariño', distance: 575, flightTime: 1.35 },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 377, flightTime: 1.08 },

        // New destinations
            { code: 'AMS', name: 'Amsterdam - Schiphol', distance: 4660, flightTime: 10, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 512, flightTime: 1.25, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'LAX', name: 'Los Angeles International', distance: 2785, flightTime: 6.25, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MCO', name: 'Orlando International', distance: 1159, flightTime: 2.48, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MIA', name: 'Miami International', distance: 988, flightTime: 2.26, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 691, flightTime: 1.5, showFromDateUTC: '2025-09-01T00:00:00Z' }

        ]},

    'SKBQ': {
        name: 'Barranquilla - Ernesto Cortissoz',
        coords: [10.8896, -74.7808],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 440, flightTime: 1.07 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 540, flightTime: 1.22 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 341, flightTime: 1 },

        // New destinations
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 463, flightTime: 1.21, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MIA', name: 'Miami International', distance: 1812, flightTime: 2.25, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 643, flightTime: 1.45, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 325, flightTime: 1, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SKCC': {
        name: 'Cúcuta - Camilo Daza',
        coords: [7.9275, -72.5117],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 311, flightTime: 0.48 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 277, flightTime: 0.49 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 255, flightTime: 0.53 },

        // New destinations
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 417, flightTime: 1.11, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 574, flightTime: 1.34, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 445, flightTime: 1.16, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},
        
    'SKLT': {
        name: 'Leticia - Alfredo Vásquez Cobo',
        coords: [-4.1933, -69.9436],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 669, flightTime: 1.38 }
        ]},

    'SKNV': {
        name: 'Neiva - Benito Salas',
        coords: [2.9236, -75.2808],
        destinations: [
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 487, flightTime: 1.23 },
        //New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 181, flightTime: 0.44, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SKAR': {
        name: 'Armenia - El Edén',
        coords: [4.4528, -75.7661],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 108, flightTime: 0.23 }
        ]},

    'SKBG': {
        name: 'Bucaramanga - Palonegro',
        coords: [7.1265, -73.1848],
        destinations: [
            { code: 'ADZ', name: 'San Andrés - Gustavo Rojas Pinilla', distance: 657, flightTime: 1.38 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 225, flightTime: 0.41 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 249, flightTime: 0.48 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 187, flightTime: 0.35 },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 251, flightTime: 0.46 },

        // New destinations
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 477, flightTime: 1.20, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 665, flightTime: 1.46, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 415, flightTime: 1.07, showFromDateUTC: '2025-09-01T00:00:00Z' } 
        ]},

    'SKPE': {
        name: 'Pereira - Matecaña',
        coords: [4.8127, -75.7395],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 189, flightTime: 0.35 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 363, flightTime: 1.06 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 107, flightTime: 0.23 },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 414, flightTime: 1.18 },

        // New destinations
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 679, flightTime: 1.48, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MIA', name: 'Miami International', distance: 1350, flightTime: 3.18, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance:  805, flightTime: 2.08, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 361, flightTime: 1, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SKPS': {
        name: 'Pasto - Antonio Nariño',
        coords: [1.3963, -77.2915],
        destinations: [
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 600, flightTime: 1.42 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 310, flightTime: 1.03 }
        ]},

    'SKRH': {
        name: 'Riohacha - Almirante Padilla',
        coords: [11.5262, -72.9259],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 397, flightTime: 1.1 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 482, flightTime: 1.16 } 
        ]},
        
    'SKSM': {
        name: 'Santa Marta - Simón Bolívar',
        coords: [11.1194, -74.2206],
        destinations: [
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 279, flightTime: 0.58 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 441, flightTime: 1.10 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 517, flightTime: 1.23 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 344, flightTime: 0.57 },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 420, flightTime: 1.07 },

        // New destinations
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 455, flightTime: 1.20, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 688, flightTime: 1.48, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 338, flightTime: 1.03, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SKSP': {
        name: 'San Andrés - Gustavo Rojas Pinilla',
        coords: [12.5836, -81.7117],
        destinations: [
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 669, flightTime: 1.42 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 691, flightTime: 1.44 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 664, flightTime: 1.41 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 401, flightTime: 1.14 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 572, flightTime: 1.40 }
        ]},

    'SKVP': {
        name: 'Valledupar - Alfonso López Pumarejo',
        coords: [10.4350, -73.2495],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 335, flightTime: 0.57 },
        // New destinations    
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 417, flightTime: 1.05, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SKVV': {
        name: 'Villavicencio - Vanguardia',
        coords: [4.1681, -73.6138],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 224, flightTime: 0.4 }
        ]},

    'SKMR': {
        name: 'Montería - Los Garzones',
        coords: [8.8235, -75.8259],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 317, flightTime: 1 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 364, flightTime: 1 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 197, flightTime: 0.47 },

        // New destinations
            { code: 'CCS', name: 'Caracas - Simón Bolívar International', distance: 557, flightTime: 1.32, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PMV', name: 'Porlamar - Santiago Mariño Caribbean International', distance: 724, flightTime: 1.56, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PTY', name: 'Panamá - Tocumen International', distance: 255, flightTime: 0.48, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},
    
    //International airports
    /*
    'EHAM': {
        name: 'Amsterdam - Schiphol',
        coords: [52.3086, 4.7639],
        destinations: [
        // News destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 4896, flightTime: 10.12, showFromDateUTC: '2025-09-1T09:23:00Z' },       
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 4802, flightTime: 10.09, showFromDateUTC: '2025-09-1T09:23:00Z' }
        ]},
    */
    'KJFK': {
        name: 'New York - John F. Kennedy International',
        coords: [40.6413, -73.7781],
        destinations: [
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 2317, flightTime: 4.57 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 2315, flightTime: 5 },
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2202, flightTime: 4.51 }
            
    ]},  
    
    'KLAX': {
        name: 'Los Angeles - Los Angeles International',
        coords: [33.9416, -118.4085],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2998, flightTime: 6.33 },
        
        // New destinations
            { code: 'BOG' , name: 'Bogotá - El Dorado', distance: 3128, flightTime: 6.38, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 3015, flightTime: 6.36, showFromDateUTC: '2025-09-01T00:00:00Z' },
        ]},

    'KMCO': {
        name: 'Orlando - Orlando International',
        coords: [28.4294, -81.3089],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1436, flightTime: 3.16 },
        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1556, flightTime: 3.23, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 1176, flightTime: 2.43, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'KMIA': {
        name: 'Miami - Miami International',
        coords: [25.7959, -80.2871],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1255, flightTime: 3.05 },

        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1393, flightTime: 3.13, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 1375, flightTime: 3.14, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 992, flightTime: 3.28, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 978, flightTime: 2.27, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 1332, flightTime: 3.08, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},
/*
    'LEBL': {
        name: 'Barcelona - El Prat',
        coords: [41.2974, 2.0833],
        destinations: [

        // New destinations
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 4762, flightTime: 10.34, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 4684, flightTime: 9.58, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 4947, flightTime: 10.50, showFromDateUTC: '2025-09-01T00:00:00Z' },
        ]},   

    'LEMD': {
        name: 'Madrid - Barajas',
        coords: [40.4936, -3.5668],
        destinations: [
        
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 4413, flightTime: 9.33 },
        
        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 4398, flightTime: 9.20, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 4578, flightTime: 9.45, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},
*/
    'MDPC': {
        name: 'Punta Cana - Punta Cana International',
        coords: [18.5674, -68.3636],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 953, flightTime: 2.24 },
        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1140, flightTime: 2.42, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 1039, flightTime: 2.31, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},
    
    'MMMX': {
        name: 'México - Benito Juárez International',
        coords: [19.4361, -99.0721],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1665, flightTime: 4 },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 1727, flightTime: 4.04 },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 1490, flightTime: 3.34 },

        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1785, flightTime: 4.14, showFromDateUTC: '2025-09-01T00:00:00Z' },
        ]},
    
    'MMUN': {
        name: 'Cancún - Cancún International',
        coords: [21.0369, -86.8772],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2620, flightTime: 3 },

        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1282, flightTime: 3.11, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 1228, flightTime: 3.10, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},
/*
    'MPTO': {
        name: 'Panamá - Tocumen International',
        coords: [9.0701, -79.3850],
        destinations: [
        // New destinations
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 369, flightTime: 1.02, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 451, flightTime: 1.11, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 399, flightTime: 1.04, showFromDateUTC: '2025-09-01T00:00:00Z' }, 
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 438, flightTime: 1.11, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 300, flightTime: 0.53, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CUC', name: 'Cúcuta - Camilo Daza', distance: 483, flightTime: 1.25, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 253, flightTime: 0.50, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 351, flightTime: 1, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 334, flightTime: 1.11, showFromDateUTC: '2025-09-01T00:00:00Z' },
        ]},
*/
    'SAEZ': {
        name: 'Buenos Aires - Ministro Pistarini',
        coords: [-34.8222, -58.5358],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2744, flightTime: 6.27 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 2652, flightTime: 6.15 },
        // New destinations
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 2620, flightTime: 6.15, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SBGR': {
        name: 'São Paulo - Guarulhos',
        coords: [-23.4356, -46.4731],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 2519, flightTime: 6.05 },
        // New destinations
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 2452, flightTime: 5.48, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 2419, flightTime: 5.55, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]},

    'SPJC': {
        name: 'Lima - Jorge Chávez',
        coords: [-12.0219, -77.1143],
        destinations: [
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 1150, flightTime: 2.53 },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 1121, flightTime: 2.46 },
        // New destinations
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 993, flightTime: 2.33, showFromDateUTC: '2025-09-01T00:00:00Z' }
    ]},
/*
    'SVMI': {
        name: 'Caracas - Simón Bolívar International',
        coords: [10.5981, -66.9912],
        showFromDateUTC: '2025-09-01T00:00:00Z',
        destinations: [
        // New destinations
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 614, flightTime: 1.30, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 606, flightTime: 1.36, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 742, flightTime: 1.47, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 518, flightTime: 1.23, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 467, flightTime: 1.12, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 488, flightTime: 1.18, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CUC', name: 'Cúcuta - Camilo Daza', distance: 404, flightTime: 1.06, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 550, flightTime: 1.27, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 682, flightTime: 1.47, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 498, flightTime: 1.24, showFromDateUTC: '2025-09-01T00:00:00Z' }, 
        ]},

    'SVMG': {
        name: 'Porlamar - Santiago Mariño International',
        coords: [10.9153, -63.9684],
        destinations: [
        // New destinations
            { code: 'MDE', name: 'Medellín - José María Córdova', distance: 797, flightTime: 2.03, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BOG', name: 'Bogotá - El Dorado', distance: 769, flightTime: 2.2, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CLO', name: 'Cali - Alfonso Bonilla Aragón', distance: 891, flightTime: 2.12, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CTG', name: 'Cartagena - Rafael Núñez', distance: 709, flightTime: 1.48, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BGA', name: 'Bucaramanga - Palonegro', distance: 662, flightTime: 1.38, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'BAQ', name: 'Barranquilla - Ernesto Cortissoz', distance: 663, flightTime: 1.43, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'CUC', name: 'Cúcuta - Camilo Daza', distance: 562, flightTime: 1.30, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'MTR', name: 'Montería - Los Garzones', distance: 745, flightTime: 1.53, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'PEI', name: 'Pereira - Matecaña', distance: 835, flightTime: 2, showFromDateUTC: '2025-09-01T00:00:00Z' },
            { code: 'SMR', name: 'Santa Marta - Simón Bolívar', distance: 629, flightTime: 1.45, showFromDateUTC: '2025-09-01T00:00:00Z' }
        ]
    }*/
};

let map;
let selectedAirportCode = null;
let currentFilter = 'default';
let currentMapType = 'streets';
let streetLayer, satelliteLayer, hybridLayer, terrainLayer;

function initializeMap() {
    // Initialize Leaflet map
    map = L.map('map', {
        minZoom: 1.5,
        maxZoom: 12,
        maxBounds: [
            [-60, -180],
            [85, 180]
        ],
        maxBoundsViscosity: 1.0
    }).setView([20, 0], 2);

    // Initialize map layers
    initializeMapLayers();

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

function initializeMapLayers() {
    // Street Map (OpenStreetMap)
    streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 12
    });

    // Satellite Map
    satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri',
        maxZoom: 12
    });

    // Hybrid Map (Satellite + Labels)
    const satelliteBase = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri',
        maxZoom: 12
    });

    const boundariesLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 12
    });

    const transportationLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 12
    });

    hybridLayer = L.layerGroup([satelliteBase, boundariesLayer, transportationLayer]);

    // Terrain Map (VFR style)
    terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap contributors',
        maxZoom: 12
    });

    satelliteLayer.addTo(map);
    currentMapType = 'satellite';
    updateMapTypeButtons();
}

function changeMapType(mapType) {
    // Remove all layers
    map.removeLayer(streetLayer);
    map.removeLayer(satelliteLayer);
    map.removeLayer(hybridLayer);
    map.removeLayer(terrainLayer);

    // Add the selected layer
    switch(mapType) {
        case 'streets':
            map.addLayer(streetLayer);
            break;
        case 'satellite':
            map.addLayer(satelliteLayer);
            break;
        case 'hybrid':
            map.addLayer(hybridLayer);
            break;
        case 'terrain':
            map.addLayer(terrainLayer);
            break;
    }

    currentMapType = mapType;
    updateMapTypeButtons();
}

function updateMapTypeButtons() {
    // Remove active class from all buttons
    document.querySelectorAll('.map-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to current map type button
    const activeBtn = document.querySelector(`[data-map-type="${currentMapType}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function toggleMapSelector() {
    const selector = document.getElementById('mapTypeSelector');
    const isVisible = selector.style.display === 'block';
    
    if (isVisible) {
        selector.style.display = 'none';
    } else {
        selector.style.display = 'block';
    }
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

    sortedDestinations


    airport.destinations

        .filter(destination => {
            // Si tiene showFromDateUTC, comparar fecha y hora UTC
            if (destination.showFromDateUTC) {
                const now = new Date();
                const showDate = new Date(destination.showFromDateUTC);
                return now >= showDate;
            }
            // Si tiene showFromUTC, comparar solo hora UTC
            if (destination.showFromUTC) {
                const nowUTC = new Date();
                const [showHour, showMin] = destination.showFromUTC.split(':').map(Number);
                const currentUTCHours = nowUTC.getUTCHours();
                const currentUTCMinutes = nowUTC.getUTCMinutes();
                return currentUTCHours > showHour || (currentUTCHours === showHour && currentUTCMinutes >= (showMin || 0));
            }
            
            // Si no tiene ninguna restricción, mostrar siempre
            return true;
        })

        .forEach(destination => {
            const isNew = !!destination.showFromUTC || !!destination.showFromDateUTC;
            const card = document.createElement('div');
            card.className = 'destination-card' + (isNew ? ' new-destination' : '');
            card.innerHTML = `
                ${isNew ? '<div class="new-corner-label">NEW</div>' : ''}
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

    renderDestinations(airportCode);
    updateFilterButtons();

    document.getElementById('airportModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('airportModal').style.display = 'none';
    currentFilter = 'default';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('airportModal');
    const mapSelector = document.getElementById('mapTypeSelector');
    
    if (event.target === modal) {
        closeModal();
    }
    
    // Close map selector when clicking outside
    if (!event.target.closest('.map-type-toggle') && mapSelector.style.display === 'block') {
        mapSelector.style.display = 'none';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        document.getElementById('mapTypeSelector').style.display = 'none';
    }
});

//prueba hora UTC

function updateUTCTIME() {

    //formateo de la hora UTC
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');

    
    //formateo de la fecha
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mesAbreviado = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ]

    const dia = now.getUTCDate();
    const mes = mesAbreviado[now.getUTCMonth()];
    const año = now.getUTCFullYear();



    document.getElementById('utcTime').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('utcDate').textContent = `${dia} ${mes} ${año}`;

}
//salida de prueba



// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    //Prueba hora UTC
    updateUTCTIME();
    setInterval(updateUTCTIME, 1000); // Actualizamos cada segundo
    // salida de prueba

    // Add event listeners for filter buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn') || e.target.closest('.filter-btn')) {
            const btn = e.target.classList.contains('filter-btn') ? e.target : e.target.closest('.filter-btn');
            const filter = btn.getAttribute('data-filter');
            applyFilter(filter);
        }
        
        // Add event listeners for map type buttons
        if (e.target.classList.contains('map-type-btn') || e.target.closest('.map-type-btn')) {
            const btn = e.target.classList.contains('map-type-btn') ? e.target : e.target.closest('.map-type-btn');
            const mapType = btn.getAttribute('data-map-type');
            changeMapType(mapType);
            document.getElementById('mapTypeSelector').style.display = 'none';
        }
    });
});

