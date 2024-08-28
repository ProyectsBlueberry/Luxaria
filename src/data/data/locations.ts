export interface PointData {
    id: number;
    point: string;
    longitude: number;
    latitude: number;
}

export interface Stock {
    id: number;
    id_bottles: number;
    id_location: number;
    stock: boolean;
}

export interface Points_of_sale {
    id: number;
    id_drink: number;
    id_location: number;
}

export const points_map: PointData[] = [
    {
        id: 1,
        point: 'Jalisco',
        longitude: -103.385067,
        latitude: 20.685969
    },
    {
        id: 2,
        point: 'Blueberry',
        longitude: -103.421166,
        latitude: 20.67788
    },
    {
        id: 3,
        point: 'Rancho de javi',
        longitude: -104.900261,
        latitude: 21.460973
    },
];


export const stock_entries: Stock[] = [
    {
        id: 1,
        id_bottles: 10,
        id_location: 3,
        stock: true
    },
    {
        id: 2,
        id_bottles: 12,
        id_location: 1,
        stock: true
    },
    {
        id: 3,
        id_bottles: 6,
        id_location: 2,
        stock: true
    },
    {
        id: 4,
        id_bottles: 3,
        id_location: 3,
        stock: true
    },
    {
        id: 5,
        id_bottles: 15,
        id_location: 1,
        stock: true
    },
    {
        id: 6,
        id_bottles: 11,
        id_location: 2,
        stock: true
    },
    {
        id: 7,
        id_bottles: 8,
        id_location: 1,
        stock: true
    },
    {
        id: 8,
        id_bottles: 2,
        id_location: 3,
        stock: true
    },
    {
        id: 9,
        id_bottles: 9,
        id_location: 2,
        stock: true
    },
    {
        id: 10,
        id_bottles: 5,
        id_location: 1,
        stock: true
    },
    {
        id: 11,
        id_bottles: 7,
        id_location: 3,
        stock: true
    },
    {
        id: 12,
        id_bottles: 4,
        id_location: 2,
        stock: true
    },
    {
        id: 13,
        id_bottles: 1,
        id_location: 1,
        stock: true
    },
    {
        id: 14,
        id_bottles: 13,
        id_location: 3,
        stock: true
    },
    {
        id: 15,
        id_bottles: 16,
        id_location: 2,
        stock: true
    },
    {
        id: 16,
        id_bottles: 14,
        id_location: 1,
        stock: true
    },
    {
        id: 17,
        id_bottles: 10,
        id_location: 2,
        stock: true
    },
    {
        id: 18,
        id_bottles: 12,
        id_location: 3,
        stock: true
    },
    {
        id: 19,
        id_bottles: 6,
        id_location: 1,
        stock: true
    },
    {
        id: 20,
        id_bottles: 3,
        id_location: 2,
        stock: true
    },
    {
        id: 21,
        id_bottles: 15,
        id_location: 3,
        stock: true
    },
    {
        id: 22,
        id_bottles: 11,
        id_location: 1,
        stock: true
    },
    {
        id: 23,
        id_bottles: 8,
        id_location: 2,
        stock: true
    },
    {
        id: 24,
        id_bottles: 2,
        id_location: 1,
        stock: true
    },
    {
        id: 25,
        id_bottles: 9,
        id_location: 3,
        stock: true
    },
    {
        id: 26,
        id_bottles: 5,
        id_location: 2,
        stock: true
    },
    {
        id: 27,
        id_bottles: 7,
        id_location: 1,
        stock: true
    },
    {
        id: 28,
        id_bottles: 4,
        id_location: 3,
        stock: true
    },
    {
        id: 29,
        id_bottles: 1,
        id_location: 2,
        stock: true
    },
    {
        id: 30,
        id_bottles: 13,
        id_location: 1,
        stock: true
    }
];
export const points_of_sale: Points_of_sale[] = [
    {
        id: 1,
        id_drink: 10,
        id_location: 3,
    },
    {
        id: 2,
        id_drink: 12,
        id_location: 1,
    },
    {
        id: 3,
        id_drink: 6,
        id_location: 2,
    },
    {
        id: 4,
        id_drink: 3,
        id_location: 3,
    },
    {
        id: 5,
        id_drink: 15,
        id_location: 1,
    },
    {
        id: 6,
        id_drink: 11,
        id_location: 2,
    },
    {
        id: 7,
        id_drink: 8,
        id_location: 1,
    },
    {
        id: 8,
        id_drink: 2,
        id_location: 3,
    },
    {
        id: 9,
        id_drink: 9,
        id_location: 2,
    },
    {
        id: 10,
        id_drink: 5,
        id_location: 1,
    },
    {
        id: 11,
        id_drink: 7,
        id_location: 3,
    },
    {
        id: 12,
        id_drink: 4,
        id_location: 2,
    },
    {
        id: 13,
        id_drink: 1,
        id_location: 1,
    },
    {
        id: 14,
        id_drink: 13,
        id_location: 3,
    },
    {
        id: 15,
        id_drink: 16,
        id_location: 2,
    },
    {
        id: 16,
        id_drink: 14,
        id_location: 1,
    },
    {
        id: 17,
        id_drink: 10,
        id_location: 2,
    },
    {
        id: 18,
        id_drink: 12,
        id_location: 3,
    },
    {
        id: 19,
        id_drink: 6,
        id_location: 1,
    },
    {
        id: 20,
        id_drink: 3,
        id_location: 2,
    },
    {
        id: 21,
        id_drink: 15,
        id_location: 3,
    },
    {
        id: 22,
        id_drink: 11,
        id_location: 1,
    },
    {
        id: 23,
        id_drink: 8,
        id_location: 2,
    },
    {
        id: 24,
        id_drink: 2,
        id_location: 1,
    },
    {
        id: 25,
        id_drink: 9,
        id_location: 3,
    },
    {
        id: 26,
        id_drink: 5,
        id_location: 2,
    },
    {
        id: 27,
        id_drink: 7,
        id_location: 1,
    },
    {
        id: 28,
        id_drink: 4,
        id_location: 3,
    },
    {
        id: 29,
        id_drink: 1,
        id_location: 2,
    },
    {
        id: 30,
        id_drink: 13,
        id_location: 1,
    }
];

console.log(stock_entries);
