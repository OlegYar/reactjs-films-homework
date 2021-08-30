import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ModalWindow from '../components/modalWindow';

export default {
  title: 'Part_3/ModalWindow',
  component: ModalWindow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Provider store={store}><ModalWindow {...args} /></Provider>;

export const Primary = Template.bind({});
