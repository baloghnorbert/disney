import "./details.style.css"

import { RouteComponentProps, withRouter } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { IonCard, IonHeader, IonCardTitle, IonText, IonCardSubtitle, IonCardContent, IonPage, IonToolbar, IonTitle, IonContent, IonAvatar, IonCardHeader } from "@ionic/react";
import Loader from "react-loader-spinner";
import { ICharachterData } from "./../../model/character";
import { CharachterService } from "./../../service/http";
import LoaderComponent from "../../components/Loader";
import CharachterComponent from "../../components/character.component";
import CharachterDetailComponent from "../../components/character.detail.component";

interface IProps extends RouteComponentProps<{ id: string }> {
}

const DetailPage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [character, setCharacter] = useState<ICharachterData>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchData();
    }, [props.match.params.id]);

    const fetchData = async (): Promise<void> => {
        const data: ICharachterData | undefined = await CharachterService.byId(props.match.params.id);
        setCharacter(data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    const card: JSX.Element =
        <IonCard >
            <img src={character?.imageUrl} alt={character?.name} />
            <IonCardHeader>
                <IonCardTitle>
                    <IonText>{character?.name}</IonText>
                </IonCardTitle>
                <IonCardSubtitle>invalid date</IonCardSubtitle>
                <CharachterDetailComponent label="SHORT FILMS" films={character?.shortFilms!}></CharachterDetailComponent>
                <CharachterDetailComponent label="FILMS" films={character?.films!}></CharachterDetailComponent>
                <CharachterDetailComponent label="VIDEO GAMES" films={character?.videoGames!}></CharachterDetailComponent>
                <CharachterDetailComponent label="PARK ATTRACTIONS" films={character?.parkAttractions!}></CharachterDetailComponent>
            </IonCardHeader>

        </IonCard>

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>DISNEY Character</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    isLoading ? <LoaderComponent loading={isLoading} /> : card
                }
            </IonContent>
        </IonPage>

    );
}

export default withRouter(DetailPage);