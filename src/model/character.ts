export interface ICharachter {
    count: number;
    totalPages : number,
    nextPage: string;
    data: ICharachterData[];
}

export interface ICharachterData {
    films: [],
    shortFilms: [],
    tvShows: [],
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    _id: number,
    name: string,
    imageUrl: string,
    url: string
}
