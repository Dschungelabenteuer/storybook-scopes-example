import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Homepage } from '../HomepageA';

export default {
  title: 'Project A (CSF)/Dashboard',
  component: Homepage,
  scopes: ['developers-a'],
} as Meta;

const Template: Story = (args) => <Homepage {...args} />;

export const Primary = Template.bind({});

export const DesignerOnlyStory = Template.bind({});
DesignerOnlyStory.scopes = ['designers'];
