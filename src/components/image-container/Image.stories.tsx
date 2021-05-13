import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Component/Tile',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
