import React from 'react';

import VideoWindow from '../components/videoWindow';

export default {
  title: 'Part_3/VideoWindow',
  component: VideoWindow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <VideoWindow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  videoKey: 'LRMTr2VZcr8',
};
