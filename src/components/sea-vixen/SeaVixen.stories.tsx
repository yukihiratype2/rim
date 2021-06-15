import { Story, Meta } from '@storybook/react';
import SeaVixen, { Props as SeaVixenProps } from './SeaVixen';

export default {
  title: 'Component/SeaVixen',
  component: SeaVixen,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SeaVixenProps> = (args) => <SeaVixen {...args} className="h-96 w-96" />;

export const Default = Template.bind({});

Default.args = {
  imagePath: 'deepZoom',
  imageHeight: 4184,
  imageWidth: 8800,
};
