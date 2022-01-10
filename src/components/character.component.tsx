import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { ICharachterData } from "./../model/character";

interface IProps {
    charachter: ICharachterData;
}

const CharachterComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    return (
        <IonItem routerLink={`/details/${props.charachter._id}`}>
            <IonAvatar slot="start">
                <img src={props.charachter.imageUrl} alt={props.charachter.name} />
            </IonAvatar>
            <IonLabel>
                <h2>{props.charachter.name}</h2>
            </IonLabel>
        </IonItem>
    );
}

export default CharachterComponent;