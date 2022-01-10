import { baseURL } from "./baseURL";
import { ICharachterData, ICharachter } from "../model/character";

interface HttpResponse<T> extends Response {
    responseBody?: T;
}

export const GET = async<T>(request: RequestInfo): Promise<T | undefined> => {
    return await fetch(request)
        .then(response => response.json())
        .catch(ex => new Error("Fetch fail!"));
};

/*
export default { get }

export const HTTP = async<T>(request: RequestInfo): Promise<T | undefined> => {
    const response: HttpResponse<T> = await fetch(request);

    try {
        response.responseBody = await response.json();
    }
    catch (ex) {
        throw new Error("Fetch faild");
    }

    if (!response.ok) {
        throw new Error("Fetch faild");
    }

    return response.responseBody;
}
*/

export module CharachterService {

    export const page = async (page: number): Promise<ICharachterData[]> => {
        const url: string = `${baseURL}characters?page=${page.toString()}`;
        const character: ICharachter | undefined = await GET<ICharachter>(url);

       return character ? character.data : [];
    }

    export const byId = async (id: string): Promise<ICharachterData | undefined> => {
        const url: string = `${baseURL}characters/${id}`;
        const data: ICharachterData | undefined = await GET<ICharachterData>(url);

        if (data) {
            return data;
        }

        return undefined;
    }
}

export module MovieService {

   /* export const getAll = async (urls: string[]): Promise<IMovie[]> => {
        const movies: IMovie[] = await Promise.all(
            urls.map(
                //minden url címen egyesével végigmegy és összegyűjti
                async (url: string) => {
                    const movie: IMovie | undefined = await HTTP<IMovie>(url);
                    return movie!; //biztos hogy létezik
                }
            )
        );

        return movies;
    }
*/
}

