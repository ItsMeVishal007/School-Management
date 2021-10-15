import React from 'react';
import Text from './Text';
import '../styles/components/Cards.scss';

const Card: React.FC = () => {
    return (
        <div className="FXcard">
            <img src={"https://source.unsplash.com/1600x900/?nature,water"} alt="cardImg" />
            <div className="FXcardTitle">
                <Text hType="h4" text="Diwali celebration" />
            </div>
        </div>
    )
}

export default Card;
