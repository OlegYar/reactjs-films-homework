import React from 'react';

import Button from '../components/button/Button';

export default {
  title: 'Part_2/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Watch Now',
};
