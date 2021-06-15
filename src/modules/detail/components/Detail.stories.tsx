import { Story, Meta } from '@storybook/react';
import Detail from './Detail';

export default {
  title: 'Modules/Detail',
  component: Detail,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Detail {...args} />;

export const Default = Template.bind({});

Default.args = {
};
