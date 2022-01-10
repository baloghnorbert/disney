import { IonCardContent, IonText } from "@ionic/react";
import React from "react";

interface IProps {
    label: string,
    films: string[];
}

const CharachterDetailComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    const list: JSX.Element =
        <IonText>
            {
                props.films.map(film => <li>{film}</li>)
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
                props.films.length == 0 ? empty : list
            }
            <hr />
        </IonCardContent>
    );
}

export default CharachterDetailComponent;