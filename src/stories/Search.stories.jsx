import React from 'react';

import Search from '../components/search/Search';

export default {
  title: 'Part_2/Search',
  component: Search,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
