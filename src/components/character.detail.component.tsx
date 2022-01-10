import { IonAvatar, IonCardContent, IonItem, IonLabel, IonText } from "@ionic/react";
import React from "react";
import { ICharachterData } from "./../model/character";

interface IProps {
    label: string,
    films: string[];
}

const CharachterDetailComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    const list: JSX.Element =
        <IonText>
            {
                props.films.map(f => <li>{f}</li>)
            }
        </IonText>
    const empty: JSX.Element =
        <IonText>
            No data available
        </IonText>

    return (
        <IonCardContent>
            <IonText>
                <p className="right">{props.label}</p>
            </IonText>
            {
                props.films.length == 0
                    ? empty
                    : list
            }
            <hr />
        </IonCardContent>
    );
}

export default CharachterDetailComponent;