import "./home.style.css";

import React, { useEffect, useState } from "react";
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonList,
    IonListHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent
}
    from "@ionic/react";
import { ICharachterData } from "../../model/character";
import { CharachterService } from "../../service/http";
import CharachterComponent from "../../components/character.component";

const HomePage: React.FC = (): JSX.Element => {
    const [charachters, setCharachters] = useState<ICharachterData[]>([]);
    const [page, setPage] = useState<number>(1);
    const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchData();
        setIsLoading(false);
    }, []);

    const fetchData = async (): Promise<void> => {
        const data: ICharachterData[] = await CharachterService.page(page);
        if (data && data.length > 0) {
            setCharachters([...charachters, ...data]);

            if (data.length < 50) {
                setDisableInfiniteScroll(true);
            }
            else {
                setPage(page + 1);
            }
        }
        else {
            setDisableInfiniteScroll(true);
        }
    }

    const searchNext = async (e: CustomEvent<void>): Promise<void> => {
        await fetchData();
        (e.target as HTMLIonInfiniteScrollElement).complete();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>DISNEY Characters</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonListHeader></IonListHeader>
                    {
                        charachters.map((data: ICharachterData, i: number) => <CharachterComponent charachter={data} key={i} />)
                    }
                </IonList>
                <IonInfiniteScroll threshold="50px" disabled={disableInfiniteScroll} onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
                    <IonInfiniteScrollContent loadingText="Load more characters..." loadingSpinner="bubbles">
                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}

export default HomePage;