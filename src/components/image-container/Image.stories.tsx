import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Component/Image Container/Image',
  component: Image,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: '/tile.jpg',
};
