import React from 'react';

import AboutFilm from '../components/aboutFilm/AboutFilm';

export default {
  title: 'Part_2/AboutFilm',
  component: AboutFilm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <AboutFilm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding',
};
