export interface Pet {
    id: number;
    name: string;
    species: string;
    breed: string | null;
    age: number;
    weight: number;
    medication: Medication[];    
}

export interface NewPet {
    name: string;
    species: string;
    breed: string | null;
    age: number | null;
    weight: number | null;
    medication: Medication[];    
}

export interface Medication {
    id: number;
    name: string;
    doseInMg: number;
    doseFrequency: string;
    renewal: string;
}

export interface Appointment {
    id: number;
    petId: number;
    petName: string;
    date: string;
    subject: string;
    notes: string;
}