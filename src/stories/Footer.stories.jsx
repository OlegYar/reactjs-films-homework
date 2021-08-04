import React from 'react';

import Footer from '../components/footer';

export default {
  title: 'Part_3/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
