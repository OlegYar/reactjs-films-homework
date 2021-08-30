import React from 'react';
import MovieInfo from '../components/movieInfo/MovieInfo';

export default {
  title: 'Part_2/MovieInfo',
  component: MovieInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <MovieInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'THE JUNGLE BOOK',
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 21,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Fantasy',
    },
  ],
  duration: 140,
};

Primary.parameters = {
  backgrounds: { default: 'black' },
};
