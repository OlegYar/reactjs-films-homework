import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Search from '../components/search/Search';
import store from '../store';

export default {
  title: 'Part_2/Search',
  component: Search,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Provider store={store}><Router><Search {...args} /></Router></Provider>;

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'black' },
};
