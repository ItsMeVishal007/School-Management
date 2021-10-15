import React from 'react';
import Crousel from '../../components/Crousel';
import Text from '../../components/Text';
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

const Index: React.FC = () => {
  return (
    <div>
      <Crousel crouselData={cData} />
    </div>
  );
};

export default Index;
