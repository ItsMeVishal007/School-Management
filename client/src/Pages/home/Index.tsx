import React from 'react';
import Crousel from '../../components/Crousel';
import Text from '../../components/Text';
import Card from '../../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/home/Home.scss';

const cData = [
  {
    title: 'Yash Birthday!',
    detail: 'celebrating yash 44th birthday',
    image: 'https://source.unsplash.com/2600x900/?forest,river',
  },
  {
    title: 'Vishal Birthday!',
    detail: 'celebrating Vishal 44th birthday',
    image: 'https://source.unsplash.com/2600x900/?forest,tree',
  },
  {
    title: 'Pankaj sir Birthday!',
    detail: 'celebrating Pankaj sir 44th birthday',
    image: 'https://source.unsplash.com/2600x900/?forest,animal',
  },
];

const cardData = [
  {
    id: 0,
    title: 'Diwali Celebration',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repudiandae iste eius odit blanditiis incidunt vel deserunt soluta doloremque, deleniti, ullam delectus tenetur consequuntur, quod eaque sed perspiciatis ',
  },
  {
    id: 1,
    title: 'Holi Celebration',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repudiandae iste eius odit blanditiis incidunt vel deserunt soluta doloremque, deleniti, ullam delectus tenetur consequuntur, quod eaque sed perspiciatis ',
  },
  {
    id: 2,
    title: 'Chritmas Celebration',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repudiandae iste eius odit blanditiis incidunt vel deserunt soluta doloremque, deleniti, ullam delectus tenetur consequuntur, quod eaque sed perspiciatis ',
  },
  {
    id: 3,
    title: 'New year Celebration',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repudiandae iste eius odit blanditiis incidunt vel deserunt soluta doloremque, deleniti, ullam delectus tenetur consequuntur, quod eaque sed perspiciatis ',
  },
  {
    id: 4,
    title: 'Nitin sir Celebration',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repudiandae iste eius odit blanditiis incidunt vel deserunt soluta doloremque, deleniti, ullam delectus tenetur consequuntur, quod eaque sed perspiciatis ',
  },
];

const Index: React.FC = () => {
  return (
    <div>
      <Crousel crouselData={cData} />
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '50px',
        }}
      >
        <div className="FXcardContainer-parent">
          <div
            style={{
              marginTop: '40px',
              marginBottom: '40px',
              borderBottom: '2px solid grey',
              width: '100%',
              paddingBottom: '13px',
            }}
          >
            <Text hType="h4" text="Recent Events" />
          </div>
          <div className="FXcardContainer">
            {cardData.map<React.ReactElement>(({ title, body }) => (
              <Card title={title} body={body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
