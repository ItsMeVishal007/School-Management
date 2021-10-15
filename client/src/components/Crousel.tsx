import React from 'react';
import { Carousel } from 'react-bootstrap';
import Text from './Text';

interface iCrousel {
  crouselData: { title: string; detail: string; image: string }[];
}

const Crousel: React.FunctionComponent<iCrousel> = ({ crouselData }) => {
  return (
    <Carousel style={{ marginTop: '100px' }}>
      {crouselData.map<React.ReactElement>((d: any) => (
        <Carousel.Item>
          <img className="d-block w-100" src={d.image} alt="First slide" />
          <Carousel.Caption>
            <Text hType="h3" text={d?.title} />
            <Text hType="body1" text={d?.detail} />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Crousel;
