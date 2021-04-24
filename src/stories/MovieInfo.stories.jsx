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
  genreList: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: '1h 46m',
};
