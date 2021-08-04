import React from 'react';

import Spinner from '../components/spinner';

export default {
  title: 'Part_3/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
