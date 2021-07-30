import { Story, Meta } from '@storybook/react';
import { useCallback, useState } from 'react';
import UploadOverlay, { Props as UploadOverlayProps } from './UploadOverlay';

export default {
  title: 'Component/UploadOverlay',
  component: UploadOverlay,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<UploadOverlayProps> = () => {
  const [targetEl, setTargetEl] = useState<HTMLDivElement>();

  const targetRef = useCallback((node: HTMLDivElement) => setTargetEl(node), []);

  return (
    <div ref={targetRef} className="w-48 h-48 bg-blue-300 relative">
      <UploadOverlay maskTarget={targetEl} uploadTarget={targetEl} />
      some text
    </div>
  );
};

export const Default = Template.bind({});

export const MutipleUploadSlots = () => {
  const [maskEl, setMaskEl] = useState<HTMLDivElement>();

  const [targetEl, setTargetEl] = useState<HTMLDivElement>();

  const maskRef = useCallback((node: HTMLDivElement) => setMaskEl(node), []);

  return (
    <div ref={maskRef} className="w-48 h-48 bg-blue-300 relative" onMouseLeave={() => setTargetEl(undefined)}>
      <UploadOverlay maskTarget={maskEl} uploadTarget={targetEl} />
      <div onMouseEnter={(e) => setTargetEl(e.target as HTMLDivElement)}>Slot 1</div>
      <div onMouseEnter={(e) => setTargetEl(e.target as HTMLDivElement)}>Slot 2</div>
    </div>
  );
};

Default.args = {
};
