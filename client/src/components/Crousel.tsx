import React from 'react';
import { Carousel } from 'react-bootstrap';
import Text from './Text';

interface iCrousel {
  crouselData: { title: string; detail: string; image: string }[];
}

const Crousel: React.FunctionComponent<iCrousel> = ({ crouselData }) => {
  return (
    <div
      style={{
        marginTop: '100px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
      }}
    >
      <Carousel>
        {crouselData.map<React.ReactElement>((d: any) => (
          <Carousel.Item>
            <img className="d-block w-100" src={d.image} alt="First slide" />
            <Carousel.Caption>
              <div style={{ textShadow: '1px 1px 10px #000' }}>
                <Text hType="h3" text={d?.title} />
                <Text hType="body1" text={d?.detail} />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Crousel;
