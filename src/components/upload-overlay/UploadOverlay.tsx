import { ChangeEventHandler, useMemo } from 'react';
import { createPortal } from 'react-dom';
import useDropArea from './useDropArea';

export type Props = {
  maskTarget: Element | undefined;
  uploadTarget: Element | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>
};

const OverlayMask = ({ maskTarget }: { maskTarget: Element }) => createPortal((
  <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none" />
), maskTarget);

// eslint-disable-next-line max-len
const UploadMask = ({ uploadTarget }: { uploadTarget: Element }) => {
  const clientRect = useMemo(() => uploadTarget.getBoundingClientRect(), [uploadTarget]);

  const onDrop = useDropArea((e) => console.log(e));

  return createPortal((
    <div
      {...onDrop}
      onDragOver={onDrop.onDrop}
      className="fixed border-4 rounded-xl border-white border-dashed text-center text-white cursor-pointer pointer-events-auto z-50"
      style={{
        top: clientRect.top,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height,
      }}
    >
      {/* <h3>Drop to Upload</h3> */}
    </div>
  ), uploadTarget);
};

const UploadOverlay = ({ maskTarget, uploadTarget }: Props) => {
  if (!maskTarget || !uploadTarget) {
    return null;
  }
  return (
    <>
      <OverlayMask maskTarget={maskTarget} />
      <UploadMask uploadTarget={uploadTarget} />
    </>
  );
};

export default UploadOverlay;
