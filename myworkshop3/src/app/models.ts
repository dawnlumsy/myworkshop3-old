
export interface RSVP {
    name: string;
    phone: string;
    attendingDay: number;
    vegetarian: boolean,
    comments?: string,
    guest?: number,
    allergies?: string[]
}