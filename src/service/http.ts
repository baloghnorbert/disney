import { baseURL } from "./baseURL";
import { ICharachterData, ICharachter } from "../model/character";

export const GET = async<T>(request: RequestInfo): Promise<T | undefined> => {
    return await fetch(request)
        .then(response => response.json())
        .catch(ex => new Error("Fetch fail!"));
};

export module CharachterService {

    export const page = async (page: number): Promise<ICharachterData[]> => {
        const url: string = `${baseURL}characters?page=${page.toString()}`;
        const character: ICharachter | undefined = await GET<ICharachter>(url);

        return character ? character.data : [];
    }

    export const byId = async (id: string): Promise<ICharachterData | undefined> => {
        const url: string = `${baseURL}characters/${id}`;
        const characterData: ICharachterData | undefined = await GET<ICharachterData>(url);
        return characterData;
    }
}

