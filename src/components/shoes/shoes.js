import React from 'react';

import ShoesList from './shoesList';

const DUMMY_SHOES = [
  {
    id: 's1',
    name: 'Air Zoom Pegasus 37 sneakers',
    description: "Nike's Air Zoom Pegasus 37 is made for running lovers.",
    price: 23,
  },
  {
    id: 's2',
    name: 'Air Jordan 6 Retro',
    description:
      'Be cool. Stay cool. The AJ6  lets your style take flight with a colorway rooted to Jordan Brand DNA',
    price: 20,
  },
  {
    id: 's3',
    name: 'Air Jordan 6 Retro',
    description:
      'Be cool. Stay cool. The AJ6 lets your style take flight with a colorway rooted to Jordan Brand DNA',
    price: 22,
  },
];

const Shoes = (props) => {
  return <ShoesList items={DUMMY_SHOES} />;
};

export default Shoes;
