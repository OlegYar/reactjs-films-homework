import React from 'react';
import { Provider } from 'react-redux';
import MovieListItemInfo from '../components/movieListItemInfo';
import store from '../store';

export default {
  title: 'Part_3/MovieListItemInfo',
  component: MovieListItemInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Provider store={store}><MovieListItemInfo {...args} /></Provider>;

export const Primary = Template.bind({});

Primary.args = {
  id: 429617,
  title: 'Spider-Man: Far From Home',
  rating: 7.5,
  genres: 'Action, Adventure, Science Fiction',
  overview: 'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
};
