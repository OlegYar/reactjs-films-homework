import React from 'react';

import NoVideoWindow from '../components/noVideoWindow';

export default {
  title: 'Part_3/NoVideoWindow',
  component: NoVideoWindow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <NoVideoWindow {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'black' },
};
