export interface Manufacturer {
    name: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
}

export interface Product {
    "id": string,
    "name": string,
    "description": string,
    "price": number,
    "category": string,
    "stock": {
        "available": number,
        "reserved": number,
        "location": string,
    },
    "tags": string[],
    "rating": number,
    "deleted": boolean
}
