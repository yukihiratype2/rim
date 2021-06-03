/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { Story, Meta } from '@storybook/react';
import { useMemo } from 'react';
import Virtualized, { Props as VirtualizedProps } from './Virtualized';

export default {
  title: 'Component/Virtualized',
  component: Virtualized,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

type TemplateProps = VirtualizedProps & { itemCount: number };

const Template: Story<TemplateProps> = ({ itemCount, ...props }: TemplateProps) => {
  const itemArray = useMemo(() => new Array(itemCount).fill(null).map((v, i) => i), [itemCount]);

  return (
    <Virtualized {...props}>
      {itemArray.map((i) => (
        <div className="bg-blue-300" key={i}>{i}</div>
      ))}
    </Virtualized>
  );
};

export const Default = Template.bind({});

Default.args = {
  colCount: 3,
  itemCount: 10,
};
