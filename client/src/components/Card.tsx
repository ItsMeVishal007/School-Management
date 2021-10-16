import React from 'react';
import Text from './Text';
import '../styles/components/Cards.scss';

interface Icard {
  title: string;
  body: string;
}

const Card: React.FC<Icard> = ({ title, body }) => {
  return (
    <div className="FXcard">
      <img
        src={'https://source.unsplash.com/1600x900/?nature,water'}
        alt="cardImg"
      />
      <div className="FXcardTitle">
        <Text hType="h5" text={title} />
        <div className="aboutCard">
          <Text hType="body1" text={body} />
        </div>
      </div>
    </div>
  );
};

export default Card;
