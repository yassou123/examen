export class Show {
    id!: number;
    title!: string;
    date!: string;
    location!: string;
    artistId!: number;


    constructor(id: number, title: string, date: string, location: string, artistId: number) {
        this.id = id
        this.title = title
        this.date = date
        this.location = location
        this.artistId = artistId
    }
}