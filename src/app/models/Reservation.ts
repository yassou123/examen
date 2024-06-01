export class Reservation {
    id!: number;
    showId!: number;
    name!: string;
    seats!: number;


    constructor(id: number, showId: number, name: string, seats: number) {
        this.id = id
        this.showId = showId
        this.name = name
        this.seats = seats
    }
}