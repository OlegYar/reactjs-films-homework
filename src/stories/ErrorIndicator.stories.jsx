import React from 'react';

import ErrorIndicator from '../components/errorIndicator';

export default {
  title: 'Part_3/ErrorIndicator',
  component: ErrorIndicator,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ErrorIndicator {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
