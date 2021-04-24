import React from 'react';

import Stars from '../components/stars/Stars';

export default {
  title: 'Part_2/Stars',
  component: Stars,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Stars {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rating: 4.8,
};
