import { Story, Meta } from '@storybook/react';
import ImageAsset from '../../shared/types/asset/image-asset';
import Tile, { Props as TileProps } from './Tile';

export default {
  title: 'Component/Image Container/Tile',
  component: Tile,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TileProps> = (args) => <Tile {...args} className="w-48 h-48" />;

export const Default = Template.bind({});

const asset = new ImageAsset({
  name: 'storybook asset',
  id: '0',
  src: './tile.jpg',
});

Default.args = {
  asset,
};
